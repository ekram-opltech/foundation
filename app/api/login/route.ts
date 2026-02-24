import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongodb";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import { ILoginUser } from "./type";
import { IApiResponse } from "@/app/models/api-response";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {

    let response: IApiResponse = { success: false, message: "", data: null };

    try {
        const body: ILoginUser = await req.json();

        await connectDB();

        const user = await User.findOne({ username: body.username }).select("+password");;
        if (!user) {
            response.message = "Invalid credentials";
            return NextResponse.json(response, { status: 400 });
        }

        const isMatch = await bcrypt.compare(body.password, user.password);

        if (!isMatch) {
            response.message = "Invalid credentials";
            return NextResponse.json(response, { status: 400 });
        }
        const token = jwt.sign(
            {
                userId: user._id,
                username: user.username,
                role: user.role,
            },
            process.env.JWT_SECRET!,
            { expiresIn: "7d" }
        );
        (await cookies()).set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });
        response.success = true;
        response.data = { token };
        response.message = "Login successful";
        return NextResponse.json(response);
    } catch (error) {
        console.error("Login error:", error);
        response.success = false;
        response.message = error instanceof Error ? error.message : "Internal server error";
        return NextResponse.json(response, { status: 500 });
    }
}