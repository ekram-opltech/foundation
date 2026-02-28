import { connectDB } from "@/app/lib/mongodb";
import { IApiResponse } from "@/app/models/api-response";
import { NextResponse } from "next/server";
import Volunteer from "@/app/models/volunteer";
import mongoose from "mongoose";
import cloudinary from "@/app/lib/cloudinary";


export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
    const response: IApiResponse = { success: false, message: "", data: null };
    const { id } = await context.params;
    try {
        await connectDB();
        const data = await Volunteer.findById(id);
        if (!data) {
            response.message = "Volunteer not found.";
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

        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const post = formData.get("post") as string;
        const facebookUrl = formData.get("facebookUrl") as string;
        const twitterUrl = formData.get("twitterUrl") as string;
        const instaUrl = formData.get("instaUrl") as string;
        const youtubeUrl = formData.get("youtubeUrl") as string;
        const imageFile = formData.get("imageFile") as File | null;

        if (!firstName || !lastName || !post) {
            response.message = "Missing required fields: firstName, lastName, post.";
            return NextResponse.json(response, { status: 400 });
        }
        const updateObject: any = {
            firstName,
            lastName,
            post,
            facebookUrl,
            twitterUrl,
            instaUrl,
            youtubeUrl,
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
        const updatedData = await Volunteer.findByIdAndUpdate(
            id,
            updateObject,
            {
                runValidators: true,
            }
        );
        if (!updatedData) {
            response.message = "volunter user not found.";
            return NextResponse.json(response, { status: 404 });
        }

        response.success = true;
        response.message = "volunter user updated successfully.";
        response.data = true;

        return NextResponse.json(response, { status: 200 });

    }
    catch (error) {
        response.message = error instanceof Error ? error.message : "Internal server error";
        return NextResponse.json(response, { status: 500 });
    }
}