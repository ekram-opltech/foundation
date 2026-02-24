import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import { IApiResponse } from "@/app/models/api-response";
import { IRegisterUser } from "./type";
import cloudinary from "@/app/lib/cloudinary";

export async function POST(req: Request) {

    const response: IApiResponse = { success: false, message: "", data: null };

    try {
        const formData = await req.formData();

        const body: IRegisterUser = {
            username: formData.get("username") as string,
            password: formData.get("password") as string,
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            avatar: formData.get("avatar") as File,
            designation: formData.get("designation") as string,
            description: formData.get("description") as string,
        };

        let avatarUrl = "";

        if (body.avatar) {
            const bytes = await body.avatar.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const uploadResponse = await new Promise<any>((resolve, reject) => {
                cloudinary.uploader.upload_stream(
                    { folder: "avatars" },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result);
                    }
                ).end(buffer);
            });

            avatarUrl = uploadResponse.secure_url;
        }

        const { username, password } = body;
        const trimmedUsername = username?.toLowerCase().trim();

        if (!trimmedUsername || !password) {
            response.message = "Username and password required";
            return NextResponse.json(response, { status: 400 });
        }

        await connectDB();

        const existingUser = await User.findOne({ username: trimmedUsername });

        if (existingUser) {
            response.message = "User already exists";
            return NextResponse.json(response, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // await User.create({
        //     username: trimmedUsername,
        //     password: hashedPassword,
        //     firstName: body.firstName,
        //     lastName: body.lastName,
        //     avatar: avatarUrl,
        //     designation: body.designation,
        //     description: body.description,
        // });

        response.success = true;
        response.message = "User registered successfully";
        return NextResponse.json(response, { status: 201 });

    } catch (error) {
        response.success = false;
        response.message = "Internal server error";
        return NextResponse.json(response, { status: 500 });
    }
}