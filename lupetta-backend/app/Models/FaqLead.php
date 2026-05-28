<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FaqLead extends Model
{
    protected $fillable = [
        'nome',
        'cognome',
        'email',
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
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }
}
