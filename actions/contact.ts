"use server"

import { sendContactEmail, type ContactFormData } from "@/lib/email"

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Send email using Resend
    const result = await sendContactEmail(formData)
    return result
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}
