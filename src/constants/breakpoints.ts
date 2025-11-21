/**
 * Responsive Breakpoints
 *
 * Centralized breakpoint definitions for responsive design.
 * These should align with Tailwind CSS breakpoints when possible.
 */

export const BREAKPOINTS = {
    /** Small mobile devices */
    xs: 320,
    /** Mobile devices */
    sm: 481,
    /** Tablets */
    md: 720,
    /** Small desktops */
    lg: 1024,
    /** Large desktops */
    xl: 1370,
    /** Extra large screens */
    '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;
