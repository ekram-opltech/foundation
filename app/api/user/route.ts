import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { connectDB } from "@/app/lib/mongodb";
import User from "@/app/models/User";
import { IApiResponse } from "@/app/models/api-response";

export async function GET() {
  let response: IApiResponse = { success: false, message: "", data: null };
  try {
    const token = (await cookies()).get("token")?.value;

    if (!token) {
      response.message = "No token provided";
      return NextResponse.json(response, { status: 401 });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);

    await connectDB();

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      response.message = "User not found";
      return NextResponse.json(response, { status: 404 });
    }

    return NextResponse.json({ ...response, success: true, data: user });

  } catch (error) {
    response.message = error ? (error as any).message : "Error fetching user data";
    return NextResponse.json(response, { status: 500 });
  }
}