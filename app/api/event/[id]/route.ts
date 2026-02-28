import { connectDB } from "@/app/lib/mongodb";
import { IApiResponse } from "@/app/models/api-response";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import cloudinary from "@/app/lib/cloudinary";
import Event from "@/app/models/event";

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
    const response: IApiResponse = { success: false, message: "", data: null };
    const { id } = await context.params;
    try {
        await connectDB();
        const data = await Event.findById(id);
        if (!data) {
            response.message = "Event not found.";
            return NextResponse.json(response, { status: 404 });
        }

        response.success = true;
        response.data = data;

        return NextResponse.json(response, { status: 200 });
    }
    catch (error) {
        response.message = error instanceof Error ? error.message : "Internal server error";
        return NextResponse.json(response, { status: 500 });
    }
}

export async function PUT(req: Request, context: { params: Promise<{ id: string }> }) {
    const response: IApiResponse = { success: false, message: "", data: null };
    const { id } = await context.params;
    try {
        await connectDB();
        if (!mongoose.Types.ObjectId.isValid(id)) {
            response.message = "Invalid Counter ID";
            return NextResponse.json(response, { status: 400 });
        }

        const formData = await req.formData();

        const eventDateString = formData.get("eventDate") as string;
        const _startTime = formData.get("startTime") as string;
        const _endTime = formData.get("endTime") as string;


        const title = formData.get("title") as string;
        const location = formData.get("location") as string;
        const eventDate = new Date(eventDateString);
        const startTime = new Date(`${eventDateString}T${_startTime}`);
        const endTime = new Date(`${eventDateString}T${_endTime}`);
        const imageFile = formData.get("imageFile") as File | null;

        if (!title || !location || !eventDate) {
            response.message = "Missing required fields: title, location, eventDate.";
            return NextResponse.json(response, { status: 400 });
        }
        const updateObject: any = {
            title, location, eventDate, startTime, endTime
        };

        if (imageFile) {
            const bytes = await imageFile.arrayBuffer();
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

            updateObject.imageUrl = uploadResponse.secure_url;
        }
        const updatedData = await Event.findByIdAndUpdate(
            id,
            updateObject,
            {
                runValidators: true,
            }
        );
        if (!updatedData) {
            response.message = "Event not found.";
            return NextResponse.json(response, { status: 404 });
        }

        response.success = true;
        response.message = "Event updated successfully.";
        response.data = true;

        return NextResponse.json(response, { status: 200 });

    }
    catch (error) {
        response.message = error instanceof Error ? error.message : "Internal server error";
        return NextResponse.json(response, { status: 500 });
    }
}