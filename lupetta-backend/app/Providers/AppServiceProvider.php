<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        // In produzione forziamo HTTPS per evitare URL/asset insicuri.
        if ($this->app->environment('production')) {
            URL::forceScheme('https');
        }

        // Rate limiter dedicato ai form pubblici.
        // 5 invii/min per IP + finestra giornaliera per email per bloccare ondate.
        RateLimiter::for('lead-submit', function (Request $request): array {
            $email = strtolower((string) $request->input('email', ''));

            return [
                Limit::perMinute(5)->by('ip:' . $request->ip()),
                Limit::perDay(30)->by('ip:' . $request->ip()),
                Limit::perDay(10)->by('email:' . $email),
            ];
        });
    }
}
