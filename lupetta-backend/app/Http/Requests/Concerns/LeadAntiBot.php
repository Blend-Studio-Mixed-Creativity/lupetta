<?php

namespace App\Http\Requests\Concerns;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

/**
 * Shared anti-bot logic for public lead form requests.
 *
 * Honeypot: a field named `website` that real users never see.
 *   If it's filled in we silently treat the submission as success.
 * Timestamp: a hidden field `_ts` (epoch ms when the form was rendered).
 *   If the form is submitted faster than MIN_FILL_SECONDS we reject it.
 */
trait LeadAntiBot
{
    private const MIN_FILL_SECONDS = 2;
    private const MAX_FORM_AGE_SECONDS = 60 * 60 * 6; // 6h

    /**
     * Common preparation for all lead form requests: trim all string inputs,
     * normalize emails and phone numbers and drop the honeypot from validated input.
     */
    protected function prepareForValidation(): void
    {
        $data = $this->all();

        array_walk_recursive($data, static function (&$value): void {
            if (is_string($value)) {
                $value = trim($value);
            }
        });

        if (isset($data['email']) && is_string($data['email'])) {
            $data['email'] = mb_strtolower($data['email']);
        }

        if (isset($data['telefono']) && is_string($data['telefono'])) {
            // Remove every char that is not a digit, plus, space, dash or parens.
            $data['telefono'] = preg_replace('/[^0-9 +\-().]/', '', $data['telefono']) ?? '';
            if ($data['telefono'] === '') {
                $data['telefono'] = null;
            }
        }

        $this->replace($data);
    }

    /**
     * Honeypot + timestamp checks. Must run AFTER the framework
     * resolves the request. The honeypot returns 201 to fake success
     * so bots do not learn anything from the response.
     */
    protected function enforceAntiBot(): void
    {
        // Honeypot: must be empty
        $honey = $this->input('website');
        if (is_string($honey) && trim($honey) !== '') {
            throw new HttpResponseException(response()->json(['ok' => true], 201));
        }

        // Timestamp: must exist and be plausible
        $ts = $this->input('_ts');
        if (! is_numeric($ts)) {
            throw new HttpResponseException(response()->json([
                'message' => 'Token del form mancante. Ricarica la pagina e riprova.',
            ], 422));
        }

        $tsMs = (int) $ts;
        $nowMs = (int) round(microtime(true) * 1000);
        $ageMs = $nowMs - $tsMs;

        if ($ageMs < self::MIN_FILL_SECONDS * 1000) {
            throw new HttpResponseException(response()->json([
                'message' => 'Invio troppo veloce. Attendi qualche secondo e riprova.',
            ], 422));
        }

        if ($ageMs > self::MAX_FORM_AGE_SECONDS * 1000 || $ageMs < 0) {
            throw new HttpResponseException(response()->json([
                'message' => 'Sessione del form scaduta. Ricarica la pagina e riprova.',
            ], 422));
        }
    }

    protected function passedValidation(): void
    {
        $this->enforceAntiBot();
    }

    protected function failedValidation(Validator $validator): void
    {
        // Honeypot still wins over normal validation errors so bots
        // do not learn which field they should fill correctly.
        $honey = $this->input('website');
        if (is_string($honey) && trim($honey) !== '') {
            throw new HttpResponseException(response()->json(['ok' => true], 201));
        }

        parent::failedValidation($validator);
    }

    public function authorize(): bool
    {
        return true;
    }
}
