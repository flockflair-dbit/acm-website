export interface memberInterface {
    name: string;
    position: string;
    src?: string;
    extLink?: string;
}

export interface teamDataInterface {
    data: memberInterface[];
}
