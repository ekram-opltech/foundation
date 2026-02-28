
import { IApiResponse } from "@/app/models/api-response";
import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import cloudinary from "@/app/lib/cloudinary";
import { IEvent } from "./type";
import Event from "@/app/models/event";

export async function POST(req: Request) {
    const response: IApiResponse = { success: false, message: "", data: null };
    try {
        const formData = await req.formData();

        const eventDateString = formData.get("eventDate") as string;
        const startTime = formData.get("startTime") as string;
        const endTime = formData.get("endTime") as string;

        const body: IEvent = {
            title: formData.get("title") as string,
            location: formData.get("location") as string,
            imageFile: formData.get("imageFile") as File,
            eventDate: new Date(eventDateString),
            startTime: new Date(`${eventDateString}T${startTime}`),
            endTime: new Date(`${eventDateString}T${endTime}`)
        };

        if (!body.title || !body.location || !body.eventDate) {
            response.message = "Missing required fields: title, location and event Date are required.";
            return NextResponse.json(response, { status: 400 });
        }

        let imageUrl = "";

        if (body.imageFile) {
            const bytes = await body.imageFile.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const uploadResponse = await new Promise<any>((resolve, reject) => {
                cloudinary.uploader.upload_stream(
                    { folder: "foundation" },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                ).end(buffer);
            });

            imageUrl = uploadResponse.secure_url;
        }

        await connectDB();

        const newEvent = await Event.create({
            title: body.title,
            location: body.location,
            imageUrl: imageUrl,
            eventDate: body.eventDate,
            startTime: body.startTime,
            endTime: body.endTime
        });

        response.success = true;
        response.message = "event created successfully.";
        response.data = newEvent;

        return NextResponse.json(response, { status: 201 });
    }
    catch (error) {
        response.message = "An error occurred while processing the request.";
        return NextResponse.json(response, { status: 500 });
    }
}

export async function GET() {
    const response: IApiResponse = { success: false, message: "", data: null };
    try {

        await connectDB();

        const events = await Event.find();

        response.success = true;
        response.message = "events retrieved successfully.";
        response.data = events;
        return NextResponse.json(response, { status: 200 });
    }
    catch (error) {
        response.message = "An error occurred while retrieving events.";
        return NextResponse.json(response, { status: 500 });
    }
}