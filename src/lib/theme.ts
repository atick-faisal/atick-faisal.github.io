/**
 * Theme Management Utilities
 *
 * Centralized theme management for dark/light mode switching.
 * Handles localStorage persistence and system preference detection.
 */

export type Theme = 'light' | 'dark';

/**
 * Get the current theme from localStorage or system preference
 */
export function getTheme(): Theme {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme') as Theme;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

/**
 * Apply theme to the document root
 */
export function applyTheme(theme: Theme): void {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

/**
 * Save theme preference to localStorage
 */
export function saveTheme(theme: Theme): void {
    localStorage.setItem('theme', theme);
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): void {
    const isDark = document.documentElement.classList.contains('dark');
    const newTheme: Theme = isDark ? 'light' : 'dark';

    applyTheme(newTheme);
    saveTheme(newTheme);

    // Dispatch event for components that need to react to theme changes
    window.dispatchEvent(new CustomEvent('themechange'));
}

/**
 * Initialize theme on page load (prevents flash of unstyled content)
 * This should be called as early as possible, ideally in a blocking script.
 */
export function initTheme(): void {
    const theme = getTheme();
    applyTheme(theme);
}
