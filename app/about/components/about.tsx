"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { GetAboutUs } from "@/app/services/dashboard-services";

const About = () => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await GetAboutUs();
                setData(data);
                localStorage.setItem("aboutUsData", JSON.stringify(data));
            } catch (error) {
                console.error("Failed to fetch about us data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="about-style1" style={{ paddingTop: "150px" }}>
            <div className="about-style1__shape1">
                <img className="float-bob-x" src="/images/shapes/about-style1-shape-1.png" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-style1__img">
                            <div className="inner">
                                <img src={data?.imageUrl} alt="About Us" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-style1__content">
                            <div className="sec-title">
                                <div className="sub-title">
                                    <h4>{data?.subTitle || "No Subtitle Set"}</h4>
                                    <div className="big-title">{data?.title || "No Title Set"}</div>
                                </div>
                                <h2>{data?.title || "No Title Set"}</h2>
                            </div>
                            <div className="inner-text">
                                <p className="mb-2">
                                    {data?.description || "No Description Set"}
                                </p>

                                <div className="btns-box">
                                    <Link className="btn-one" href="/donate">
                                        <span className="txt">
                                            <i className="icon-heart"></i>
                                            Donate Now
                                        </span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
