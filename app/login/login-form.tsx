"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginUserFormData, loginUserSchema } from "./validataion";
import { Login } from "../services/account-services";

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<LoginUserFormData>({
        resolver: zodResolver(loginUserSchema),
    });

    const onSubmit = async (data: LoginUserFormData) => {
        await Login(data);
    };

    return (
        <form className="default-form2" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <div className="input-box">
                            <input type="email" placeholder="Your Email"
                                {...register("username")}
                            />
                        </div>
                        {errors.username && (<p className="input_error">{errors.username.message} </p>)}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group">
                        <div className="input-box">
                            <input type="password" placeholder="Password"
                                {...register("password")}
                            />
                        </div>
                        {errors.password && (<p className="input_error">{errors.password.message} </p>)}
                    </div>
                </div>
                <div className="button-box text-center">
                    <input id="form_botcheck" name="form_botcheck" className="form-control"
                        type="hidden" value="" />
                    <button className="btn-one" type="submit" data-loading-text="Please wait...">
                        <span className="txt">
                            <i className="icon-check"></i>
                            {isSubmitting ? "Loading..." : "Login Now"}
                        </span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
