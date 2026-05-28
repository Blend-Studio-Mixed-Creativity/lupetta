<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFaqLeadRequest;
use App\Mail\FaqLeadConfirmation;
use App\Mail\FaqLeadNotification;
use App\Models\FaqLead;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Throwable;

class FaqLeadController extends Controller
{
    public function store(StoreFaqLeadRequest $request): JsonResponse
    {
        $lead = FaqLead::create($request->leadAttributes());

        $this->sendEmails($lead);

        return response()->json(['ok' => true], 201);
    }

    private function sendEmails(FaqLead $lead): void
    {
        try {
            $adminAddress = config('mail.admin_address');
            if ($adminAddress) {
                Mail::to($adminAddress)->send(new FaqLeadNotification($lead));
            }

            Mail::to($lead->email)->send(new FaqLeadConfirmation($lead));
        } catch (Throwable $e) {
            Log::error('FaqLead email send failed', [
                'lead_id' => $lead->id,
                'error'   => $e->getMessage(),
            ]);
        }
    }
}
