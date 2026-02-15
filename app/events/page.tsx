import PageBanner from "../components/page-banner"
import Events from "./components/events"

const EventPage = () => {
    return (
        <>
            <PageBanner item={{
                title: "Events",
                backgroundImage: "/images/breadcrumb/breadcrumb-1.jpg",
                shapeImage: "/images/shapes/breadcrumb-area-shape-1.png",
                breadcrumbItems: [
                    { label: "Home", href: "/" },
                    { label: "Events", href: "/events" }
                ]
            }} />

            <Events />
        </>
    )
}

export default EventPage
