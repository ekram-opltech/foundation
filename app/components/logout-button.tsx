"use client"

import { Logout } from '../services/account-services';

const LogoutButton = () => {
    const handleLogout = async () => {
        await Logout();
    };
    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default LogoutButton
