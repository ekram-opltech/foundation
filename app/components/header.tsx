"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import MovileNav from "./mobile-nav";
import { useEffect, useState } from "react";
import LoginHeader from "./login-header";
import { mainNavLinks } from "../../helper/routeLinks";
import { usePathname } from "next/navigation";
import { GetSiteSetting } from "../services/dashboard-services";

const Header: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const [siteSetting, setSiteSetting] = useState<any>(null);

    useEffect(() => {
        const fetchSiteSetting = async () => {
            try {
                const data = await GetSiteSetting();
                setSiteSetting(data);
            } catch (error) {
                console.error("Failed to fetch site setting:", error);
            }
        };
        fetchSiteSetting();
    }, []);

    const handleOpen = () => {
        setIsOpen(true);
    }

    const isActive = (path: string) => pathname === path;

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
                                            <Link href={`tel:${siteSetting?.contactPhone}`}>+91 {siteSetting?.contactPhone}</Link>
                                        </li>
                                        <li>
                                            Email us:
                                            <Link href={`mailto:${siteSetting?.contactEmail}`}>{siteSetting?.contactEmail}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu main-menu-style2 nav_shadow">
                    <div className="main-menu__wrapper clearfix">
                        <div className="container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu-style2-left">
                                    <div className="logo-box-style1">
                                        <Link href="/">
                                            <img src={siteSetting?.brandLogo} alt="Awesome Logo" title="" />
                                        </Link>
                                    </div>
                                </div>

                                <div className="main-menu-style2-middle">
                                    <div className="main-menu-box">
                                        <a href="#" className="mobile-nav__toggler" onClick={handleOpen}>
                                            <FontAwesomeIcon icon={faBars} />
                                        </a>
                                        <ul className="main-menu__list">
                                            {mainNavLinks.map((link) => (
                                                <li key={link.href}>
                                                    <Link
                                                        href={link.href}
                                                        className={isActive(link.href) ? "active" : ""}
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                            <LoginHeader />
                                        </ul>
                                    </div>
                                </div>

                                <div className="main-menu-style2-right">
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
