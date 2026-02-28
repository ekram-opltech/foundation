"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { GetEvents } from "@/app/services/dashboard-services";
import dayjs from "dayjs";

const Events = () => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const _data = await GetEvents();
                setData(_data);
            } catch (error) {
                alert(error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="events-style2">
            <div className="container">
                <div className="row">
                    {
                        data.map((event) => {
                            return (
                                <div className="col-lg-6" key={event._id}>
                                    <div className="single-events-box">
                                        <div className="single-events-box__img">
                                            <img src={event.imageUrl} alt="" />
                                        </div>
                                        <div className="single-events-box__text">
                                            <div className="date-box">
                                                <h2>
                                                    {dayjs(event.eventDate).format("DD")}<br />
                                                    <span>{dayjs(event.eventDate).format("MMM YYYY")}</span>
                                                </h2>
                                            </div>
                                            <div className="title-box">
                                                <h3>{event.title}</h3>
                                                <div className="meta-box">
                                                    <ul className="meta-info">
                                                        <li><FontAwesomeIcon icon={faClock} /> {dayjs(event.startTime).format("HH:mm A")} - {dayjs(event.endTime).format("HH:mm A")}</li>
                                                        <li><FontAwesomeIcon icon={faLocationDot} />{event.location}</li>
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
