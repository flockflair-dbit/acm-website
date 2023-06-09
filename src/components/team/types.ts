export interface memberInterface {
    name: string;
    position: string;
    src: string;
    linkedIn?: string;
}

export interface teamDataInterface {
    data: memberInterface[];
}
