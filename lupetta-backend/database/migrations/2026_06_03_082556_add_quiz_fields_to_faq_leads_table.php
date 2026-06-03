<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('faq_leads', function (Blueprint $table) {
            $table->string('azienda', 150)->nullable()->after('email');
            $table->string('telefono', 40)->nullable()->after('azienda');
            $table->string('provincia', 100)->nullable()->after('telefono');
            $table->string('num_vitelli', 100)->nullable()->after('provincia');
            $table->json('risposte')->nullable()->after('num_vitelli');
            $table->string('profilo_risultato', 150)->nullable()->after('risposte');
            $table->string('modello_consigliato', 150)->nullable()->after('profilo_risultato');
        });
    }

    public function down(): void
    {
        Schema::table('faq_leads', function (Blueprint $table) {
            $table->dropColumn([
                'azienda',
                'telefono',
                'provincia',
                'num_vitelli',
                'risposte',
                'profilo_risultato',
                'modello_consigliato',
            ]);
        });
    }
};
