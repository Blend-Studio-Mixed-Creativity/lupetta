<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FaqLead extends Model
{
    protected $fillable = [
        'nome',
        'cognome',
        'email',
        'azienda',
        'telefono',
        'provincia',
        'num_vitelli',
        'risposte',
        'profilo_risultato',
        'modello_consigliato',
        'ip_address',
        'user_agent',
    ];

    protected $hidden = [
        'ip_address',
        'user_agent',
    ];

    protected function casts(): array
    {
        return [
            'risposte'   => 'array',
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }
}
