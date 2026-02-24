import PageBanner from "../components/page-banner"
import LoginForm from "./login-form"

const Login = () => {

    return (

        <>
            <PageBanner item={{
                title: "Login",
                backgroundImage: "/images/breadcrumb/breadcrumb-1.jpg",
                shapeImage: "/images/shapes/breadcrumb-area-shape-1.png",
                breadcrumbItems: [
                    { label: "Home", href: "/" },
                    { label: "Login", href: "/login" }
                ]
            }} />
            <section className="main-contact-form-area pb-5 mb-5">
                <div className="container">
                    <div className="row">
                        <div className=" offset-md-3 col-md-6">
                            <div className="contact-form login_form">
                                <LoginForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
