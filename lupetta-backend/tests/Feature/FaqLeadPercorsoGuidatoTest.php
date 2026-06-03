<?php

namespace Tests\Feature;

use App\Mail\FaqLeadConfirmation;
use App\Mail\FaqLeadNotification;
use App\Models\FaqLead;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

/**
 * Test massivi per il percorso guidato FAQ (POST /api/faq-leads).
 *
 * Copertura:
 *  1. Happy path – tutti e 6 i profili risultato
 *  2. Testi modello consigliato – tutte le varianti inclusa Smart Home
 *  3. Campi obbligatori mancanti
 *  4. Validazione nome / cognome (regex, min, max)
 *  5. Validazione email (formato, lunghezza, normalizzazione)
 *  6. Azienda (opzionale, max 150)
 *  7. Telefono (min 5, max 40, prefisso internazionale)
 *  8. num_vitelli (intero, min 1)
 *  9. risposte (array non vuoto, persistito come JSON)
 * 10. profilo_risultato (max 150)
 * 11. Anti-bot – honeypot
 * 12. Anti-bot – timestamp (_ts troppo recente, scaduto, assente, non numerico)
 * 13. Sicurezza – NoControlCharsRule (CR, LF, NULL in vari campi)
 * 14. Email dispatch (conferma utente, notifica admin)
 * 15. Persistenza DB (tutti i campi, più lead indipendenti, user-agent troncato)
 */
class FaqLeadPercorsoGuidatoTest extends TestCase
{
    use DatabaseTransactions;

    // ── Helpers ──────────────────────────────────────────────────────────────

    /** _ts valido: tra 2 s e 6 h fa, in millisecondi. */
    private function validTs(int $secondsAgo = 5): int
    {
        return (int) round(microtime(true) * 1000) - ($secondsAgo * 1000);
    }

    private function basePayload(array $overrides = []): array
    {
        return array_merge([
            'nome'                => 'Mario',
            'cognome'             => 'Rossi',
            'email'               => 'mario.rossi@azienda.it',
            'azienda'             => 'Azienda Agricola Rossi',
            'telefono'            => '045123456',
            'provincia'           => 'Verona',
            'num_vitelli'         => 25,
            'risposte'            => [
                'Qual è oggi la difficoltà più grande?' => 'Dedico troppo tempo alla somministrazione del latte',
            ],
            'profilo_risultato'   => 'Voglio ridurre il lavoro manuale',
            'modello_consigliato' => 'Lupetta Mini Wifi, se gestisci un numero contenuto di vitelli e cerchi una soluzione semplice e funzionale.',
            'website'             => '',
            '_ts'                 => $this->validTs(),
        ], $overrides);
    }

    // ── 1. Happy path – tutti e 6 i profili ──────────────────────────────────

    #[\PHPUnit\Framework\Attributes\DataProvider('profileProvider')]
    public function test_can_submit_each_profile(string $profilo, string $modello): void
    {
        Mail::fake();

        $r = $this->postJson('/api/faq-leads', $this->basePayload([
            'profilo_risultato'   => $profilo,
            'modello_consigliato' => $modello,
        ]));

        $r->assertStatus(201)->assertJson(['ok' => true]);
        $this->assertDatabaseHas('faq_leads', ['profilo_risultato' => $profilo]);
    }

    public static function profileProvider(): array
    {
        $mini   = 'Lupetta Mini Wifi, se gestisci un numero contenuto di vitelli e cerchi una soluzione semplice e funzionale.';
        $maxi   = 'Lupetta Maxi Tech, ideale per una stalla più strutturata o per numeri di vitelli medio-alti, dove il monitoraggio e la programmazione fanno la differenza.';
        $custom = 'Configurazione da valutare con un operatore Lupetta, in base al numero di vitelli, al metodo di lavoro attuale e agli obiettivi della tua azienda.';

        return [
            'profilo_1_lavoro_manuale'     => ['Voglio ridurre il lavoro manuale', $mini],
            'profilo_2_controllo_consumi'  => ['Voglio più controllo sui consumi', $mini],
            'profilo_3_crescite_regolari'  => ['Voglio crescite più regolari', $maxi],
            'profilo_4_ridurre_errori'     => ['Voglio ridurre errori e passaggi manuali', $mini],
            'profilo_5_area_vitelli'       => ["Sto progettando o migliorando l'area vitelli", $mini],
            'profilo_6_valutazione_custom' => ['Ho più esigenze e voglio capire da dove partire', $custom],
        ];
    }

    // ── 2. Testi modello consigliato – tutte le varianti ─────────────────────

    public function test_modello_mini_wifi(): void
    {
        Mail::fake();
        $m = 'Lupetta Mini Wifi, se gestisci un numero contenuto di vitelli e cerchi una soluzione semplice e funzionale.';
        $this->postJson('/api/faq-leads', $this->basePayload(['modello_consigliato' => $m]))->assertStatus(201);
    }

    public function test_modello_mini_o_maxi(): void
    {
        Mail::fake();
        $m = 'Lupetta Mini Wifi o Lupetta Maxi Tech, da valutare tra Mini Wifi e Maxi Tech in base alle tue specifiche esigenze di automazione o controllo.';
        $this->postJson('/api/faq-leads', $this->basePayload(['modello_consigliato' => $m]))->assertStatus(201);
    }

    public function test_modello_maxi_tech(): void
    {
        Mail::fake();
        $m = 'Lupetta Maxi Tech, ideale per una stalla più strutturata o per numeri di vitelli medio-alti, dove il monitoraggio e la programmazione fanno la differenza.';
        $this->postJson('/api/faq-leads', $this->basePayload(['modello_consigliato' => $m]))->assertStatus(201);
    }

    public function test_modello_configurazione_custom(): void
    {
        Mail::fake();
        $m = 'Configurazione da valutare insieme ad un operatore Lupetta in base alle variazioni del carico di lavoro e alla flessibilità richiesta.';
        $this->postJson('/api/faq-leads', $this->basePayload(['modello_consigliato' => $m]))->assertStatus(201);
    }

    /** Testo lungo con Smart Home aggiunto (newline sostituiti da spazio nel frontend). */
    public function test_modello_maxi_tech_con_smart_home(): void
    {
        Mail::fake();
        $m = 'Lupetta Maxi Tech, ideale per una stalla più strutturata o per numeri di vitelli medio-alti, dove il monitoraggio e la programmazione fanno la differenza. Completa il tuo ambiente di crescita con Lupetta Smart Home: la soluzione complementare proposta da Tredì Italia per migliorare gli spazi, il comfort e l\'efficienza nella gestione quotidiana.';
        $this->postJson('/api/faq-leads', $this->basePayload(['modello_consigliato' => $m]))->assertStatus(201);
    }

    public function test_modello_mini_con_smart_home(): void
    {
        Mail::fake();
        $m = 'Lupetta Mini Wifi, se gestisci un numero contenuto di vitelli e cerchi una soluzione semplice e funzionale. Completa il tuo ambiente di crescita con Lupetta Smart Home: la soluzione complementare proposta da Tredì Italia per migliorare gli spazi, il comfort e l\'efficienza nella gestione quotidiana.';
        $this->postJson('/api/faq-leads', $this->basePayload(['modello_consigliato' => $m]))->assertStatus(201);
    }

    public function test_modello_consigliato_esattamente_500_caratteri_accettato(): void
    {
        Mail::fake();
        $m = str_pad('M', 500, 'o');
        $this->postJson('/api/faq-leads', $this->basePayload(['modello_consigliato' => $m]))->assertStatus(201);
    }

    public function test_modello_consigliato_501_caratteri_rifiutato(): void
    {
        $m = str_pad('M', 501, 'o');
        $this->postJson('/api/faq-leads', $this->basePayload(['modello_consigliato' => $m]))
            ->assertStatus(422)
            ->assertJsonValidationErrors(['modello_consigliato']);
    }

    // ── 3. Campi obbligatori mancanti ────────────────────────────────────────

    #[\PHPUnit\Framework\Attributes\DataProvider('requiredFieldProvider')]
    public function test_campo_obbligatorio_mancante_restituisce_422(string $field): void
    {
        $payload = $this->basePayload();
        unset($payload[$field]);

        $this->postJson('/api/faq-leads', $payload)
            ->assertStatus(422)
            ->assertJsonValidationErrors([$field]);
    }

    public static function requiredFieldProvider(): array
    {
        return [
            ['nome'],
            ['cognome'],
            ['email'],
            ['telefono'],
            ['provincia'],
            ['num_vitelli'],
            ['risposte'],
            ['profilo_risultato'],
            ['modello_consigliato'],
            ['_ts'],
        ];
    }

    // ── 4. Nome / Cognome ─────────────────────────────────────────────────────

    public function test_nome_troppo_corto_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['nome' => 'A']))
            ->assertStatus(422)->assertJsonValidationErrors(['nome']);
    }

    public function test_nome_troppo_lungo_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['nome' => str_pad('A', 61, 'a')]))
            ->assertStatus(422)->assertJsonValidationErrors(['nome']);
    }

    public function test_nome_con_cifre_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['nome' => 'Mario123']))
            ->assertStatus(422)->assertJsonValidationErrors(['nome']);
    }

    public function test_nome_con_apostrofo_accettato(): void
    {
        Mail::fake();
        $this->postJson('/api/faq-leads', $this->basePayload(['nome' => "Maria D'Angelo"]))->assertStatus(201);
    }

    public function test_nome_con_trattino_accettato(): void
    {
        Mail::fake();
        $this->postJson('/api/faq-leads', $this->basePayload(['nome' => 'Anne-Marie']))->assertStatus(201);
    }

    public function test_nome_con_accenti_accettato(): void
    {
        Mail::fake();
        $this->postJson('/api/faq-leads', $this->basePayload(['nome' => 'Antònia']))->assertStatus(201);
    }

    public function test_cognome_troppo_corto_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['cognome' => 'R']))
            ->assertStatus(422)->assertJsonValidationErrors(['cognome']);
    }

    public function test_cognome_troppo_lungo_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['cognome' => str_pad('B', 61, 'b')]))
            ->assertStatus(422)->assertJsonValidationErrors(['cognome']);
    }

    public function test_cognome_con_cifre_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['cognome' => 'Rossi99']))
            ->assertStatus(422)->assertJsonValidationErrors(['cognome']);
    }

    // ── 5. Email ─────────────────────────────────────────────────────────────

    public function test_email_non_valida_rifiutata(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['email' => 'non-una-email']))
            ->assertStatus(422)->assertJsonValidationErrors(['email']);
    }

    public function test_email_senza_tld_rifiutata(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['email' => 'mario@azienda']))
            ->assertStatus(422)->assertJsonValidationErrors(['email']);
    }

    public function test_email_troppo_lunga_rifiutata(): void
    {
        $local = str_pad('a', 170, 'a');
        $this->postJson('/api/faq-leads', $this->basePayload(['email' => $local . '@test.it']))
            ->assertStatus(422)->assertJsonValidationErrors(['email']);
    }

    public function test_email_viene_normalizzata_in_minuscolo(): void
    {
        Mail::fake();
        $this->postJson('/api/faq-leads', $this->basePayload(['email' => 'MARIO.ROSSI@Azienda.IT']))
            ->assertStatus(201);
        $this->assertDatabaseHas('faq_leads', ['email' => 'mario.rossi@azienda.it']);
    }

    // ── 6. Azienda (opzionale) ───────────────────────────────────────────────

    public function test_azienda_opzionale_accettata(): void
    {
        Mail::fake();
        $payload = $this->basePayload();
        unset($payload['azienda']);
        $this->postJson('/api/faq-leads', $payload)->assertStatus(201);
    }

    public function test_azienda_null_accettata(): void
    {
        Mail::fake();
        $this->postJson('/api/faq-leads', $this->basePayload(['azienda' => null]))->assertStatus(201);
    }

    public function test_azienda_troppo_lunga_rifiutata(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['azienda' => str_pad('A', 151, 'z')]))
            ->assertStatus(422)->assertJsonValidationErrors(['azienda']);
    }

    // ── 7. Telefono ──────────────────────────────────────────────────────────

    public function test_telefono_troppo_corto_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['telefono' => '12']))
            ->assertStatus(422)->assertJsonValidationErrors(['telefono']);
    }

    public function test_telefono_troppo_lungo_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['telefono' => str_pad('0', 41, '1')]))
            ->assertStatus(422)->assertJsonValidationErrors(['telefono']);
    }

    public function test_telefono_con_prefisso_internazionale_accettato(): void
    {
        Mail::fake();
        $this->postJson('/api/faq-leads', $this->basePayload(['telefono' => '+39 045 123456']))->assertStatus(201);
    }

    public function test_telefono_con_parentesi_accettato(): void
    {
        Mail::fake();
        $this->postJson('/api/faq-leads', $this->basePayload(['telefono' => '(045) 123456']))->assertStatus(201);
    }

    // ── 8. num_vitelli ────────────────────────────────────────────────────────

    public function test_num_vitelli_zero_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['num_vitelli' => 0]))
            ->assertStatus(422)->assertJsonValidationErrors(['num_vitelli']);
    }

    public function test_num_vitelli_negativo_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['num_vitelli' => -5]))
            ->assertStatus(422)->assertJsonValidationErrors(['num_vitelli']);
    }

    public function test_num_vitelli_stringa_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['num_vitelli' => 'molti']))
            ->assertStatus(422)->assertJsonValidationErrors(['num_vitelli']);
    }

    public function test_num_vitelli_uno_accettato(): void
    {
        Mail::fake();
        $this->postJson('/api/faq-leads', $this->basePayload(['num_vitelli' => 1]))->assertStatus(201);
    }

    public function test_num_vitelli_grande_accettato(): void
    {
        Mail::fake();
        $this->postJson('/api/faq-leads', $this->basePayload(['num_vitelli' => 500]))->assertStatus(201);
    }

    // ── 9. risposte ──────────────────────────────────────────────────────────

    public function test_risposte_non_array_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['risposte' => 'risposta singola']))
            ->assertStatus(422)->assertJsonValidationErrors(['risposte']);
    }

    public function test_risposte_array_vuoto_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['risposte' => []]))
            ->assertStatus(422)->assertJsonValidationErrors(['risposte']);
    }

    public function test_risposte_quiz_completo_persistito_come_json(): void
    {
        Mail::fake();
        $risposte = [
            'Qual è oggi la difficoltà più grande?'         => 'Vorrei crescite più regolari e controllate',
            'Come gestisci oggi l\'alimentazione?'          => 'Manualmente, con secchi o biberon',
            'Quanti vitelli gestisci?'                      => 'Da 25 a 50',
            'Quanto pesa oggi la gestione dell\'allattamento?' => 'Molto, richiede tempo tutti i giorni',
            'Quanto è importante sapere quanto beve?'       => 'Fondamentale, voglio usare i dati',
            'Come gestisci quantità e incrementi?'          => 'Vorrei impostare meglio gli incrementi',
            'Qual è il tuo obiettivo principale?'           => 'Avere vitelli più regolari tra loro',
            'Chi si occupa dei vitelli?'                    => 'Me ne occupo io direttamente',
            'Stai valutando l\'organizzazione dell\'area?'  => 'No, mi interessa solo la parte alimentare',
            'Se dovessi scegliere una sola priorità?'       => 'Migliorare la crescita dei vitelli',
        ];

        $this->postJson('/api/faq-leads', $this->basePayload(['risposte' => $risposte]))->assertStatus(201);

        $lead = FaqLead::latest()->first();
        $this->assertEquals($risposte, $lead->risposte);
    }

    // ── 10. profilo_risultato ─────────────────────────────────────────────────

    public function test_profilo_risultato_troppo_lungo_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['profilo_risultato' => str_pad('P', 151, 'r')]))
            ->assertStatus(422)->assertJsonValidationErrors(['profilo_risultato']);
    }

    public function test_profilo_risultato_esattamente_150_caratteri_accettato(): void
    {
        Mail::fake();
        $this->postJson('/api/faq-leads', $this->basePayload(['profilo_risultato' => str_pad('P', 150, 'r')]))->assertStatus(201);
    }

    // ── 11. Anti-bot – Honeypot ───────────────────────────────────────────────

    public function test_honeypot_compilato_restituisce_fake_201(): void
    {
        $r = $this->postJson('/api/faq-leads', $this->basePayload(['website' => 'http://spam.example.com']));
        $r->assertStatus(201)->assertJson(['ok' => true]);
        $this->assertDatabaseMissing('faq_leads', ['email' => 'mario.rossi@azienda.it']);
    }

    public function test_honeypot_solo_spazi_ignorato(): void
    {
        Mail::fake();
        // Dopo il trim diventa '' → non triggera il honeypot
        $this->postJson('/api/faq-leads', $this->basePayload(['website' => '   ']))->assertStatus(201);
    }

    // ── 12. Anti-bot – Timestamp ──────────────────────────────────────────────

    public function test_ts_troppo_recente_rifiutato(): void
    {
        $tsNow = (int) round(microtime(true) * 1000); // adesso → < 2 s
        $r = $this->postJson('/api/faq-leads', $this->basePayload(['_ts' => $tsNow]));
        $r->assertStatus(422)->assertJsonPath('message', 'Invio troppo veloce. Attendi qualche secondo e riprova.');
    }

    public function test_ts_scaduto_rifiutato(): void
    {
        $oldTs = (int) round(microtime(true) * 1000) - (7 * 3600 * 1000); // 7 ore fa
        $r = $this->postJson('/api/faq-leads', $this->basePayload(['_ts' => $oldTs]));
        $r->assertStatus(422)->assertJsonPath('message', 'Sessione del form scaduta. Ricarica la pagina e riprova.');
    }

    public function test_ts_assente_rifiutato(): void
    {
        $payload = $this->basePayload();
        unset($payload['_ts']);
        $this->postJson('/api/faq-leads', $payload)->assertStatus(422)->assertJsonValidationErrors(['_ts']);
    }

    public function test_ts_non_numerico_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['_ts' => 'adesso']))->assertStatus(422);
    }

    public function test_ts_negativo_rifiutato(): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload(['_ts' => -1000]))->assertStatus(422);
    }

    public function test_ts_futuro_rifiutato(): void
    {
        $futureTs = (int) round(microtime(true) * 1000) + (3600 * 1000); // +1 ora nel futuro
        $this->postJson('/api/faq-leads', $this->basePayload(['_ts' => $futureTs]))->assertStatus(422);
    }

    // ── 13. Sicurezza – NoControlCharsRule ───────────────────────────────────

    #[\PHPUnit\Framework\Attributes\DataProvider('controlCharsProvider')]
    public function test_caratteri_controllo_rifiutati(string $field, string $value): void
    {
        $this->postJson('/api/faq-leads', $this->basePayload([$field => $value]))
            ->assertStatus(422)
            ->assertJsonValidationErrors([$field]);
    }

    public static function controlCharsProvider(): array
    {
        return [
            'nome_con_LF'                      => ['nome', "Mario\nRossi"],
            'nome_con_CR'                       => ['nome', "Mario\rRossi"],
            'nome_con_NULL'                     => ['nome', "Mario\0Rossi"],
            'cognome_con_LF_nel_mezzo'          => ['cognome', "Bian\nchi"],
            'cognome_con_VT_nel_mezzo'          => ['cognome', "Bian\x0Bchi"],
            'email_con_CRLF'                    => ['email', "test@te\r\nst.it"],
            'provincia_con_CR_nel_mezzo'        => ['provincia', "Vero\rna"],
            'profilo_risultato_con_LF'          => ['profilo_risultato', "Voglio ridurre\nil lavoro"],
            'modello_consigliato_con_LF'        => ['modello_consigliato', "Lupetta Mini Wifi\n\nCompleta il tuo"],
            'modello_consigliato_con_NULL'      => ['modello_consigliato', "Lupetta Mini\0Wifi"],
            'modello_consigliato_con_FF'        => ['modello_consigliato', "Lupetta Mini\x0CWifi"],
        ];
    }

    // ── 14. Email dispatch ────────────────────────────────────────────────────

    public function test_email_conferma_inviata_allutente(): void
    {
        Mail::fake();
        $this->postJson('/api/faq-leads', $this->basePayload())->assertStatus(201);
        Mail::assertSent(FaqLeadConfirmation::class, fn ($m) => $m->hasTo('mario.rossi@azienda.it'));
    }

    public function test_notifica_admin_inviata_quando_configurata(): void
    {
        Mail::fake();
        config(['mail.admin_address' => 'admin@lupetta.it']);
        $this->postJson('/api/faq-leads', $this->basePayload())->assertStatus(201);
        Mail::assertSent(FaqLeadNotification::class, fn ($m) => $m->hasTo('admin@lupetta.it'));
    }

    public function test_nessuna_notifica_admin_senza_indirizzo_configurato(): void
    {
        Mail::fake();
        config(['mail.admin_address' => null]);
        $this->postJson('/api/faq-leads', $this->basePayload())->assertStatus(201);
        Mail::assertNotSent(FaqLeadNotification::class);
    }

    public function test_risposta_201_anche_se_invio_email_fallisce(): void
    {
        // Simula errore mail: il controller non deve propagare l'eccezione
        Mail::shouldReceive('to')->andThrow(new \RuntimeException('SMTP error'));

        $r = $this->postJson('/api/faq-leads', $this->basePayload());
        $r->assertStatus(201)->assertJson(['ok' => true]);
    }

    // ── 15. Persistenza DB ────────────────────────────────────────────────────

    public function test_tutti_i_campi_persistiti_correttamente(): void
    {
        Mail::fake();
        $risposte = ['Domanda 1' => 'Risposta A', 'Domanda 2' => 'Risposta B'];

        $this->postJson('/api/faq-leads', $this->basePayload([
            'risposte'            => $risposte,
            'profilo_risultato'   => 'Voglio crescite più regolari',
            'modello_consigliato' => 'Lupetta Maxi Tech, ideale per una stalla più strutturata.',
        ]))->assertStatus(201);

        $lead = FaqLead::latest()->first();
        $this->assertEquals('Mario', $lead->nome);
        $this->assertEquals('Rossi', $lead->cognome);
        $this->assertEquals('mario.rossi@azienda.it', $lead->email);
        $this->assertEquals('Azienda Agricola Rossi', $lead->azienda);
        $this->assertEquals('045123456', $lead->telefono);
        $this->assertEquals('Verona', $lead->provincia);
        $this->assertEquals(25, (int) $lead->num_vitelli);
        $this->assertEquals($risposte, $lead->risposte);
        $this->assertEquals('Voglio crescite più regolari', $lead->profilo_risultato);
        $this->assertEquals('Lupetta Maxi Tech, ideale per una stalla più strutturata.', $lead->modello_consigliato);
        $this->assertNotNull($lead->ip_address);
        $this->assertNotNull($lead->user_agent);
    }

    public function test_piu_lead_salvati_in_modo_indipendente(): void
    {
        Mail::fake();
        $this->postJson('/api/faq-leads', $this->basePayload(['email' => 'a@test.it']))->assertStatus(201);
        $this->postJson('/api/faq-leads', $this->basePayload(['email' => 'b@test.it']))->assertStatus(201);
        $this->postJson('/api/faq-leads', $this->basePayload(['email' => 'c@test.it']))->assertStatus(201);

        $this->assertDatabaseHas('faq_leads', ['email' => 'a@test.it']);
        $this->assertDatabaseHas('faq_leads', ['email' => 'b@test.it']);
        $this->assertDatabaseHas('faq_leads', ['email' => 'c@test.it']);
    }

    public function test_user_agent_troncato_a_500_caratteri(): void
    {
        Mail::fake();
        $longUa = str_pad('Mozilla/5.0 ', 600, 'x');
        $this->withHeaders(['User-Agent' => $longUa])
            ->postJson('/api/faq-leads', $this->basePayload())
            ->assertStatus(201);

        $lead = FaqLead::latest()->first();
        $this->assertLessThanOrEqual(500, strlen((string) $lead->user_agent));
    }

    public function test_azienda_null_non_persistita_come_stringa_vuota(): void
    {
        Mail::fake();
        $payload = $this->basePayload();
        unset($payload['azienda']);
        $this->postJson('/api/faq-leads', $payload)->assertStatus(201);

        $lead = FaqLead::latest()->first();
        $this->assertNull($lead->azienda);
    }
}
