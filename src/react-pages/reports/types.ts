export interface file {
    fileName: string,
    size: number,
    url: string
}

export interface report {
    year: number,
    files: file[]
}