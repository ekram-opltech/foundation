"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingMedical, faIndianRupeeSign, faAward } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";
import { GetCounters } from "@/app/services/dashboard-services";
import { useEffect, useState } from "react";

const CountUp = dynamic(() => import("react-countup"), {
    ssr: false,
});

const iconMap: any = {
    faHandHoldingMedical,
    faIndianRupeeSign,
    faAward,
};

const Counter = () => {

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
        <section className="fact-counter-style1">
            <div className="fact-counter-style1-bg"
                style={{ backgroundImage: "url(/images/backgrounds/fact-counter-style1-bg.jpg)" }}>
            </div>
            <div className="container">
                <ul className="row clearfix">
                    {
                        counters.map((counter) => {
                            return (
                                <li className="col-xl-4" key={counter._id}>
                                    <div className="single-fact-counter">
                                        <div className="outer-box">
                                            <div className="count-outer count-box">
                                                <FontAwesomeIcon icon={iconMap[counter.icon]} />
                                                <CountUp
                                                    start={0}
                                                    end={counter.end}
                                                    duration={4}
                                                />
                                                <span className="m">{counter.suffix}</span>
                                            </div>
                                            <div className="title">
                                                <h6>{counter.title}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Counter
