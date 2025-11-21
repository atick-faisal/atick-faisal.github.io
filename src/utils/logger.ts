/**
 * Logger Utilities
 *
 * Centralized logging functions for better debugging and error tracking.
 */

const isDevelopment = import.meta.env.DEV;

/**
 * Log an error message
 */
export function logError(message: string, error?: unknown): void {
    if (isDevelopment) {
        console.error(`[Error] ${message}`, error);
    }
}

/**
 * Log a warning message
 */
export function logWarning(message: string, data?: unknown): void {
    if (isDevelopment) {
        console.warn(`[Warning] ${message}`, data);
    }
}

/**
 * Log an info message (development only)
 */
export function logInfo(message: string, data?: unknown): void {
    if (isDevelopment) {
        console.info(`[Info] ${message}`, data);
    }
}

/**
 * Log a debug message (development only)
 */
export function logDebug(message: string, data?: unknown): void {
    if (isDevelopment) {
        console.debug(`[Debug] ${message}`, data);
    }
}
