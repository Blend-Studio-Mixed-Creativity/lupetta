<?php

namespace App\Http\Controllers;

use App\Models\FaqLead;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FaqLeadController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'nome'     => 'required|string|max:100',
            'cognome'  => 'required|string|max:100',
            'email'    => 'required|email|max:255',
        ]);

        FaqLead::create($validated);

        return response()->json(['ok' => true], 201);
    }
}
