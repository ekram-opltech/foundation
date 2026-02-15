"use client";

import { useEffect } from "react";

export default function WowProvider({ children }) {
    useEffect(() => {
        let wow;

        import("wowjs").then((module) => {
            wow = new module.WOW({
                live: false,
                boxClass: "wow",
                animateClass: "animate__animated",
            });

            // Delay init so DOM is ready
            setTimeout(() => {
                wow.init();
                window.wow = wow; // expose globally
            }, 300);
        });

        return () => wow?.sync();
    }, []);

    return children;
}
