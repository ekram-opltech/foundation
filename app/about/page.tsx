import PageBanner from "../components/page-banner"
import About from "./components/about"
import Counter from "./components/counter"
import Volunteer from "./volunteer"

const AboutPage = () => {
    return (
        <>
            <PageBanner item={{
                title: "About Umeed E Hayat",
                backgroundImage: "/images/breadcrumb/breadcrumb-1.jpg",
                shapeImage: "/images/shapes/breadcrumb-area-shape-1.png",
                breadcrumbItems: [
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" }
                ]
            }} />

            <About />
            <Counter />
            <Volunteer />
        </>
    )
}

export default AboutPage
