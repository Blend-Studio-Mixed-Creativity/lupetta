<?php

use App\Http\Controllers\FaqLeadController;
use Illuminate\Support\Facades\Route;

Route::post('/faq-leads', [FaqLeadController::class, 'store']);
