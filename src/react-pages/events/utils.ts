import type { eventInterface, eventRawInterface } from "./types"

const url = "https://api-eu-central-1.graphcms.com/v2/ckpv3up06dqcq01xxfy3y5xwn/master?query=%7B%0A%20%20events(orderBy%3Adate_DESC)%20%7B%0A%20%20%20%20id%0A%20%20%20%20blog%20%7B%0A%20%20%20%20%20%20html%0A%20%20%20%20%20%20text%0A%20%20%20%20%7D%0A%20%20%20%20title%0A%20%20%20%20slug%0A%20%20%20%20date%0A%20%20%20%20month_name%20%0A%20%20%20%20thumbnail%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20url%0A%20%20%20%20%20%20fileName%0A%20%20%20%20%7D%0A%20%20%20%20images%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
const getEvents = async (): Promise<eventInterface[]> => {
    const res = await fetch(url)
    const json = await res.json()
    const data: eventRawInterface[] = json.data.events
    const events = []
    for (const event of data) {
        const temp: eventInterface = {
            blogid: event.id,
            content: event.blog.html,
            contentRaw: event.blog.text,
            title: event.title,
            imgSrc: event?.thumbnail?.url,
            slug: event.slug,
            fullDate: event.date,
            date: event.date.slice(-2),
            month: event.month_name,
            footerImages: event.images,
            description: event.blog.text
        }
        events.push(temp)

    }
    return events.splice(0, 23)
}
export { getEvents }