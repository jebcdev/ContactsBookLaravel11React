<?php

namespace App\Enums;

use Illuminate\Support\Str;

class VisibilityEnum
{
    const PUBLIC = 'public';
    const PRIVATE = 'private';

    /**
     * Obtiene todos los valores válidos del enum.
     *
     * @return array
     */
    public static function values(): array
    {
        return [
            self::PUBLIC,
            self::PRIVATE,
        ];
    }

    /**
     * Verifica si un valor dado es válido para el enum.
     *
     * @param string $value
     * @return bool
     */
    public static function isValid(string $value): bool
    {
        return in_array($value, self::values());
    }

    /**
     * Convierte un valor dado en formato "studly case" en su equivalente del enum.
     *
     * @param string $value
     * @return string|null
     */
    public static function fromStudlyCase(string $value): ?string
    {
        $constant = strtoupper(Str::snake($value));
        return defined("self::$constant") ? constant("self::$constant") : null;
    }
}
