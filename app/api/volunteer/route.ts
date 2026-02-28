import { IApiResponse } from "@/app/models/api-response";
import { NextResponse } from "next/server";
import { IVolunteer } from "./type";
import { connectDB } from "@/app/lib/mongodb";
import Volunteer from "@/app/models/volunteer";
import cloudinary from "@/app/lib/cloudinary";

export async function POST(req: Request) {
    const response: IApiResponse = { success: false, message: "", data: null };
    try {
        const formData = await req.formData();
        const body: IVolunteer = {
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            post: formData.get("post") as string,
            imageFile: formData.get("imageFile") as File,
            facebookUrl: formData.get("facebookUrl") as string,
            twitterUrl: formData.get("twitterUrl") as string,
            instaUrl: formData.get("instaUrl") as string,
            youtubeUrl: formData.get("youtubeUrl") as string,
        };

        if (!body.firstName || !body.lastName || !body.post) {
            response.message = "Missing required fields: firstName, lastName and post are required.";
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

        const _firstName = body.firstName.toLowerCase().trim();
        const _lastName = body.lastName.toLowerCase().trim();

        const isExist = await Volunteer.findOne({ firstName: _firstName, lastName: _lastName });

        if (isExist) {
            response.message = "volunteer already exists";
            return NextResponse.json(response, { status: 400 });
        }

        const newVolunterr = await Volunteer.create({
            firstName: _firstName,
            lastName: _lastName,
            post: body.post,
            imageUrl: imageUrl,
            facebookUrl: body.facebookUrl,
            twitterUrl: body.twitterUrl,
            instaUrl: body.instaUrl,
            youtubeUrl: body.facebookUrl,
        });

        response.success = true;
        response.message = "volunteer created successfully.";
        response.data = newVolunterr;

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

        const volunteers = await Volunteer.find();

        response.success = true;
        response.message = "volunteer retrieved successfully.";
        response.data = volunteers;
        return NextResponse.json(response, { status: 200 });
    }
    catch (error) {
        response.message = "An error occurred while retrieving counters.";
        return NextResponse.json(response, { status: 500 });
    }
}