import fs from "node:fs/promises"
import EventCard from "./components/EventCard"
import { getEvents } from "./utils"

const events = await getEvents()
const eventsImageDir = await fs.readdir("./public/assets/images/events")

const Events: React.FC<{}> = () => {
    return (
        <div className="content-block">
            <div className="section-area section-sp1 gallery-bx">
                <div className="container">
                    <div className="clearfix">
                        <ul id="masonryEvent" className="ttr-gallery-listing magnific-image row"
                            style={{ listStyle: "none" }}>
                            {events.map((event, index) => <EventCard key={index} event={event} imageDir={eventsImageDir} />)}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Events