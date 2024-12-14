import type { EventDate } from "./type"

export const getDate = async () => {
    const url = "https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=%7B%0Acalendars%7B%0A%20%20%20%20eventName%0A%20%20%20%20startDate%0A%20%20%20%20endDate%0A%20%20%7D%0A%7D%0A"
    const res = await fetch(url)
    const json = await res.json()
    const data: EventDate[] = json.data.calendars
    return data
}

// export const getDate = async (): Promise<EventDate[]> => {
//     const url = "https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=%7B%0Acalendars%7B%0A%20%20%20%20eventName%0A%20%20%20%20startDate%0A%20%20%20%20endDate%0A%20%20%7D%0A%7D%0A";
    
//     const res = await fetch(url);
//     const json = await res.json();
    
//     // Log the raw response
//     console.log("API Response:", json);
//     console.log(json.data.calendars)

//     // Check if the response contains the expected structure
//     if (json && json.data && Array.isArray(json.data.calendar)) {
        
//         return json.data.calendar;
//     } else {
//         return []; // Return an empty array if the data is malformed
//     }
// };
