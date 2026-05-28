<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactLeadRequest;
use App\Mail\ContactLeadConfirmation;
use App\Mail\ContactLeadNotification;
use App\Models\ContactLead;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Throwable;

class ContactLeadController extends Controller
{
    public function store(StoreContactLeadRequest $request): JsonResponse
    {
        $lead = ContactLead::create($request->leadAttributes());

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
        } catch (Throwable $e) {
            Log::error('ContactLead email send failed', [
                'lead_id' => $lead->id,
                'error'   => $e->getMessage(),
            ]);
        }
    }
}
