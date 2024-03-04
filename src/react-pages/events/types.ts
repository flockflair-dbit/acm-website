interface eventFooterImageInterface {
    id: string;
    url: string;
}

export interface eventRawInterface {
    id: string;
    blog: {
        html: string;
        text: string;
    }
    title: string;
    slug: string;
    date: string;
    month_name: string;
    thumbnail: {
        id: string;
        url: string;
        fileName: string;
    }
    images: eventFooterImageInterface[]
}

export interface eventInterface {
    blogid: string;
    content: string;
    contentRaw: string;
    title: string;
    imgSrc?: string
    slug: string;
    fullDate: string;
    date: string;
    month: string;
    footerImages: eventFooterImageInterface[];
    description: string;
}