
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterUserFormData, registerUserSchema } from "../validation";

const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<RegisterUserFormData>({
        resolver: zodResolver(registerUserSchema),
    });

    const onSubmit = async (data: RegisterUserFormData) => {

        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("designation", data.designation);
        formData.append("description", data.description);
        formData.append("avatar", data.avatar[0]);

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                body: formData,
            });

            const result = await res.json();
            alert(result.message);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <form className="default-form2" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="input-box">
                            <input type="text" placeholder="First Name"
                                {...register("firstName")}
                            />
                        </div>
                        {errors.firstName && (<p className="input_error">{errors.firstName.message} </p>
                        )}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="input-box">
                            <input type="text" placeholder="Last Name"
                                {...register("lastName")}
                            />
                        </div>
                        {errors.lastName && (<p className="input_error">{errors.lastName.message} </p>
                        )}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="input-box">
                            <input type="email" placeholder="Your Email"
                                {...register("username")}
                            />
                        </div>
                        {errors.username && (<p className="input_error">{errors.username.message}</p>
                        )}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="input-box">
                            <input type="password" placeholder="Password"
                                {...register("password")}
                            />
                        </div>
                        {errors.password && (<p className="input_error">{errors.password.message} </p>
                        )}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="input-box">
                            <input type="text" placeholder="Designation"
                                {...register("designation")}
                            />
                        </div>
                        {errors.designation && (<p className="input_error">{errors.designation.message} </p>
                        )}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <div className="input-box">
                            <input type="file" placeholder="Avatar" accept="image/*"
                                {...register("avatar")}
                            />
                        </div>
                        {errors.avatar && (<p className="input_error">{errors.avatar.message as string} </p>
                        )}
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-group">
                        <div className="input-box">
                            <textarea placeholder="Description" {...register("description")}></textarea>
                        </div>
                        {errors.description && (<p className="input_error">{errors.description.message}</p>)}
                    </div>
                </div>
                <div className="button-box text-center">
                    <input id="form_botcheck" name="form_botcheck" className="form-control"
                        type="hidden" value="" />
                    <button className="btn-one" type="submit" disabled={isSubmitting}>
                        <span className="txt">
                            <i className="icon-check"></i>
                            {isSubmitting ? "Loading..." : "submit now"}
                        </span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default RegisterForm
