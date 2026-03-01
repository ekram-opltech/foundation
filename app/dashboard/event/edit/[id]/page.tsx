"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import { EditEventFormData, EditEventSchema } from "../../validation";
import { GetEventById } from "@/app/services/dashboard-services";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const EditEvent = () => {

    const [data, setData] = useState<any>();

    const router = useRouter();
    const params = useParams();
    const eventId = params.id as string;

    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm<EditEventFormData>({
        resolver: zodResolver(EditEventSchema),
    });

    const onSubmit = async (data: EditEventFormData) => {

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("location", data.location);
        formData.append("eventDate", data.eventDate);
        formData.append("startTime", data.startTime);
        formData.append("endTime", data.endTime);
        if (data.imageFile && data.imageFile.length > 0) {
            formData.append("imageFile", data.imageFile[0]);
        }

        try {
            const res = await fetch(`/api/event/${eventId}`, {
                method: "PUT",
                body: formData
            });

            const result = await res.json();
            if (result.success) {
                alert(result.message);
                router.push("/dashboard/event");
            }
            else {
                alert(result.message);
            }
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        if (!eventId) return;
        const fetchData = async () => {
            try {
                const response = await GetEventById(eventId);
                if (response) {
                    setData(response);
                    reset({
                        title: response.title,
                        location: response.location,
                        eventDate: dayjs(response.eventDate).format("YYYY-MM-DD"),
                        startTime: dayjs(response.startTime).format("HH:mm"),
                        endTime: dayjs(response.endTime).format("HH:mm")
                    });
                }
            }
            catch (error) {
                alert(error)
            }
        }
        fetchData();
    }, [eventId]);

    return (
        <div className="cause-details-content">
            <div className="single-sidebar-box">
                <div className="sidebar-title">
                    <h3>Add Event</h3>
                </div>
                <div className="sidebar-cause-post">
                    <div className="contact-form mt-5" >
                        <form className="default-form2" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row" >
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <label htmlFor="">Event Title</label>
                                            <input type="text" placeholder="event title"
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
                                            <label htmlFor="">Event Location</label>
                                            <input type="text" placeholder="event location"
                                                {...register("location")}
                                            />
                                        </div>
                                        {errors.location && (<p className="input_error">{errors.location.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <label htmlFor="">Event Date</label>
                                        <div className="input-box" >
                                            <input type="date"
                                                {...register("eventDate")}
                                            />
                                        </div>
                                        {errors.eventDate && (<p className="input_error">{errors.eventDate.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <label htmlFor="">Start Time</label>
                                            <input type="time"
                                                {...register("startTime")}
                                            />
                                        </div>
                                        {errors.startTime && (<p className="input_error">{errors.startTime.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <label htmlFor="">End Time</label>
                                            <input type="time"
                                                {...register("endTime")}
                                            />
                                        </div>
                                        {errors.endTime && (<p className="input_error">{errors.endTime.message} </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6 pt-5" >
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
                                    <p className="input_error">if you want to change image please use 600 * 370 pixels</p>
                                </div>
                                <div className="col-md-12" >
                                    <div className="form-group" >
                                        <div className="input-box" >
                                            <button className="btn-one" type="submit" >
                                                <span className="txt" >
                                                    {isSubmitting ? "Updating..." : "Update Event"}
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

export default EditEvent
