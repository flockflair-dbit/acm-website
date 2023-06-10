export interface projectData {
    id: string;
    title: string;
    developerName: string;
    videoLink: string;
    projectLink: string;
    publishedAt: string;
    slug: string;
}

export interface project extends projectData {
    date: string;
    month: string;
    year: string;
    share: string;
}