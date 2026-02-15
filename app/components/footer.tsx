import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="footer-area__shape1 wow slideInRight" data-wow-delay="0ms" data-wow-duration="3500ms">
                <img src="/images/shapes/footer-area-shape1.png" alt="" />
            </div>
            <div className="footer-top py-5">
                <div className="container">
                    <div className="footer-top__inner">

                    </div>
                </div>
            </div>
            <div className="footer-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box">
                                <div className="title">
                                    <h3>contact us</h3>
                                </div>
                                <div className="footer-widget-contact-info">
                                    <p>AT + Post - Hat Chowk Sitanabad ,<br /> Saharsa Bihar</p>
                                    <div className="phone-number">
                                        <p>Donations By Call</p>
                                        <h3>
                                            <span className="icon-phone1"></span>
                                            <a href="tel:8986992260">+91 8986992260</a>
                                        </h3>
                                    </div>
                                    <div className="mail-us">
                                        <a href="mailto:umeedehayatfoundation@gmail.com">umeedehayatfoundation@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box margin-left">
                                <div className="title">
                                    <h3>Quick Links</h3>
                                </div>
                                <div className="footer-widget-links">
                                    <ul>
                                        <li>
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link href="/about">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 single-widget">
                            <div className="single-footer-widget single-footer-widget--link-box margin-left-minus2">
                                <div className="title">
                                    <h3>Campaigns</h3>
                                </div>
                                <div className="footer-widget-links">
                                    <ul>
                                        <li>
                                            <Link href="/events">Events</Link>
                                        </li>
                                        <li>
                                            <Link href="/donate">Donate</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="bottom-inner">
                        <div className="copyright-text">
                            <p>
                                &copy; {new Date().getFullYear()}
                                <Link href="/" className="ms-3">Umeed-E-Hayat Foundation.</Link> All Rights Reserved.
                            </p>
                        </div>
                        <div className="footer-bottom-right">
                            <div className="footer-social-link">
                                <ul className="clearfix">
                                    <li>
                                        <Link href="https://www.facebook.com/share/1DUXzWd4Lg/">
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://twitter.com/">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/invites/contact/?igsh=1697absezydwp&utm_content=zotkr4b">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
