export interface memberInterface {
    name: string;
    position: string;
    src?: string;
    extLink?: string;
}

export interface teamDataInterface {
    data: memberInterface[];
}

export interface subTeamInterface {
    title: string;
    renderOrder: number;
    members: memberInterface[];
}

export interface teamTitleInterface {
    [key: string]: {
        title: string;
        renderOrder: number;
    }
}