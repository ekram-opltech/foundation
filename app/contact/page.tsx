import PageBanner from "../components/page-banner"
import Contact from "./components/contact"

const ContactPage = () => {
    return (
        <>
            <PageBanner item={{
                title: "Contact Us",
                backgroundImage: "/images/breadcrumb/breadcrumb-1.jpg",
                shapeImage: "/images/shapes/breadcrumb-area-shape-1.png",
                breadcrumbItems: [
                    { label: "Home", href: "/" },
                    { label: "Contact", href: "/contact" }
                ]
            }} />

            <Contact />

            <section className="google-map-style1">
                <div className="container">
                    <div className="google-map-outer-box">
                        <div className="google-map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1480.503603696575!2d86.5698391916296!3d25.78701974301385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1771151876665!5m2!1sen!2sin"
                                className="google-map__one" ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactPage
