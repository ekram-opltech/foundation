import PageBanner from "../components/page-banner"
import RegisterForm from "./components/register-form"

const Register = () => {

    return (

        <>
            <PageBanner item={{
                title: "Register my account",
                backgroundImage: "/images/breadcrumb/breadcrumb-1.jpg",
                shapeImage: "/images/shapes/breadcrumb-area-shape-1.png",
                breadcrumbItems: [
                    { label: "Home", href: "/" },
                    { label: "Register", href: "/register" }
                ]
            }} />
            <section className="main-contact-form-area pb-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="contact-form login_form">
                                <RegisterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register
