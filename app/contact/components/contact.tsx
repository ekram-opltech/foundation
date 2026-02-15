
const Contact = () => {
    return (
        <section className="main-contact-form-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="contact-info-box-style1">
                            <div className="title">
                                <h2>get in touch</h2>
                                <p>Quis purus elementum quis quis penatibus ultriceu dictumst nam tellus antario eptu
                                    orciopations maesu larem ouset Fermentum donec.</p>
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
                        <div className="contact-form">
                            <form name="contact_form" className="default-form2">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="text" name="form_name" id="formName"
                                                    placeholder="Your Name" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="email" name="form_email" id="formEmail"
                                                    placeholder="Your Email" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="text" name="form_phone" value="" id="formPhone"
                                                    placeholder="Phone" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <input type="text" name="form_subject" value="" id="formSubject"
                                                    placeholder="Subject" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="form-group">
                                            <div className="input-box">
                                                <textarea name="form_message" id="formMessage" placeholder="Message"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="button-box">
                                            <input id="form_botcheck" name="form_botcheck" className="form-control"
                                                type="hidden" value="" />
                                            <button className="btn-one" type="button" data-loading-text="Please wait...">
                                                <span className="txt">
                                                    <i className="icon-check"></i>
                                                    submit now
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact
