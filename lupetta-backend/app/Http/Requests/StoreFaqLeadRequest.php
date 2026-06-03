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
            'nome'                => [
                'required', 'string', 'min:2', 'max:60',
                'regex:/^[\pL\pM\s\'\-\.]+$/u',
                new NoControlCharsRule(),
            ],
            'cognome'             => [
                'required', 'string', 'min:2', 'max:60',
                'regex:/^[\pL\pM\s\'\-\.]+$/u',
                new NoControlCharsRule(),
            ],
            'email'               => [
                'required', 'string', 'email:rfc,strict', 'max:180',
                new NoControlCharsRule(),
            ],
            'azienda'             => ['nullable', 'string', 'max:150', new NoControlCharsRule()],
            'telefono'            => ['required', 'string', 'min:5', 'max:40', new NoControlCharsRule()],
            'provincia'           => ['required', 'string', 'min:2', 'max:100', new NoControlCharsRule()],
            'num_vitelli'         => ['required', 'integer', 'min:1'],
            'risposte'            => ['required', 'array'],
            'profilo_risultato'   => ['required', 'string', 'max:150', new NoControlCharsRule()],
            'modello_consigliato' => ['required', 'string', 'max:150', new NoControlCharsRule()],
            'website'             => ['nullable', 'string', 'max:0'],
            '_ts'                 => ['required', 'numeric'],
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
            'nome'                => $this->validated('nome'),
            'cognome'             => $this->validated('cognome'),
            'email'               => $this->validated('email'),
            'azienda'             => $this->validated('azienda'),
            'telefono'            => $this->validated('telefono'),
            'provincia'           => $this->validated('provincia'),
            'num_vitelli'         => $this->validated('num_vitelli'),
            'risposte'            => $this->validated('risposte'),
            'profilo_risultato'   => $this->validated('profilo_risultato'),
            'modello_consigliato' => $this->validated('modello_consigliato'),
            'ip_address'          => $this->ip(),
            'user_agent'          => substr((string) $this->userAgent(), 0, 500),
        ];
    }
}
