<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('faq_leads', function (Blueprint $table) {
            $table->string('modello_consigliato', 500)->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('faq_leads', function (Blueprint $table) {
            $table->string('modello_consigliato', 150)->nullable()->change();
        });
    }
};
