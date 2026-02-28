"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CounterFormData, CounterSchema } from "../validation";
import { useRouter } from "next/navigation";


const AddCounter = () => {

    const router = useRouter();

    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm<CounterFormData>({
        resolver: zodResolver(CounterSchema),
    });

    const onSubmit = async (data: CounterFormData) => {

        const body: CounterFormData = {
            title: data.title,
            end: data.end,
            suffix: data.suffix,
            icon: data.icon,
        };

        try {
            const res = await fetch("/api/counter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),

            });

            const result = await res.json();
            alert(result.message);
            router.push("/dashboard/counter");
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="cause-details-content">
            <div className="single-sidebar-box">
                <div className="sidebar-title">
                    <h3>Counters</h3>
                </div>
                <div className="sidebar-cause-post">
                    <div className="contact-form mt-5" >
                        <form className="default-form2" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row" >
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <input type="text" placeholder="counter title"
                                                {...register("title")}
                                            />
                                        </div>
                                        {errors.title && (<p className="input_error">{errors.title.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <input type="text" placeholder="End Value"
                                                {...register("end", { valueAsNumber: true })}
                                            />
                                        </div>
                                        {errors.end && (<p className="input_error">{errors.end.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <input type="text" placeholder="Suffix"
                                                {...register("suffix")}
                                            />
                                        </div>
                                        {errors.suffix && (<p className="input_error">{errors.suffix.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <input type="text" placeholder="Icon name"
                                                {...register("icon")}
                                            />
                                        </div>
                                        {errors.icon && (<p className="input_error">{errors.icon.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-12" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <button className="btn-one" type="submit" >
                                                <span className="txt" >
                                                    {isSubmitting ? "Updating..." : "Add Counter"}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCounter
