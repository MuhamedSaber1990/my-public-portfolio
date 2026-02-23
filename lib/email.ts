"use server";
import { Resend } from "resend";
import { env } from "@/env";
// Initialize Resend with your API key
const resend = new Resend(env.RESEND_API_KEY);

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactEmail(formData: ContactFormData) {
  const { name, email, subject, message } = formData;

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "muhamed.saber.1990@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
      `,
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h1 style="color: #7c3aed; font-size: 24px; margin-bottom: 24px;">New Contact Form Submission</h1>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <p><strong>Message:</strong></p>
  <div style="background-color: #f4f4f5; padding: 16px; border-radius: 4px; margin-top: 8px;">
    ${message.replace(/\n/g, "<br>")}
  </div>
  <p style="margin-top: 24px; color: #71717a; font-size: 14px;">This email was sent from your portfolio contact form.</p>
</div>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        message: "Failed to send your message. Please try again.",
      };
    }

    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
