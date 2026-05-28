<?php

namespace App\Http\Requests;

use App\Http\Requests\Concerns\LeadAntiBot;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreContactLeadRequest extends FormRequest
{
    use LeadAntiBot;

    public function rules(): array
    {
        return [
            'nome'      => [
                'required', 'string', 'min:2', 'max:60',
                'regex:/^[\pL\pM\s\'\-\.]+$/u',
                new NoControlCharsRule(),
            ],
            'cognome'   => [
                'required', 'string', 'min:2', 'max:60',
                'regex:/^[\pL\pM\s\'\-\.]+$/u',
                new NoControlCharsRule(),
            ],
            'email'     => [
                'required', 'string', 'email:rfc,strict,spoof', 'max:180',
                new NoControlCharsRule(),
            ],
            'telefono'  => [
                'nullable', 'string', 'min:6', 'max:30',
                'regex:/^[0-9 +\-().]+$/',
                new NoControlCharsRule(),
            ],
            'messaggio' => [
                'required', 'string', 'min:10', 'max:3000',
                new NoSpamContentRule(),
            ],
            // Anti-bot fields (validated by the trait too).
            'website'   => ['nullable', 'string', 'max:0'],
            '_ts'       => ['required', 'numeric'],
            // Optional client meta that the frontend may attach
            'pagina'    => ['nullable', 'string', 'max:200', new NoControlCharsRule()],
            'consenso'  => ['nullable', Rule::in([true, 1, '1', 'on', 'true'])],
        ];
    }

    public function attributes(): array
    {
        return [
            'nome'      => 'nome',
            'cognome'   => 'cognome',
            'email'     => 'email',
            'telefono'  => 'telefono',
            'messaggio' => 'messaggio',
        ];
    }

    public function messages(): array
    {
        return [
            'nome.regex'      => 'Il nome contiene caratteri non validi.',
            'cognome.regex'   => 'Il cognome contiene caratteri non validi.',
            'telefono.regex'  => 'Il telefono contiene caratteri non validi.',
            'website.max'     => 'Richiesta rifiutata.',
        ];
    }

    /**
     * Returns only the data we want to persist (drops anti-bot and meta fields).
     *
     * @return array<string, mixed>
     */
    public function leadAttributes(): array
    {
        return [
            'nome'       => $this->validated('nome'),
            'cognome'    => $this->validated('cognome'),
            'email'      => $this->validated('email'),
            'telefono'   => $this->validated('telefono'),
            'messaggio'  => $this->validated('messaggio'),
            'ip_address' => $this->ip(),
            'user_agent' => substr((string) $this->userAgent(), 0, 500),
        ];
    }
}
