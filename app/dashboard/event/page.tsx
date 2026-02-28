"use client";

import Link from "next/link"
import { useEffect, useState } from "react";
import { GetEvents } from "../../services/dashboard-services";
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
        <div className="cause-details-content">
            <div className="single-sidebar-box">
                <div className="sidebar-title">
                    <h3>Events</h3>
                </div>
                <div className="sidebar-cause-post">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Event Title</th>
                                <th scope="col">Event Location</th>
                                <th scope="col">Event Date</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.length > 0 ? (
                                data.map((item) => (
                                    <tr key={item._id}>
                                        <td>{item.title}</td>
                                        <td>{item.location}</td>
                                        <td>{dayjs(item.eventDate).format("DD MMM YYYY").toLowerCase()}</td>
                                        <td>
                                            <Link
                                                href={`/dashboard/event/edit/${item._id}`}
                                                className="btn btn-sm edit_btn"
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} style={{ textAlign: "center" }}>
                                        No event found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="text-center">
                        <Link href="/dashboard/event/add" className="btn-one">
                            <span className="txt">
                                <i className="icon-check"></i>
                                Add New Event
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
