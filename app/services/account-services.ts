import { ILoginUser } from "../api/login/type";

export const Login = async (payload: ILoginUser) => {
    try {
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(payload),
        });

        const result = await res.json();
        if (result.success) {
            //window.location.href = "/dashboard/profile";
        } else {
            alert(result.message);
        }
    } catch (error) {
        alert(error);
    }
}

export const Logout = async () => {

    try {
        const response = await fetch("/api/logout", {
            method: "POST",
        });

        const result = await response.json();

        if (result.success) {
            // window.location.href = "/";
        }
        else {
            alert(result.message || "Logout failed. Please try again.");
        }
    }
    catch (error) {
        console.error("Logout failed:", error);
        alert(error instanceof Error ? error.message : "An unknown error occurred during logout.");
    }
}

export const GetUserProfile = async () => {
    try {
        const response = await fetch("/api/user");
        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || "Failed to fetch user profile.");
        }

        return result.data;
    }
    catch (error) {
        console.error("Failed to get user profile:", error);
        throw error;
    }
}