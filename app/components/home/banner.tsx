"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link'

const Banner = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                loop={true}
                effect="fade"
                pagination={{ clickable: true }}
                navigation={false}
                autoplay={{ delay: 6000 }}
                className="swiper-container thm-swiper__slider"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="image-layer" style={{ backgroundImage: 'url(/images/slides/slide-v1-1.jpg)' }}></div>
                    <div className="main-slider-style1__shape1 wow animate__zoomIn">
                        <img className="zoominout" src="/images/shapes/main-slider-style1-shape-1.png" alt="Shape 1" />
                    </div>
                    <div className="container">
                        <div className="main-slider-content text-center">
                            <div className="sub-title">
                                <h3>how we make a difference</h3>
                            </div>
                            <div className="big-title">
                                <h2>Charity looks at the need<br /> and not at the cause</h2>
                            </div>
                            <div className="text">
                                <p>Ipsum dolor sit amet to togeth sed consectetur</p>
                            </div>
                            <div className="btn-box">
                                <Link className="btn-one left" href="/contact">
                                    <span className="txt"><i className="icon-check"></i> Support us</span>
                                </Link>
                                <Link className="btn-one right" href="/events">
                                    <span className="txt"><i className="icon-check"></i> view events</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="image-layer" style={{ backgroundImage: `url(/images/slides/slide-v1-2.jpg)` }}>
                    </div>
                    <div className="main-slider-style1__shape1 wow animate__zoomIn" data-wow-delay="100ms"
                        data-wow-duration="2s">
                        <img className="zoominout" src="/images/shapes/main-slider-style1-shape-1.png" alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="main-slider-content">
                                    <div className="main-slider-content__inner text-center">

                                        <div className="sub-title">
                                            <h3>how we make a difference</h3>
                                        </div>
                                        <div className="big-title">
                                            <h2>we’ve helped more than 45,000<br /> people of poverty</h2>
                                        </div>
                                        <div className="text">
                                            <p>
                                                Ipsum dolor sit amet to togeth sed consectetur
                                            </p>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="btn-one left" href="/contact">
                                                <span className="txt">
                                                    <i className="icon-check"></i>
                                                    Support us
                                                </span>
                                            </Link>
                                            <Link className="btn-one right" href="/events">
                                                <span className="txt">
                                                    <i className="icon-check"></i>
                                                    view events
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="image-layer" style={{ backgroundImage: `url(/images/slides/slide-v1-3.jpg)` }}>
                    </div>
                    <div className="main-slider-style1__shape1 wow animate__zoomIn" data-wow-delay="100ms"
                        data-wow-duration="2s">
                        <img className="zoominout" src="/images/shapes/main-slider-style1-shape-1.png" alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="main-slider-content">
                                    <div className="main-slider-content__inner text-center">

                                        <div className="sub-title">
                                            <h3>how we make a difference</h3>
                                        </div>
                                        <div className="big-title">
                                            <h2>we’ve helped more than 45,000<br /> people of poverty</h2>
                                        </div>
                                        <div className="text">
                                            <p>
                                                Ipsum dolor sit amet to togeth sed consectetur
                                            </p>
                                        </div>
                                        <div className="btn-box">
                                            <Link className="btn-one left" href="/contact">
                                                <span className="txt">
                                                    <i className="icon-check"></i>
                                                    Support us
                                                </span>
                                            </Link>
                                            <Link className="btn-one right" href="/events">
                                                <span className="txt">
                                                    <i className="icon-check"></i>
                                                    view events
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>


    )
}

export default Banner
