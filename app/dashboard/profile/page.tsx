"use client"
import { useEffect, useState } from "react";
import Link from 'next/link';
import { GetUserProfile } from "@/app/services/account-services";

const Profile = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const result = await GetUserProfile();
            setUser(result);
        };

        fetchUser();
    }, []);

    return (
        <>
            <div className="cause-details-content">
                <div className="donors-person-box mt-0">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="single-donors-box">
                                <div className="inner-title">
                                    <h3> {user?.firstName} {user?.lastName} - {user?.designation}</h3>
                                    <p>{user?.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-donors-box">
                                <div className="img-box">
                                    <img src={user?.avatar} alt="" />
                                </div>
                                <div className="title-box">
                                    <h3>{user?.firstName} {user?.lastName}</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile
