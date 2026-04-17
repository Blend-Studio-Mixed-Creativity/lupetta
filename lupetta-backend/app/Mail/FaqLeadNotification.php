<?php

namespace App\Mail;

use App\Models\FaqLead;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class FaqLeadNotification extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public readonly FaqLead $lead) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Nuovo lead FAQ ricevuto',
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.faq-lead-notification',
        );
    }
}
