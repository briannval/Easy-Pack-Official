"use server";

import ContactEmail from "@/emails/emailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMail(
  name: String,
  email: String,
  phone: String,
  message: String
) {
  try {
    const { data, error } = await resend.emails.send({
      from: "easysupply@resend.dev",
      to: ["easypackpackaging@gmail.com"],
      subject: `Message from ${name}`,
      react: ContactEmail({ name, email, phone, message }),
    });
    if (error) {
      return JSON.parse(
        JSON.stringify(
          NextResponse.json({ error: error.message }, { status: 400 })
        )
      );
    }
    return JSON.parse(
      JSON.stringify(NextResponse.json({ data }, { status: 200 }))
    );
  } catch (e) {
    return JSON.parse(
      JSON.stringify(NextResponse.json({ e }, { status: 500 }))
    );
  }
}
