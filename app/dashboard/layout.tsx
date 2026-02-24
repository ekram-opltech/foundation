import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "../components/logout-button";

export default function DashboardLayout({ children, }: { children: React.ReactNode; }) {

    return (
        <section className="cause-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="thm-sidebar-box">
                            <div className="single-sidebar-box">
                                <div className="sidebar-title">
                                    <h3>Dashboard</h3>
                                </div>
                                <ul className="sidebar-categories-box">
                                    <li><Link href="/dashboard/profile">My Profile<FontAwesomeIcon icon={faAngleRight} /></Link></li>
                                    <li>
                                        <a href="#"> <LogoutButton /> <FontAwesomeIcon icon={faAngleRight} /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}