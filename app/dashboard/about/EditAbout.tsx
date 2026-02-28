
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AboutFormData, AboutSchema } from "./validation";
import { useEffect } from "react";


const EditAbout = ({ data }: { data: any }) => {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm<AboutFormData>({
        resolver: zodResolver(AboutSchema),
    });

    const onSubmit = async (data: AboutFormData) => {

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("subTitle", data.subTitle);
        formData.append("description", data.description);
        if (data.imageFile && data.imageFile.length > 0) {
            formData.append("imageFile", data.imageFile[0]);
        }

        try {
            const response = await fetch("/api/aboutUs", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            alert(result.message);
            window.location.reload();
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        if (data) {
            reset({
                title: data.title || "",
                subTitle: data.subTitle || "",
                description: data.description || "",
                imageFile: undefined,
            });
        }
    }, [data, reset]);

    return (
        <div className="contact-form mt-5" >
            <form className="default-form2" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className="row" >
                    <div className="col-md-6" >
                        <div className="form-group" >
                            <div className="input-box" >
                                <input type="text" placeholder="Title"
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
                                <input type="text" placeholder="Subtitle"
                                    {...register("subTitle")}
                                />
                            </div>
                            {errors.subTitle && (<p className="input_error">{errors.subTitle.message} </p>
                            )}
                        </div>
                    </div>
                    <div className="col-md-12" >
                        <div className="form-group" >
                            <div className="input-box" >
                                <textarea rows={5} placeholder="Description"
                                    {...register("description")}
                                />
                            </div>
                            {errors.description && (<p className="input_error">{errors.description.message} </p>
                            )}
                        </div>
                    </div>
                    <div className="col-md-6" >
                        <div className="form-group" >
                            <div className="input-box" >
                                <input type="file" placeholder="About Us Image" accept="image/*"
                                    {...register("imageFile")}
                                />
                            </div>
                            {errors.imageFile && (<p className="input_error">{errors.imageFile.message as string} </p>)}
                        </div>
                    </div>
                    <div className="col-md-6" >
                        {data?.imageUrl && (
                            <img
                                src={data.imageUrl}
                                alt="about us image"
                                width={100}
                            />
                        )}
                    </div>
                    <div className="col-md-12" >
                        <div className="form-group" >
                            <div className="input-box" >
                                <button className="btn-one" type="submit" >
                                    <span className="txt" >
                                        {isSubmitting ? "Updating..." : "Update About Us"}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditAbout
