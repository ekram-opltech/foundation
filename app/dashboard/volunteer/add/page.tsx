"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VolunteerFormData, VolunteerSchema } from "../validation";
import { useRouter } from "next/navigation";

const AddVolunteer = () => {

    const router = useRouter();

    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm<VolunteerFormData>({
        resolver: zodResolver(VolunteerSchema),
    });

    const onSubmit = async (data: VolunteerFormData) => {

        const formData = new FormData();
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("post", data.post);
        formData.append("facebookUrl", data.facebookUrl ?? "");
        formData.append("twitterUrl", data.twitterUrl ?? "");
        formData.append("instaUrl", data.instaUrl ?? "");
        formData.append("youtubeUrl", data.youtubeUrl ?? "");
        formData.append("imageFile", data.imageFile[0]);
        try {
            const res = await fetch("/api/volunteer", {
                method: "POST",
                body: formData
            });

            const result = await res.json();
            if (result.success) {
                alert(result.message);
                router.push("/dashboard/volunteer");
            }
            else {
                alert(result.message);
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="cause-details-content">
            <div className="single-sidebar-box">
                <div className="sidebar-title">
                    <h3>volunteer</h3>
                </div>
                <div className="sidebar-cause-post">
                    <div className="contact-form mt-5" >
                        <form className="default-form2" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row" >
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <input type="text" placeholder="first name"
                                                {...register("firstName")}
                                            />
                                        </div>
                                        {errors.firstName && (<p className="input_error">{errors.firstName.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <input type="text" placeholder="last name"
                                                {...register("lastName")}
                                            />
                                        </div>
                                        {errors.lastName && (<p className="input_error">{errors.lastName.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <input type="text" placeholder="post"
                                                {...register("post")}
                                            />
                                        </div>
                                        {errors.post && (<p className="input_error">{errors.post.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <input type="file" placeholder="Brand Logo" accept="image/*"
                                                {...register("imageFile")}
                                            />
                                        </div>
                                        {errors.imageFile && (<p className="input_error">{errors.imageFile.message as string} </p>)}
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <input type="text" placeholder="facebook link"
                                                {...register("facebookUrl")}
                                            />
                                        </div>
                                        {errors.facebookUrl && (<p className="input_error">{errors.facebookUrl.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <input type="text" placeholder="twitter link"
                                                {...register("twitterUrl")}
                                            />
                                        </div>
                                        {errors.twitterUrl && (<p className="input_error">{errors.twitterUrl.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <input type="text" placeholder="insta link"
                                                {...register("instaUrl")}
                                            />
                                        </div>
                                        {errors.instaUrl && (<p className="input_error">{errors.instaUrl.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <input type="text" placeholder="youtube link"
                                                {...register("youtubeUrl")}
                                            />
                                        </div>
                                        {errors.youtubeUrl && (<p className="input_error">{errors.youtubeUrl.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-12" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <button className="btn-one" type="submit" >
                                                <span className="txt" >
                                                    {isSubmitting ? "Adding..." : "Add Volunteer"}
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

export default AddVolunteer
