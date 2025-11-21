/**
 * Card Link Utilities
 *
 * Helper functions for processing card links from project/publication data.
 */

import type { Project, Publication } from '../types';

export interface CardLink {
    type: string;
    url: string;
}

/**
 * Properties to exclude when extracting links from card data
 */
const EXCLUDED_PROPERTIES = new Set(['title', 'image', 'description', 'publisher', 'github']);

/**
 * Extract all available links from a card item, excluding github.
 * GitHub links are handled separately to ensure they appear last.
 *
 * @param item - Project or Publication item
 * @returns Array of card links
 */
export function extractCardLinks(item: Project | Publication): CardLink[] {
    const links: CardLink[] = [];

    // Extract all links except those in the excluded list
    for (const [key, value] of Object.entries(item)) {
        if (value && typeof value === 'string' && !EXCLUDED_PROPERTIES.has(key)) {
            links.push({ type: key, url: value });
        }
    }

    // Add github link last if it exists
    if ('github' in item && item.github) {
        links.push({ type: 'github', url: item.github });
    }

    return links;
}
