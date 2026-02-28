"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import LogoutButton from "../../components/logout-button";
import { usePathname } from "next/navigation";
import { dashboardNavLinks } from "@/helper/routeLinks";


const DashboardSidebar = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <ul className="sidebar-categories-box">
            {
                dashboardNavLinks.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href} className={isActive(link.href) ? "active" : ""}>
                            {link.label}
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                    </li>
                ))}
            <li>
                <a href="#"> <LogoutButton /> <FontAwesomeIcon icon={faAngleRight} /></a>
            </li>
        </ul>
    )
}

export default DashboardSidebar
