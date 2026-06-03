<?php

namespace Tests\Feature;

use App\Models\FaqLead;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class FaqLeadControllerTest extends TestCase
{
    use DatabaseTransactions;

    public function test_can_submit_faq_lead_with_all_fields(): void
    {
        Mail::fake();

        $data = [
            'nome'                => 'Mario',
            'cognome'             => 'Rossi',
            'email'               => 'mario.rossi@azienda.it',
            'azienda'             => 'Azienda Agricola Rossi',
            'telefono'            => '045123456',
            'provincia'           => 'Verona',
            'num_vitelli'         => '25',
            'risposte'            => [
                'Qual è oggi la difficoltà più grande?' => 'Dedico troppo tempo alla somministrazione del latte',
            ],
            'profilo_risultato'   => 'Voglio ridurre il lavoro manuale',
            'modello_consigliato' => 'Lupetta Mini Wifi',
            'website'             => '',
            '_ts'                 => time(),
        ];

        $response = $this->postJson('/api/faq-leads', $data);

        $response->assertStatus(201);
        $response->assertJson(['ok' => true]);

        $this->assertDatabaseHas('faq_leads', [
            'nome'                => 'Mario',
            'cognome'             => 'Rossi',
            'email'               => 'mario.rossi@azienda.it',
            'azienda'             => 'Azienda Agricola Rossi',
            'telefono'            => '045123456',
            'provincia'           => 'Verona',
            'num_vitelli'         => '25',
            'profilo_risultato'   => 'Voglio ridurre il lavoro manuale',
            'modello_consigliato' => 'Lupetta Mini Wifi',
        ]);

        $lead = FaqLead::first();
        $this->assertNotNull($lead->risposte);
        $this->assertEquals('Dedico troppo tempo alla somministrazione del latte', $lead->risposte['Qual è oggi la difficoltà più grande?']);
    }

    public function test_cannot_submit_faq_lead_if_missing_required_fields(): void
    {
        $response = $this->postJson('/api/faq-leads', [
            'nome' => 'Mario',
        ]);

        $response->assertStatus(422);
    }
}
