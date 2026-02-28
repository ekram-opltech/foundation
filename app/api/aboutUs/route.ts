import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import { IApiResponse } from "@/app/models/api-response";
import { IAboutUs } from "./type";
import cloudinary from "@/app/lib/cloudinary";
import AboutUs from "@/app/models/aboutUs";

export async function POST(req: Request) {

    const response: IApiResponse = { success: false, message: "", data: null };

    try {
        const formData = await req.formData();

        const body: IAboutUs = {
            title: formData.get("title") as string,
            subTitle: formData.get("subTitle") as string,
            description: formData.get("description") as string,
            imageFile: formData.get("imageFile") as File,
        };

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

        const updated = await AboutUs.findOneAndUpdate(
            {},
            {
                title: body.title,
                subTitle: body.subTitle,
                description: body.description,
                imageUrl: imageUrl,
            },
            { new: true, upsert: true }
        );

        response.success = true;
        response.data = updated;
        response.message = "About Us updated successfully";

        return NextResponse.json(response, { status: 200 });

    } catch (error) {
        response.success = false;
        response.message = "Internal server error";
        return NextResponse.json(response, { status: 500 });
    }
}

export async function GET() {
    const response: IApiResponse = { success: false, message: "", data: null };
    try {
        await connectDB();
        const aboutUs = await AboutUs.findOne({});
        if (!aboutUs) {
            response.success = false;
            response.message = "About Us not found";
            return NextResponse.json(response, { status: 404 });
        }
        response.success = true;
        response.data = aboutUs;
        response.message = "About Us fetched successfully";
        return NextResponse.json(response, { status: 200 });

    } catch (error) {
        response.success = false;
        response.message = "Internal server error";
        return NextResponse.json(response, { status: 500 });
    }
}