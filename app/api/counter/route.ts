import { IApiResponse } from "@/app/models/api-response";
import { NextResponse } from "next/server";
import { ICounter } from "./type";
import { connectDB } from "@/app/lib/mongodb";
import Counter from "@/app/models/counter";

export async function POST(req: Request) {
    const response: IApiResponse = { success: false, message: "", data: null };
    try {
        const body: ICounter = await req.json();

        if (!body.title || !body.end || !body.icon || !body.suffix) {
            response.message = "Missing required fields: title, end, icon, and suffix are required.";
            return NextResponse.json(response, { status: 400 });
        }
        await connectDB();

        const newCounter = await Counter.create({
            title: body.title,
            end: body.end,
            icon: body.icon,
            suffix: body.suffix,
        });

        response.success = true;
        response.message = "Counter created successfully.";
        response.data = newCounter;
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
        const counters = await Counter.find();
        response.success = true;
        response.message = "Counters retrieved successfully.";
        response.data = counters;
        return NextResponse.json(response, { status: 200 });
    }
    catch (error) {
        response.message = "An error occurred while retrieving counters.";
        return NextResponse.json(response, { status: 500 });
    }
}