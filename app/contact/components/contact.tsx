import ContactForm from "./contact-form"



const Contact = () => {



    return (
        <section className="main-contact-form-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="contact-info-box-style1">
                            <div className="title">
                                <h2>get in touch</h2>
                                <p>Interested in volunteering, donating, or partnering with our foundation? We’d love to hear from you. Connect with us today and help us continue bringing hope, support, and positive change to those who need it most.</p>
                            </div>
                            <div className="phone-number">
                                <h3>Call us for any donations & support us</h3>
                                <a href="tel:8986992260"><span className="icon-phone-1"></span> +91 8986992260</a>
                            </div>
                            <ul className="contact-info-1">
                                <li>
                                    <h4>Email Us</h4>
                                    <p><a href="mailto:umeedehayatfoundation@gmail.com">umeedehayatfoundation@gmail.com</a></p>
                                </li>
                                <li>
                                    <h4>Address</h4>
                                    <p>AT + Post - Hat Chowk Sitanabad , Saharsa Bihar</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-7">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
