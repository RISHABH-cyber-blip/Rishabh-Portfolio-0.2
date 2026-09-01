import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { success: false, error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      console.error("Missing RESEND_FROM_EMAIL environment variable");
      return NextResponse.json(
        { success: false, error: "Sender email is not configured." },
        { status: 500 }
      );
    }

    const resend = getResendClient();
    if (!resend) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { success: false, error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL || "mishracoding9@gmail.com"],
      replyTo: email,
      subject: `New portfolio contact message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    console.log("Resend email sent:", result);

    return NextResponse.json({ success: true, message: "Email sent successfully." });
  } catch (error: any) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Something went wrong while sending the email.",
      },
      { status: 500 }
    );
  }
}