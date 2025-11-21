/**
 * Global Type Definitions
 *
 * Type declarations for global objects and functions available throughout the application.
 */

interface Window {
    /**
     * Toggles between light and dark theme modes.
     * Stores preference in localStorage and dispatches 'themechange' event.
     */
    toggleTheme: () => void;

    /**
     * Google Analytics data layer for tracking events
     */
    dataLayer: Array<unknown>;

    /**
     * Google Analytics global site tag function
     */
    gtag: (...args: unknown[]) => void;
}
