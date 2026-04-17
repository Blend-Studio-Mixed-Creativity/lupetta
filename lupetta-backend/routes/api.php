<?php

use App\Http\Controllers\ContactLeadController;
use App\Http\Controllers\FaqLeadController;
use Illuminate\Support\Facades\Route;

Route::post('/faq-leads', [FaqLeadController::class, 'store']);
Route::post('/contact-leads', [ContactLeadController::class, 'store']);
