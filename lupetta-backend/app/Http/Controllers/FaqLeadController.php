<?php

namespace App\Http\Controllers;

use App\Mail\FaqLeadConfirmation;
use App\Mail\FaqLeadNotification;
use App\Models\FaqLead;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class FaqLeadController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'nome'     => 'required|string|max:100',
            'cognome'  => 'required|string|max:100',
            'email'    => 'required|email|max:255',
        ]);

        $lead = FaqLead::create($validated);

        $this->sendEmails($lead);

        return response()->json(['ok' => true], 201);
    }

    private function sendEmails(FaqLead $lead): void
    {
        try {
            // Notifica all'amministratore
            $adminAddress = config('mail.admin_address');
            if ($adminAddress) {
                Mail::to($adminAddress)->send(new FaqLeadNotification($lead));
            }

            // Conferma all'utente
            Mail::to($lead->email)->send(new FaqLeadConfirmation($lead));
        } catch (\Exception $e) {
            Log::error('FaqLead email send failed', [
                'lead_id' => $lead->id,
                'error'   => $e->getMessage(),
            ]);
        }
    }
}
