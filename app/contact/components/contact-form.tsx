"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, ContactSchema } from "./validation";
import { IContact } from "@/app/api/contact/type";

const ContactForm = () => {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm<ContactFormData>({
        resolver: zodResolver(ContactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {

        const body: IContact = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message
        }
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            const result = await response.json();
            if (result.success) {
                alert(result.message);
                window.location.reload();
            }
            else {
                alert(result.message);
            }
        } catch (error) {
            alert(error);
        }
    };
    return (
        <div className="contact-form">
            <form name="contact_form" className="default-form2" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="form-group">
                            <div className="input-box">
                                <input type="text" placeholder="Your Name"  {...register("name")} />
                            </div>
                            {errors.name && (<p className="input_error">{errors.name.message} </p>)}
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="form-group">
                            <div className="input-box">
                                <input type="email" placeholder="Your Email" {...register("email")} />
                            </div>
                            {errors.email && (<p className="input_error">{errors.email.message} </p>)}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-6">
                        <div className="form-group">
                            <div className="input-box">
                                <input type="text" placeholder="Phone" {...register("phone")} />
                            </div>
                            {errors.phone && (<p className="input_error">{errors.phone.message} </p>)}
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="form-group">
                            <div className="input-box">
                                <input type="text" placeholder="Subject" {...register("subject")} />
                            </div>
                            {errors.subject && (<p className="input_error">{errors.subject.message} </p>)}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-12">
                        <div className="form-group">
                            <div className="input-box">
                                <textarea placeholder="Message" {...register("message")}></textarea>
                            </div>
                            {errors.message && (<p className="input_error">{errors.message.message} </p>)}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="button-box">
                            <input id="form_botcheck" name="form_botcheck" className="form-control"
                                type="hidden" value="" />
                            <button className="btn-one" type="submit" >
                                <span className="txt" >
                                    {isSubmitting ? "submitting..." : "submit now"}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default ContactForm
