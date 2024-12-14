export interface EventDate {
    
    eventName: string;
    eventSlug: string;
    startDate: string;
    endDate: string;
};

export interface dates extends EventDate{
    eventName: string;
    eventSlug: string;
    startDate: string;
    endDate: string;
}

// export const getDate = async (): Promise<EventDate[]> => {
//     const url = "https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=%7B%0Acalendars%7B%0A%20%20%20%20eventName%0A%20%20%20%20startDate%0A%20%20%20%20endDate%0A%20%20%7D%0A%7D%0A";
//     const res = await fetch(url);
//     const json = await res.json();
//     const data: EventDate[] = json.data.calendar;
//     return data;
// };
