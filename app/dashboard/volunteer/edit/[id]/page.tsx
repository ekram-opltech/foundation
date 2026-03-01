"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditVolunteerFormData, EditVolunteerSchema } from "../../validation";
import { useParams, useRouter } from "next/navigation";
import { GetVolunteerById } from "@/app/services/dashboard-services"
import { useEffect, useState } from "react";

const EditVolunteer = () => {

    const [data, setData] = useState<any>();

    const router = useRouter();
    const params = useParams();
    const volunteerId = params.id as string;

    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm<EditVolunteerFormData>({
        resolver: zodResolver(EditVolunteerSchema),
    });

    const onSubmit = async (data: EditVolunteerFormData) => {

        const formData = new FormData();
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("post", data.post);
        formData.append("facebookUrl", data.facebookUrl ?? "");
        formData.append("twitterUrl", data.twitterUrl ?? "");
        formData.append("instaUrl", data.instaUrl ?? "");
        formData.append("youtubeUrl", data.youtubeUrl ?? "");
        if (data.imageFile && data.imageFile.length > 0) {
            formData.append("imageFile", data.imageFile[0]);
        }

        try {
            const res = await fetch(`/api/volunteer/${volunteerId}`, {
                method: "PUT",
                body: formData
            });

            const result = await res.json();
            alert(result.message);
            router.push("/dashboard/volunteer");
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        if (!volunteerId) return;
        const fetchData = async () => {
            try {
                const response = await GetVolunteerById(volunteerId);
                if (response) {
                    setData(response);
                    reset({
                        firstName: response.firstName,
                        lastName: response.lastName,
                        post: response.post,
                        facebookUrl: response.facebookUrl,
                        twitterUrl: response.twitterUrl,
                        instaUrl: response.instaUrl,
                        youtubeUrl: response.youtubeUrl
                    });
                }
            }
            catch (error) {
                alert(error)
            }
        }
        fetchData();
    }, [volunteerId]);

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
                                <div className="col-md-12 text-end" >
                                    {data?.imageUrl && (
                                        <img
                                            src={data.imageUrl}
                                            alt="volunteer image"
                                            width={200}
                                        />
                                    )}
                                    <p className="input_error">if you want to change image please use size 300 * 300 pixels</p>
                                </div>
                                <div className="col-md-12 mt-4" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <button className="btn-one" type="submit" >
                                                <span className="txt" >
                                                    {isSubmitting ? "Updating..." : "Update Volunteer"}
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

export default EditVolunteer
