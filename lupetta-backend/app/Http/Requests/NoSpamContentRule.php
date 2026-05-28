<?php

namespace App\Http\Requests;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

/**
 * Lightweight heuristics to reject obvious spam content.
 * - Too many URLs in a single message
 * - Contains BBCode (typical spammers)
 * - Contains common spam keywords / cyrillic/cjk noise burst
 */
class NoSpamContentRule implements ValidationRule
{
    private const MAX_URLS = 2;
    private const SPAM_KEYWORDS = [
        'viagra', 'cialis', 'casino', 'porn', 'xxx', 'crypto airdrop',
        'bitcoin doubler', 'forex signals', 'seo services',
    ];

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (! is_string($value) || $value === '') {
            return;
        }

        $lower = mb_strtolower($value);

        // BBCode
        if (preg_match('/\[(url|img|link)[=\]]/i', $value) === 1) {
            $fail('Il contenuto del messaggio non è consentito.');
            return;
        }

        // URLs count
        $urlCount = preg_match_all('#https?://|www\.#i', $value);
        if ($urlCount !== false && $urlCount > self::MAX_URLS) {
            $fail('Il messaggio contiene troppi link.');
            return;
        }

        // Spam keywords
        foreach (self::SPAM_KEYWORDS as $word) {
            if (str_contains($lower, $word)) {
                $fail('Il contenuto del messaggio non è consentito.');
                return;
            }
        }
    }
}
