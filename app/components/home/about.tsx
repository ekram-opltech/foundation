import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCheckToSlot, faHeart } from "@fortawesome/free-solid-svg-icons";

const About = () => {
    return (
        <section className="about-style2">
            <div className="about-style2__shape1">
                <img className="float-bob-x" src="/images/shapes/about-style1-shape-1.png" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-style2__img">
                            <div className="inner">
                                <img src="/images/about/about-style2-img-1.jpg" alt="" />
                            </div>
                            <div className="video-gallery-style1 video-gallery-style1--style2">
                                <div className="icon wow slideInUp animated" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <a className="video-popup" title="Video Gallery"
                                        href="https://www.youtube.com/watch?v=LMlCN6_vUvs">
                                        <FontAwesomeIcon icon={faPlay} className="icon-play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="about-style2__content">
                            <div className="sec-title">
                                <div className="sub-title">
                                    <h4>how we make a difference</h4>
                                </div>
                                <h2>get a better life</h2>
                            </div>
                            <div className="inner-text">
                                <p>Mea docendi theop hrastus conclusion emque eamovet homers.
                                    In modo magna oratio vel, has cu probatus forensibus natum acuy
                                    ipsum dolor sit amet consecteur vulputate.</p>

                                <div className="list-item">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faCheckToSlot} />
                                            </div>
                                            1900+ Poor children feed & empowering
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faCheckToSlot} />
                                                <span ></span>
                                            </div>
                                            24,000+ People are lifted from poverty
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FontAwesomeIcon icon={faCheckToSlot} />
                                            </div>
                                            500+ Medical & healthy facilities built
                                        </li>
                                    </ul>
                                </div>

                                <div className="donors-box donors-box--style2">
                                    <div className="img-box">
                                        <ul>
                                            <li><img src="/images/resources/donor-1.jpg" alt="" /></li>
                                            <li><img src="/images/resources/donor-2.jpg" alt="" /></li>
                                            <li><img src="/images/resources/donor-3.jpg" alt="" /></li>
                                        </ul>
                                    </div>
                                    <div className="text-box">
                                        <p>500+ Volunteers & Growing</p>
                                    </div>
                                </div>

                                <div className="btns-box">
                                    <Link className="btn-one" href="/contact">
                                        <span className="txt">
                                            <FontAwesomeIcon className="me-2" icon={faHeart} />
                                            Discover more
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
