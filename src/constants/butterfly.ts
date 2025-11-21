/**
 * Butterfly Effect Canvas Configuration
 *
 * Configuration constants for the Lorentz Attractor visualization.
 * @see https://en.wikipedia.org/wiki/Lorenz_system
 */

import { BREAKPOINTS } from './breakpoints';
import { BACKGROUND_COLORS } from './colors';

export const BUTTERFLY_CONFIG = {
    // Particle system
    PARTICLE_COUNT_MOBILE: 100,
    PARTICLE_COUNT_DESKTOP: 300,
    MOBILE_BREAKPOINT: BREAKPOINTS.sm,

    // Canvas sizing (multipliers of viewport width)
    CANVAS_WIDTH_LARGE: 0.5, // > xl breakpoint
    CANVAS_WIDTH_MEDIUM: 0.6, // > md breakpoint
    CANVAS_WIDTH_SMALL: 0.9, // < md breakpoint
    CANVAS_HEIGHT_RATIO: 0.6, // Height as ratio of width
    BREAKPOINT_LARGE: BREAKPOINTS.xl,
    BREAKPOINT_MEDIUM: BREAKPOINTS.md,

    // Coordinate scaling factors
    WIDTH_SCALE_FACTOR: 13.0 / 600.0,
    HEIGHT_SCALE_FACTOR: 7.0 / 400.0,

    // Particle color ranges (RGB)
    COLOR_R_MIN: 26,
    COLOR_R_MAX: 232,
    COLOR_G_MIN: 35,
    COLOR_G_MAX: 234,
    COLOR_B_MIN: 126,
    COLOR_B_MAX: 246,

    // Lorenz attractor parameters
    // https://en.wikipedia.org/wiki/Lorenz_system
    SIGMA: 10, // Prandtl number (convection rate)
    BETA: 8.0 / 2.5, // Geometric factor
    RHO: 28, // Rayleigh number (temperature difference)
    DELTA_T_INITIAL: 0.001, // Initial time step
    DELTA_T_MAX: 0.01, // Maximum time step
    DELTA_T_INCREMENT: 0.00001, // Time step increment

    // Animation parameters
    ALPHA_INITIAL: 100, // Initial fade opacity
    ALPHA_MIN: 10, // Minimum fade opacity
    ALPHA_DECREMENT: 0.2, // Fade rate
    LINE_WIDTH: 1.5, // Particle trail width

    // Background colors
    BG_LIGHT: BACKGROUND_COLORS.light,
    BG_DARK: BACKGROUND_COLORS.dark,

    // Particle initialization ranges
    PARTICLE_X_MIN: -100,
    PARTICLE_X_MAX: 100,
    PARTICLE_Y_MIN: -10,
    PARTICLE_Y_MAX: 10,
    PARTICLE_Z_MIN: -100,
    PARTICLE_Z_MAX: 100,
} as const;
