import { connectDB } from "@/app/lib/mongodb";
import { IApiResponse } from "@/app/models/api-response";
import { NextResponse } from "next/server";
import Counter from "@/app/models/counter";
import mongoose from "mongoose";


export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
    const response: IApiResponse = { success: false, message: "", data: null };
    const { id } = await context.params;
    try {
        await connectDB();
        const counter = await Counter.findById(id);
        if (!counter) {
            response.message = "Counter not found.";
            return NextResponse.json(response, { status: 404 });
        }

        response.success = true;
        response.data = counter;

        return NextResponse.json(response, { status: 200 });
    }
    catch (error) {
        response.message = "An error occurred while retrieving counters.";
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
        const body = await req.json();
        const { title, end, icon, suffix } = body;

        if (!title || !end || !icon || !suffix) {
            response.message = "Missing required fields: title, end, icon, suffix.";
            return NextResponse.json(response, { status: 400 });
        }
        const updatedCounter = await Counter.findByIdAndUpdate(
            id,
            { title, end, icon, suffix },
            {
                runValidators: true,
            }
        );
        if (!updatedCounter) {
            response.message = "Counter not found.";
            return NextResponse.json(response, { status: 404 });
        }

        response.success = true;
        response.message = "Counter updated successfully.";
        response.data = true;

        return NextResponse.json(response, { status: 200 });

    }
    catch (error) {
        response.message = error as string || "An error occurred while retrieving counter.";
        return NextResponse.json(response, { status: 500 });
    }
}