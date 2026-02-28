"use client";

import Link from "next/link"
import { useEffect, useState } from "react";
import { GetCounters } from "../../services/dashboard-services";

const Counters = () => {

    const [counters, setCounters] = useState<any[]>([]);

    useEffect(() => {
        const fetchCounters = async () => {
            try {
                const counters = await GetCounters();
                setCounters(counters);
            } catch (error) {
                alert(error);
            }
        };
        fetchCounters();
    }, []);

    return (
        <div className="cause-details-content">
            <div className="single-sidebar-box">
                <div className="sidebar-title">
                    <h3>Counters</h3>
                </div>
                <div className="sidebar-cause-post">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Icon</th>
                                <th scope="col">End</th>
                                <th scope="col">Suffix</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                counters.map((counter) => {
                                    return (
                                        <tr key={counter._id}>
                                            <td>{counter.title}</td>
                                            <td>{counter.icon}</td>
                                            <td>{counter.end}</td>
                                            <td>{counter.suffix}</td>
                                            <td>
                                                <Link href={`/dashboard/counter/edit/${counter._id}`} className="btn btn-sm edit_btn">
                                                    Edit
                                                </Link>

                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="text-center d-none">
                        <Link href="/dashboard/counter/add" className="btn-one">
                            <span className="txt">
                                <i className="icon-check"></i>
                                Add New Counter
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counters
