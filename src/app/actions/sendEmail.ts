"use server";

import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { z } from "zod";

const sesClient = new SESv2Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type FormState = {
  message: string;
  error?: boolean;
};

export async function sendEmail(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      error: true,
      message: "Please check your input and try again.",
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    const command = new SendEmailCommand({
      FromEmailAddress: process.env.SOURCE_EMAIL!,
      Destination: {
        ToAddresses: [process.env.SOURCE_EMAIL!, email],
      },
      Content: {
        Simple: {
          Subject: {
            Data: `New message from ${name}: ${subject}`,
            Charset: "UTF-8",
          },
          Body: {
            Text: {
              Data: `You received a new message from your website contact form.\n\nHere are the details:\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
              Charset: "UTF-8",
            },
          },
        },
      },
      ReplyToAddresses: [email], // So you can reply directly to the user
    });

    await sesClient.send(command);

    return {
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      error: true,
      message: "Something went wrong. Please try again later.",
    };
  }
}
