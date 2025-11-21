/**
 * Validation Utilities
 *
 * Helper functions for validating data and inputs.
 */

/**
 * Check if a URL is valid
 */
export function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

/**
 * Check if an email address is valid (basic validation)
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Check if a value is defined and not null
 */
export function isDefined<T>(value: T | undefined | null): value is T {
    return value !== undefined && value !== null;
}

/**
 * Check if a string is empty or whitespace only
 */
export function isEmpty(str: string): boolean {
    return str.trim().length === 0;
}
