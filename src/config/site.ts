/**
 * Site Configuration
 *
 * Centralized configuration for site metadata, SEO, and analytics.
 */

export const SITE_CONFIG = {
    /** Site title */
    title: 'Atick Faisal - Portfolio',

    /** Site description for meta tags */
    description:
        'Atick Faisal - Machine Learning Researcher, Robotic Enthusiast and Software Developer',

    /** Author name */
    author: 'Atick Faisal',

    /** Site language */
    lang: 'en',

    /** Favicon path */
    favicon: '/favicon.png',

    /** Social media and contact links */
    social: {
        github: 'https://github.com/atick-faisal/',
        email: 'mailto:contact@atick.dev',
    },
} as const;

/**
 * Analytics Configuration
 */
export const ANALYTICS_CONFIG = {
    /** Google Analytics Measurement ID */
    gaId: import.meta.env.PUBLIC_GA_MEASUREMENT_ID,
} as const;
