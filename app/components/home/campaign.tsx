
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';


const Campaign = () => {

    return (
        <section className="causes-style1">
            <div className="causes-style1__shape1">
                <img src="/images/shapes/causes-style1-shape-1.png" alt="" />
            </div>
            <div className="container">
                <div className="sec-title text-center">
                    <div className="sub-title center">
                        <h4>work & support charity with us</h4>
                        <div className="big-title">featured</div>
                    </div>
                    <h2>causes & Campaigns</h2>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper modules={[Autoplay, Pagination]}
                            spaceBetween={50}
                            autoplay={{ delay: 3000 }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1200: { slidesPerView: 3 },
                            }}>
                            <SwiperSlide>
                                <div className="single-causes-style1">
                                    <div className="img-box">
                                        <img src="/images/causes/causes-v1-1.jpg" alt="" />
                                    </div>
                                    <div className="text-box">
                                        <div className="category">
                                            <h6>Education</h6>
                                        </div>
                                        <h3>
                                            <a href="#">new school buildings</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet vlputao consectetur adipiscing elit...</p>
                                        <div className="btns-box">
                                            <a className="btn-one" href="contact.html">
                                                <span className="txt">
                                                    <i className="icon-check"></i>
                                                    DONATE NOW
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-causes-style1">
                                    <div className="img-box">
                                        <img src="/images/causes/causes-v1-2.jpg" alt="" />
                                    </div>
                                    <div className="text-box">
                                        <div className="category">
                                            <h6>Food</h6>
                                        </div>
                                        <h3>
                                            <a href="#">Healthy Food For All</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet vlputao consectetur adipiscing elit...</p>

                                        <div className="btns-box">
                                            <a className="btn-one" href="contact.html">
                                                <span className="txt">
                                                    <i className="icon-check"></i>
                                                    DONATE NOW
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-causes-style1">
                                    <div className="img-box">
                                        <img src="/images/causes/causes-v1-3.jpg" alt="" />
                                    </div>
                                    <div className="text-box">
                                        <div className="category">
                                            <h6>Health</h6>
                                        </div>
                                        <h3>
                                            <a href="#">provide Health Care</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet vlputao consectetur adipiscing elit...</p>

                                        <div className="btns-box">
                                            <a className="btn-one" href="contact.html">
                                                <span className="txt">
                                                    <i className="icon-check"></i>
                                                    DONATE NOW
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-causes-style1">
                                    <div className="img-box">
                                        <img src="/images/causes/causes-v1-1.jpg" alt="" />
                                    </div>
                                    <div className="text-box">
                                        <div className="category">
                                            <h6>Education</h6>
                                        </div>
                                        <h3>
                                            <a href="#">new school buildings</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet vlputao consectetur adipiscing elit...</p>

                                        <div className="btns-box">
                                            <a className="btn-one" href="contact.html">
                                                <span className="txt">
                                                    <i className="icon-check"></i>
                                                    DONATE NOW
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-causes-style1">
                                    <div className="img-box">
                                        <img src="/images/causes/causes-v1-2.jpg" alt="" />
                                    </div>
                                    <div className="text-box">
                                        <div className="category">
                                            <h6>Food</h6>
                                        </div>
                                        <h3>
                                            <a href="#">Healthy Food For All</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet vlputao consectetur adipiscing elit...</p>

                                        <div className="btns-box">
                                            <a className="btn-one" href="contact.html">
                                                <span className="txt">
                                                    <i className="icon-check"></i>
                                                    DONATE NOW
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-causes-style1">
                                    <div className="img-box">
                                        <img src="/images/causes/causes-v1-3.jpg" alt="" />
                                    </div>
                                    <div className="text-box">
                                        <div className="category">
                                            <h6>Health</h6>
                                        </div>
                                        <h3>
                                            <a href="#">provide Health Care</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet vlputao consectetur adipiscing elit...</p>


                                        <div className="btns-box">
                                            <a className="btn-one" href="contact.html">
                                                <span className="txt">
                                                    <i className="icon-check"></i>
                                                    DONATE NOW
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-causes-style1">
                                    <div className="img-box">
                                        <img src="/images/causes/causes-v1-1.jpg" alt="" />
                                    </div>
                                    <div className="text-box">
                                        <div className="category">
                                            <h6>Education</h6>
                                        </div>
                                        <h3>
                                            <a href="#">new school buildings</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet vlputao consectetur adipiscing elit...</p>

                                        <div className="btns-box">
                                            <a className="btn-one" href="contact.html">
                                                <span className="txt">
                                                    <i className="icon-check"></i>
                                                    DONATE NOW
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-causes-style1">
                                    <div className="img-box">
                                        <img src="/images/causes/causes-v1-2.jpg" alt="" />
                                    </div>
                                    <div className="text-box">
                                        <div className="category">
                                            <h6>Food</h6>
                                        </div>
                                        <h3>
                                            <a href="#">Healthy Food For All</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet vlputao consectetur adipiscing elit...</p>

                                        <div className="btns-box">
                                            <a className="btn-one" href="contact.html">
                                                <span className="txt">
                                                    <i className="icon-check"></i>
                                                    DONATE NOW
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-causes-style1">
                                    <div className="img-box">
                                        <img src="/images/causes/causes-v1-3.jpg" alt="" />
                                    </div>
                                    <div className="text-box">
                                        <div className="category">
                                            <h6>Health</h6>
                                        </div>
                                        <h3>
                                            <a href="#">provide Health Care</a>
                                        </h3>
                                        <p>Lorem ipsum dolor sit amet vlputao consectetur adipiscing elit...</p>

                                        <div className="btns-box">
                                            <a className="btn-one" href="contact.html">
                                                <span className="txt">
                                                    <i className="icon-check"></i>
                                                    DONATE NOW
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Campaign
