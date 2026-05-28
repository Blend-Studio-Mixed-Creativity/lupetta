<?php

namespace App\Http\Requests;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

/**
 * Blocks values containing CR/LF or NULL bytes (anti email header injection
 * and basic anti-payload for inputs that should be single-line strings).
 */
class NoControlCharsRule implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (! is_string($value)) {
            return;
        }

        if (preg_match('/[\r\n\0\x0B\x0C]/', $value) === 1) {
            $fail('Il campo :attribute contiene caratteri non consentiti.');
        }
    }
}
