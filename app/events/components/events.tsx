import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const eventsData = [
    {
        id: 1,
        date: { day: "15", month: "Feb" },
        title: "Donation for poor people",
        image: "/images/events/events-v1-1.jpg",
        time: "12:00PM - 03:00PM",
        address: "Urdu middle school, Sitanabad"
    },
    {
        id: 2,
        date: { day: "16", month: "Feb" },
        title: "medical camp for poor people",
        image: "/images/events/events-v1-2.jpg",
        time: "12:00PM - 03:00PM",
        address: "Urdu middle school, Sitanabad"
    },
    {
        id: 3,
        date: { day: "17", month: "Feb" },
        title: "Food distribution for poor people",
        image: "/images/events/events-v1-3.jpg",
        time: "12:00PM - 03:00PM",
        address: "Urdu middle school, Sitanabad"
    },
    {
        id: 4,
        date: { day: "18", month: "Feb" },
        title: "Cloth distribution for poor people",
        image: "/images/events/events-v1-4.jpg",
        time: "12:00PM - 03:00PM",
        address: "Urdu middle school, Sitanabad"
    }
]
const Events = () => {
    return (
        <section className="events-style2">
            <div className="container">
                <div className="row">
                    {
                        eventsData.map((event) => {
                            return (
                                <div className="col-lg-6" key={event.id}>
                                    <div className="single-events-box">
                                        <div className="single-events-box__img">
                                            <img src={event.image} alt="" />
                                        </div>
                                        <div className="single-events-box__text">
                                            <div className="date-box">
                                                <h2>{event.date.day}<br /> <span>{event.date.month}</span></h2>
                                            </div>
                                            <div className="title-box">
                                                <h3>{event.title}</h3>
                                                <div className="meta-box">
                                                    <ul className="meta-info">
                                                        <li><FontAwesomeIcon icon={faClock} /> {event.time}</li>
                                                        <li><FontAwesomeIcon icon={faLocationDot} /> {event.address}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Events
