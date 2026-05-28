<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Origins consentite per le API pubbliche. In produzione restringere a
    | dominio reale tramite FRONTEND_URL nel file .env.
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['GET', 'POST', 'OPTIONS'],

    'allowed_origins' => array_values(array_filter([
        env('FRONTEND_URL'),
        env('APP_URL'),
        'http://localhost:5173',
        'http://127.0.0.1:5173',
    ])),

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['Content-Type', 'X-Requested-With', 'Accept', 'Origin', 'Authorization'],

    'exposed_headers' => [],

    'max_age' => 3600,

    'supports_credentials' => false,

];
