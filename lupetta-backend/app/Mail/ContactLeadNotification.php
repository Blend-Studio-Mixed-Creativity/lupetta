<?php

namespace App\Mail;

use App\Models\ContactLead;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactLeadNotification extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public readonly ContactLead $lead) {}

    public function envelope(): Envelope
    {
        $cc = config('mail.cc_address');

        return new Envelope(
            subject: 'Nuovo messaggio dal form di contatto',
            cc: $cc ? [new Address($cc)] : [],
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'emails.contact-lead-notification',
        );
    }
}
