/**
 * Color Constants
 *
 * Centralized color definitions used throughout the application.
 * These complement the Tailwind CSS theme colors defined in the config.
 */

/**
 * Background colors for light and dark themes
 */
export const BACKGROUND_COLORS = {
    light: 'rgb(255, 255, 255)',
    dark: 'rgb(40, 44, 52)', // #282c34 - One Dark theme
} as const;

/**
 * Gradient configurations for header cards
 */
export const GRADIENTS = {
    projects: {
        light: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%)',
        dark: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%)',
    },
    bio: {
        light: 'linear-gradient(135deg, #e1d4f7 0%, #c4d7f8 50%, #b8d8f8 100%)',
        dark: 'linear-gradient(135deg, #3e2c6b 0%, #2e4a7c 50%, #2a5a8f 100%)',
    },
} as const;
