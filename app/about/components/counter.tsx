"use client"
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingMedical, faIndianRupeeSign, faAward } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
    return (
        <section className="fact-counter-style1">
            <div className="fact-counter-style1-bg"
                style={{ backgroundImage: "url(/images/backgrounds/fact-counter-style1-bg.jpg)" }}>
            </div>
            <div className="container">
                <ul className="row clearfix">

                    <li className="col-xl-4">
                        <div className="single-fact-counter">
                            <div className="icon">
                                <span className="icon-donation1"></span>
                            </div>
                            <div className="outer-box">
                                <div className="count-outer count-box">
                                    <FontAwesomeIcon icon={faHandHoldingMedical} />
                                    <CountUp
                                        start={0}
                                        end={25}
                                        duration={4}
                                        enableScrollSpy
                                        scrollSpyDelay={200}
                                    />
                                    <span className="m">+</span>
                                </div>
                                <div className="title">
                                    <h6>Active Campaigns</h6>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-xl-4">
                        <div className="single-fact-counter">
                            <div className="icon">
                                <span className="icon-money1"></span>
                            </div>
                            <div className="outer-box">
                                <div className="count-outer count-box">
                                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                                    <CountUp
                                        start={0}
                                        end={20}
                                        duration={4}
                                        enableScrollSpy
                                        scrollSpyDelay={200}
                                    />
                                    <span className="m">K</span>
                                </div>
                                <div className="title">
                                    <h6>Total Charity Raised</h6>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="col-xl-4">
                        <div className="single-fact-counter">
                            <div className="icon">
                                <span className="icon-olive1"></span>
                            </div>
                            <div className="outer-box">
                                <div className="count-outer count-box">
                                    <FontAwesomeIcon icon={faAward} />
                                    <CountUp
                                        start={0}
                                        end={2}
                                        duration={4}
                                        enableScrollSpy
                                        scrollSpyDelay={200}
                                    />
                                    <span className="m">+</span>
                                </div>
                                <div className="title">
                                    <h6>Awards Won</h6>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Counter
