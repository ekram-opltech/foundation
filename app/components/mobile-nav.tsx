"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import React from "react";

interface MobileNavProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MovileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <div className={`mobile-nav__wrapper ${isOpen ? 'expanded' : ''}`}>
            <div className="mobile-nav__overlay mobile-nav__toggler"></div>
            <div className="mobile-nav__content">
                <span className="mobile-nav__close mobile-nav__toggler">
                    <FontAwesomeIcon icon={faXmark} onClick={handleClose} />
                </span>
                <div className="logo-box">
                    <a href="index-2.html" aria-label="logo image">
                        <img src="/images/brand/f-logo.png" alt="" />
                    </a>
                </div>
                <div className="mobile-nav__container">
                    <ul className="main-menu__list">
                        <li> <Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/events">Events</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <FontAwesomeIcon icon={faPhone} />
                        <Link href="tel:8986992260">+91 8986992260</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <Link href="mailto:umeedehayatfoundation@gmail.com">umeedehayatfoundation@gmail.com</Link>
                    </li>
                </ul>
                <div className="mobile-nav__social">
                    <Link href="https://www.facebook.com/share/1DUXzWd4Lg/">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link href="https://twitter.com/">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link href="https://www.instagram.com/invites/contact/?igsh=1697absezydwp&utm_content=zotkr4b">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link href="#">
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MovileNav
