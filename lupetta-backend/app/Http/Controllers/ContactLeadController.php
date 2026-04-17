<?php

namespace App\Http\Controllers;

use App\Mail\ContactLeadConfirmation;
use App\Mail\ContactLeadNotification;
use App\Models\ContactLead;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactLeadController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'nome'      => 'required|string|max:100',
            'cognome'   => 'required|string|max:100',
            'email'     => 'required|email|max:255',
            'telefono'  => 'nullable|string|max:30',
            'messaggio' => 'required|string|max:5000',
        ]);

        $lead = ContactLead::create($validated);

        $this->sendEmails($lead);

        return response()->json(['ok' => true], 201);
    }

    private function sendEmails(ContactLead $lead): void
    {
        try {
            $adminAddress = config('mail.admin_address');
            if ($adminAddress) {
                Mail::to($adminAddress)->send(new ContactLeadNotification($lead));
            }

            Mail::to($lead->email)->send(new ContactLeadConfirmation($lead));
        } catch (\Exception $e) {
            Log::error('ContactLead email send failed', [
                'lead_id' => $lead->id,
                'error'   => $e->getMessage(),
            ]);
        }
    }
}
