"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import MovileNav from "./mobile-nav";
import { useState } from "react";

const Header: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen(true);
    }

    return (
        <>
            <header className="main-header main-header-style2">
                <div className="main-header-style2__top">
                    <div className="container">
                        <div className="inner-content">

                            <div className="main-header-style2__top-left">
                                <div className="header-social-link-style2">
                                    <div className="inner-title">
                                        <h5>We Are Social</h5>
                                    </div>
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
                            <div className="main-header-style2__top-right">
                                <div className="header-contact-info-style2">
                                    <ul>
                                        <li>
                                            Call us:
                                            <Link href="tel:8986992260">+91 8986992260</Link>
                                        </li>
                                        <li>
                                            Email us:
                                            <Link href="mailto:umeedehayatfoundation@gmail.com">umeedehayatfoundation@gmail.com</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu main-menu-style2">
                    <div className="main-menu__wrapper clearfix">
                        <div className="container">
                            <div className="main-menu__wrapper-inner">

                                <div className="main-menu-style2-left">
                                    <div className="logo-box-style1">
                                        <Link href="/">
                                            <img src="/images/brand/f-logo.png" alt="Awesome Logo" title="" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="main-menu-style2-middle">
                                    <div className="main-menu-box">
                                        <a href="#" className="mobile-nav__toggler" onClick={handleOpen}>
                                            <FontAwesomeIcon icon={faBars} />
                                        </a>
                                        <ul className="main-menu__list">
                                            <li> <Link href="/">Home</Link></li>
                                            <li><Link href="/about">About Us</Link></li>
                                            <li><Link href="/events">Events</Link></li>
                                            <li><Link href="/contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="main-menu-style2-right">
                                    {/* <div className="side-content-button">
                                    <a className="navSidebar-button" href="#">
                                        <span className="line"></span>
                                        <span className="line two"></span>
                                    </a>
                                </div> */}
                                    <div className="header-btn-style2">
                                        <Link className="btn-one" href="/contact">
                                            <span className="txt">
                                                <i className="icon-check"></i>
                                                Let’s Donate
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <MovileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </>

    )
}

export default Header
