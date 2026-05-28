<?php

use App\Http\Controllers\ContactLeadController;
use App\Http\Controllers\FaqLeadController;
use Illuminate\Support\Facades\Route;

// Rate limit: max 5 invii al minuto per IP (rate limiter registrato in AppServiceProvider).
Route::middleware('throttle:lead-submit')->group(function (): void {
    Route::post('/faq-leads', [FaqLeadController::class, 'store']);
    Route::post('/contact-leads', [ContactLeadController::class, 'store']);
});
