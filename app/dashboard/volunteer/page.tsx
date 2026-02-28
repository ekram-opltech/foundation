"use client";

import Link from "next/link"
import { useEffect, useState } from "react";
import { GetVolunteers } from "../../services/dashboard-services";

const Volunteers = () => {

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const _data = await GetVolunteers();
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
                    <h3>Volunteers</h3>
                </div>
                <div className="sidebar-cause-post">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Post</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.length > 0 ? (
                                data.map((item) => (
                                    <tr key={item._id}>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.post}</td>
                                        <td>
                                            <Link
                                                href={`/dashboard/volunteer/edit/${item._id}`}
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
                                        No volunteers found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="text-center">
                        <Link href="/dashboard/volunteer/add" className="btn-one">
                            <span className="txt">
                                <i className="icon-check"></i>
                                Add New Volunteer
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Volunteers
