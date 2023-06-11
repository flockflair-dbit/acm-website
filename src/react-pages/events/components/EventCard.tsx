import type { eventInterface } from "../types"

const dirPath = "/assets/images/events"

const EventCard: React.FC<{ event: eventInterface, imageDir: string[] }> = ({ event, imageDir }) => {
    // TODO: replace 23.webp with a default image
    const imgSrc = imageDir.includes(event.slug + ".webp") ? `${dirPath}/${event.slug}.webp` : `${dirPath}/23.webp`

    const tempCon = String(event.contentRaw).split("\\n")
    let description = ""
    for (var i = 0; i < tempCon.length; i++)
        description += tempCon[i]

    return (
        <li className="action-card col-lg-6 col-md-6 col-sm-12">
            <div className="event-bx m-b30">
                <div className="action-box">
                    <img src={imgSrc} alt={event.title}
                        loading="lazy" />
                </div>
                <div className="info-bx d-flex">
                    <div>
                        <div className="event-time">
                            <div className="event-date">{event.date}</div>
                            <div className="event-month">{event.month}</div>
                        </div>
                    </div>
                    <div className="event-info">
                        <h4 className="event-title eventsTitleLines"><a
                            href={"/events/" + event.slug}>{event.title}</a></h4>
                        <ul className="media-post">
                            <li><a href="#"><i className="fa fa-clock-o"></i>{event.fullDate}</a></li>

                        </ul>
                        <p className="eventShortDesc" style={{ wordBreak: "break-word" }}>
                            {description.slice(0, 200) + "..."}
                        </p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default EventCard