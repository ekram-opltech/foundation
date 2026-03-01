import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { IContact } from "./type";
import { IApiResponse } from "@/app/models/api-response";

export async function POST(req: Request) {
    const response: IApiResponse = { success: false, message: "", data: null };
    try {
        const body: IContact = await req.json();
        if (!body.name || !body.email || !body.phone || !body.subject || !body.message) {
            response.success = false;
            response.message = "All fields are required";
            return NextResponse.json(response, { status: 400 })
        }
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: body.email,
            to: process.env.EMAIL_USER,
            subject: `New Contact Message from ${body.name}`,
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${body.name}</p>
                <p><strong>Email:</strong> ${body.email}</p>
                <p><strong>Mobile:</strong> ${body.phone}</p>
                <p><strong>Message:</strong></p>
                <p>${body.message}</p> `,
        });

        response.success = true;
        response.message = "Message sent successfully";

        return NextResponse.json(response, { status: 200 });
    }
    catch (error) {
        response.success = false;
        response.message = error instanceof Error ? error.message : "Failed to send message";
        return NextResponse.json(response, { status: 500 })
    }
}