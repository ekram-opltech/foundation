
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BrandFormData, BrandSchema } from "./validation";
import { useEffect } from "react";


const EditBrand = ({ siteSetting }: { siteSetting: any }) => {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm<BrandFormData>({
        resolver: zodResolver(BrandSchema),
    });

    const onSubmit = async (data: BrandFormData) => {

        const formData = new FormData();
        formData.append("brandName", data.brandName);
        formData.append("contactEmail", data.contactEmail);
        formData.append("contactPhone", data.contactPhone);
        formData.append("address", data.address);
        if (data.brandLogo && data.brandLogo.length > 0) {
            formData.append("brandLogo", data.brandLogo[0]);
        }

        try {
            const res = await fetch("/api/siteSetting", {
                method: "POST",
                body: formData,
            });

            const result = await res.json();
            alert(result.message);
            window.location.reload();
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        if (siteSetting) {
            reset({
                brandName: siteSetting.brandName || "",
                contactEmail: siteSetting.contactEmail || "",
                contactPhone: siteSetting.contactPhone || "",
                address: siteSetting.address || "",
            });
        }
    }, [siteSetting, reset]);

    return (
        <div className="contact-form mt-5" >
            <form className="default-form2" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div className="row" >
                    <div className="col-md-6" >
                        <div className="form-group" >
                            <div className="input-box" >
                                <input type="text" placeholder="Brand Name"
                                    {...register("brandName")}
                                />
                            </div>
                            {errors.brandName && (<p className="input_error">{errors.brandName.message} </p>
                            )}
                        </div>
                    </div>
                    <div className="col-md-6" >
                        <div className="form-group" >
                            <div className="input-box" >
                                <input type="email" placeholder="Brand Email"
                                    {...register("contactEmail")}
                                />
                            </div>
                            {errors.contactEmail && (<p className="input_error">{errors.contactEmail.message} </p>
                            )}
                        </div>
                    </div>
                    <div className="col-md-6" >
                        <div className="form-group" >
                            <div className="input-box" >
                                <input type="text" placeholder="Brand Phone"
                                    {...register("contactPhone")}
                                />
                            </div>
                            {errors.contactPhone && (<p className="input_error">{errors.contactPhone.message} </p>
                            )}
                        </div>
                    </div>
                    <div className="col-md-12" >
                        <div className="form-group" >
                            <div className="input-box" >
                                <input type="text" placeholder="Brand Address"
                                    {...register("address")}
                                />
                            </div>
                            {errors.address && (<p className="input_error">{errors.address.message} </p>
                            )}
                        </div>
                    </div>
                    <div className="col-md-6" >
                        <div className="form-group" >
                            <div className="input-box" >
                                <input type="file" placeholder="Brand Logo" accept="image/*"
                                    {...register("brandLogo")}
                                />
                            </div>
                            {errors.brandLogo && (<p className="input_error">{errors.brandLogo.message as string} </p>)}
                        </div>
                    </div>
                    <div className="col-md-6" >
                        {siteSetting?.brandLogo && (
                            <img
                                src={siteSetting.brandLogo}
                                alt="Brand Logo"
                                width={100}
                            />
                        )}
                    </div>
                    <div className="col-md-12" >
                        <div className="form-group" >
                            <div className="input-box" >
                                <button className="btn-one" type="submit" >
                                    <span className="txt" >
                                        {isSubmitting ? "Updating..." : "Update Brand"}
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

export default EditBrand
