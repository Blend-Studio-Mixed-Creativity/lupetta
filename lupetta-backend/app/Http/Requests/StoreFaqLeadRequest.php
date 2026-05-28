<?php

namespace App\Http\Requests;

use App\Http\Requests\Concerns\LeadAntiBot;
use Illuminate\Foundation\Http\FormRequest;

class StoreFaqLeadRequest extends FormRequest
{
    use LeadAntiBot;

    public function rules(): array
    {
        return [
            'nome'     => [
                'required', 'string', 'min:2', 'max:60',
                'regex:/^[\pL\pM\s\'\-\.]+$/u',
                new NoControlCharsRule(),
            ],
            'cognome'  => [
                'required', 'string', 'min:2', 'max:60',
                'regex:/^[\pL\pM\s\'\-\.]+$/u',
                new NoControlCharsRule(),
            ],
            'email'    => [
                'required', 'string', 'email:rfc,strict,spoof', 'max:180',
                new NoControlCharsRule(),
            ],
            'website'  => ['nullable', 'string', 'max:0'],
            '_ts'      => ['required', 'numeric'],
        ];
    }

    public function messages(): array
    {
        return [
            'nome.regex'    => 'Il nome contiene caratteri non validi.',
            'cognome.regex' => 'Il cognome contiene caratteri non validi.',
            'website.max'   => 'Richiesta rifiutata.',
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public function leadAttributes(): array
    {
        return [
            'nome'       => $this->validated('nome'),
            'cognome'    => $this->validated('cognome'),
            'email'      => $this->validated('email'),
            'ip_address' => $this->ip(),
            'user_agent' => substr((string) $this->userAgent(), 0, 500),
        ];
    }
}
