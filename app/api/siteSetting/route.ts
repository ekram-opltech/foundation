import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import SiteSetting from "../../models/sitesetting";
import { IApiResponse } from "@/app/models/api-response";
import { ISiteSetting } from "./type";
import cloudinary from "@/app/lib/cloudinary";

export async function POST(req: Request) {

    const response: IApiResponse = { success: false, message: "", data: null };

    try {
        const formData = await req.formData();

        const body: ISiteSetting = {
            brandName: formData.get("brandName") as string,
            brandLogo: formData.get("brandLogo") as File,
            contactEmail: formData.get("contactEmail") as string,
            contactPhone: formData.get("contactPhone") as string,
            address: formData.get("address") as string,
        };

        let brandLogoUrl = "";

        if (body.brandLogo) {
            const bytes = await body.brandLogo.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const uploadResponse = await new Promise<any>((resolve, reject) => {
                cloudinary.uploader.upload_stream(
                    { folder: "brandLogos" },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                ).end(buffer);
            });

            brandLogoUrl = uploadResponse.secure_url;
        }

        const { contactEmail, contactPhone } = body;
        const trimmedEmail = contactEmail?.toLowerCase().trim();

        if (!trimmedEmail || !contactPhone) {
            response.message = "Contact email and phone required";
            return NextResponse.json(response, { status: 400 });
        }

        await connectDB();

        const updated = await SiteSetting.findOneAndUpdate(
            {},
            {
                brandName: body.brandName,
                contactEmail: contactEmail.toLowerCase().trim(),
                contactPhone,
                address: body.address,
                ...(brandLogoUrl && { brandLogo: brandLogoUrl }),
            },
            { new: true, upsert: true }
        );

        response.success = true;
        response.data = updated;
        response.message = "Site setting updated successfully";

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
        const siteSetting = await SiteSetting.findOne({});
        if (!siteSetting) {
            response.success = false;
            response.message = "Site setting not found";
            return NextResponse.json(response, { status: 404 });
        }
        response.success = true;
        response.data = siteSetting;
        response.message = "Site setting fetched successfully";
        return NextResponse.json(response, { status: 200 });

    } catch (error) {
        response.success = false;
        response.message = "Internal server error";
        return NextResponse.json(response, { status: 500 });
    }
}