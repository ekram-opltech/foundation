
export const GetSiteSetting = async () => {
    try {
        const response = await fetch("/api/siteSetting");
        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || "Failed to fetch site setting.");
        }
        return result.data;
    }
    catch (error) {
        throw error;
    }
}

export const GetAboutUs = async () => {
    try {
        const response = await fetch("/api/aboutUs");
        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || "Failed to fetch about us data.");
        }
        return result.data;
    }
    catch (error) {
        throw error;
    }
}

export const GetCounters = async () => {
    try {
        const response = await fetch("/api/counter");
        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || "Failed to fetch counter data.");
        }
        return result.data;
    }
    catch (error) {
        throw error;
    }
}
export const GetCounterById = async (id: string) => {
    try {
        const response = await fetch(`/api/counter/${id}`);
        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || "Failed to fetch counter data.");
        }
        return result.data;
    }
    catch (error) {
        throw error;
    }
}
export const GetVolunteers = async () => {
    try {
        const response = await fetch("/api/volunteer");
        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || "Failed to fetch data.");
        }
        return result.data;
    }
    catch (error) {
        throw error;
    }
}

export const GetVolunteerById = async (id: string) => {
    try {
        const response = await fetch(`/api/volunteer/${id}`);
        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || "Failed to fetch volunteer data.");
        }
        return result.data;
    }
    catch (error) {
        throw error;
    }
}

export const GetEvents = async () => {
    try {
        const response = await fetch("/api/event");
        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || "Failed to fetch data.");
        }
        return result.data;
    }
    catch (error) {
        throw error;
    }
}

export const GetEventById = async (id: string) => {
    try {
        const response = await fetch(`/api/event/${id}`);
        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || "Failed to fetch event data.");
        }
        return result.data;
    }
    catch (error) {
        throw error;
    }
}