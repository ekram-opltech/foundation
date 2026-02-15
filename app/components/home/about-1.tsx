
const AboutSection1 = () => {
    return (
        <section className="about-style1">
            <div className="about-style1__shape1">
                <img className="float-bob-x" src="/images/shapes/about-style1-shape-1.png" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-style1__img">
                                <div className="satisfied-patients-box">
                                    <div className="img-box">
                                        <img src="/images/about/about-style1-2.jpg" alt="" />
                                    </div>
                                    <div className="counting-box">
                                        <div className="counting">
                                            <h2 className="odometer" data-count="4.9">00</h2>
                                            <span className="k">k</span>
                                        </div>
                                        <p>Satisfied Donors</p>
                                    </div>
                                </div>
                                <div className="inner">
                                    <img src="/images/about/about-style1-1.jpg" alt="" />
                                </div>
                                <div className="outer">
                                    <img src="/images/about/about-style1-3.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="about-style1__content">
                                <div className="sec-title">
                                    <div className="sub-title">
                                        <h4>how we make a difference</h4>
                                        <div className="big-title">about us</div>
                                    </div>
                                    <h2>charity matters</h2>
                                </div>
                                <div className="inner-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscingelit mil. Nunc vulputate libero et
                                        velit interdum, ac aliquet odiotype mattis. Class aptent taciti sociosqu ad.</p>

                                    <div className="list-item">
                                        <ul>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-restaurant-1"></span>
                                                </div>
                                                1900+ Poor children feed & empowering
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-dollar11"></span>
                                                </div>
                                                24,000+ People are lifted from poverty
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-medical"></span>
                                                </div>
                                                500+ Medical & healthy facilities built
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="btns-box">
                                        <a className="btn-one" href="contact.html">
                                            <span className="txt">
                                                <i className="icon-heart"></i>
                                                more about us
                                            </span>
                                        </a>
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

export default AboutSection1
