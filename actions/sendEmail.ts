"use server";

import ContactFormEmail from "@/email/ContactFormEmail";
import { getErrorMessage, isValid } from "@/lib/utils";
import { createElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  if (!isValid(message, 5000)) {
    return {
      error: "Invalid text message",
    };
  }
  if (!isValid(senderEmail, 500)) {
    return {
      error: "Invalid email input",
    };
  }
  let data;
  try {
    console.time("Email Send Time");
    await resend.emails.send({
      from: "Portfolio contact form <onboarding@resend.dev>",
      to: "v.bergstrom.dev@gmail.com",
      subject: "from portfolio contact form",
      replyTo: senderEmail,
      react: createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
    console.timeEnd("Email Send Time");
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
