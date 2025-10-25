export interface Project {
    title: string;
    image: string;
    description: string;
    github?: string;
    download?: string;
    web?: string;
    use?: string;
    youtube?: string;
}

export interface Publication {
    title: string;
    image: string;
    publisher: string;
    online?: string;
    pdf?: string;
    dataset?: string;
}
