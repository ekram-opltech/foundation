import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpenReader, faHandHoldingDroplet, faBowlFood, faHeartPulse } from "@fortawesome/free-solid-svg-icons";

const MissionSection = () => {
    return (
        <section className="mission-style1">
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sub-title center">
                        <h4>work & support charity with us</h4>
                        <div className="big-title">our mission</div>
                    </div>
                    <h2>let’s make it happen</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4">
                        <div className="mission-style1__img">
                            <div className="mission-style1__img-shape wow slideInLeft" data-wow-delay="0ms"
                                data-wow-duration="3500ms">
                                <img className="rotate-me" src="/images/shapes/mission-style1__img-shape-1.png"
                                    alt="" />
                            </div>
                            <div className="mission-style1__img-box">
                                <img src="/images/resources/mission-style1-img-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8">
                        <div className="mission-style1__content-box">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="mission-style1-single-box">
                                        <div className="inner">
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faHandHoldingDroplet} />
                                            </div>
                                            <div className="text">
                                                <h3>get Clean Water</h3>
                                                <p>Lorem ipsum dolor sit amet
                                                    consectetur elit male.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="mission-style1-single-box">
                                        <div className="inner">
                                            <div className="icon bg2">
                                                <FontAwesomeIcon icon={faBookOpenReader} />
                                            </div>
                                            <div className="text">
                                                <h3>education for all</h3>
                                                <p>Lorem ipsum dolor sit amet
                                                    consectetur elit male.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="mission-style1-single-box">
                                        <div className="inner">
                                            <div className="icon bg3">

                                                <FontAwesomeIcon icon={faBowlFood} />
                                            </div>
                                            <div className="text">
                                                <h3>feed the hungry</h3>
                                                <p>Lorem ipsum dolor sit amet
                                                    consectetur elit male.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="mission-style1-single-box">
                                        <div className="inner">
                                            <div className="icon bg4">
                                                <FontAwesomeIcon icon={faHeartPulse} />
                                            </div>
                                            <div className="text">
                                                <h3>health facilities</h3>
                                                <p>Lorem ipsum dolor sit amet
                                                    consectetur elit male.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionSection
