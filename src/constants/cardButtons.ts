/**
 * Card Button Configuration
 *
 * Configuration for action buttons displayed on project and publication cards.
 * Defines labels, icons, and styling for different link types.
 */

import type {
    Database,
    Download,
    GitBranch,
    Github,
    Globe,
    LibraryBig,
    Link as LinkIcon,
    Youtube,
} from 'lucide-astro';

export type IconComponent =
    | typeof Github
    | typeof Download
    | typeof Globe
    | typeof GitBranch
    | typeof Youtube
    | typeof LibraryBig
    | typeof LinkIcon
    | typeof Database;

export interface ButtonConfig {
    label: string;
    icon: IconComponent;
    class: string;
}

export type LinkType =
    | 'github'
    | 'download'
    | 'web'
    | 'use'
    | 'youtube'
    | 'pdf'
    | 'online'
    | 'dataset';

/**
 * Button configurations for different link types.
 * Maps link types to their display properties (label, icon, styling).
 */
export const BUTTON_CONFIGS: Record<LinkType, ButtonConfig> = {
    github: {
        label: 'GitHub',
        icon: 'Github' as unknown as IconComponent,
        class: 'bg-button-github hover:bg-button-github-hover text-white',
    },
    download: {
        label: 'Download',
        icon: 'Download' as unknown as IconComponent,
        class: 'bg-button-download hover:bg-button-download-hover text-white',
    },
    web: {
        label: 'Visit',
        icon: 'Globe' as unknown as IconComponent,
        class: 'bg-button-web hover:bg-button-web-hover text-white',
    },
    use: {
        label: 'Use This',
        icon: 'GitBranch' as unknown as IconComponent,
        class: 'bg-button-use hover:bg-button-use-hover text-white',
    },
    youtube: {
        label: 'YouTube',
        icon: 'Youtube' as unknown as IconComponent,
        class: 'bg-button-youtube hover:bg-button-youtube-hover text-white',
    },
    pdf: {
        label: 'PDF',
        icon: 'LibraryBig' as unknown as IconComponent,
        class: 'bg-button-pdf hover:bg-button-pdf-hover text-white',
    },
    online: {
        label: 'Online',
        icon: 'LinkIcon' as unknown as IconComponent,
        class: 'bg-button-online hover:bg-button-online-hover text-white',
    },
    dataset: {
        label: 'Dataset',
        icon: 'Database' as unknown as IconComponent,
        class: 'bg-button-dataset hover:bg-button-dataset-hover text-white',
    },
};

/**
 * Get button configuration for a specific link type
 */
export function getButtonConfig(linkType: string): ButtonConfig | undefined {
    return BUTTON_CONFIGS[linkType as LinkType];
}
