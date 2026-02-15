import Link from "next/link"

const About = () => {
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
                                <img src="/images/about/about-style1-1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-style1__content">
                            <div className="sec-title">
                                <div className="sub-title">
                                    <h4>Umeed E Hayat Foundation</h4>
                                    <div className="big-title">about us</div>
                                </div>
                                <h2>About us</h2>
                            </div>
                            <div className="inner-text">
                                <p className="mb-2">
                                    <b>Umeed E Hayat Foundation</b> is a compassionate nonprofit organization dedicated to supporting underprivileged and vulnerable communities. The foundation works with a strong belief that every individual deserves hope, dignity, and a better quality of life. It focuses on providing essential assistance such as food distribution to families facing hunger and financial hardship. Through organized ration drives and meal programs, the foundation ensures that needy households receive basic nutrition.
                                </p>
                                <p className="mb-4">
                                    In addition to food support, Umeed E Hayat Foundation actively contributes to medical assistance. It helps patients who cannot afford treatment, medicines, or hospital expenses. The organization also participates in health awareness initiatives and emergency relief efforts during times of crisis.
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
