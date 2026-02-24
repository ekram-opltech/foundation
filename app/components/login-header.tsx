
"use client"
import { useEffect, useState } from "react";
import Link from 'next/link'
import LogoutButton from "./logout-button";
import { GetUserProfile } from "../services/account-services";

const LoginHeader = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const result = await GetUserProfile();
            setUser(result);
        };

        fetchUser();
    }, []);

    if (!user) {
        return (
            <li></li>
        )
    }
    return (
        <li className="dropdown login_dropdown">
            <h5>{user?.firstName || "Guest"}</h5>
            <ul>
                <li>
                    <Link href="/dashboard/profile">Profile</Link>
                </li>
                <li>
                    <LogoutButton />
                </li>
            </ul>
        </li>
    )
}

export default LoginHeader
