"use client";

import { useEffect, useActionState } from "react"; // Changed this line
import { useFormStatus } from "react-dom"; // Changed this line
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

import { sendEmail, type FormState } from "src/app/actions/sendEmail";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { Textarea } from "src/components/ui/textarea";

// A dedicated component for the submit button to manage loading state
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Sending..." : "Submit"}
    </Button>
  );
}

const ContactPage = () => {
  const initialState: FormState = { message: "" };
  const [state, formAction] = useActionState(sendEmail, initialState); // Changed this line

  // Effect to show toast notifications based on the server action's response
  useEffect(() => {
    if (state.message) {
      if (state.error) {
        toast.error(state.message);
      } else {
        toast.success(state.message);
        // Reset the form on successful submission
        (document.getElementById("contact-form") as HTMLFormElement)?.reset();
      }
    }
  }, [state]);

  return (
    <>
      {/* This component will render the toast notifications */}
      <Toaster position="bottom-center" />

      <section className="border-b border-pink-100 bg-pink-50 py-16 text-center md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold md:text-6xl">GET IN TOUCH</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-2">
          {/* Left Side: Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-2 text-gray-700">
                <li>801-200-5363 (Accepts Calls or Texts)</li>
                <li>shonnieart@gmail.com</li>
              </ul>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/Shonniestudioart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/shonniesart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/shonnie-schmidt-5a7752233/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <Linkedin />
                </a>
              </div>
              <div className="flex justify-center gap-4 pt-4">
                <Image
                  src="/assets/facebook-qr.png"
                  alt="Facebook QR code"
                  width={150}
                  height={150}
                />
                <Image
                  src="/assets/ig-shonniesart-qr.png"
                  alt="Instagram QR code"
                  width={150}
                  height={150}
                />
              </div>
            </CardContent>
          </Card>

          {/* Right Side: Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Email the Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <form id="contact-form" action={formAction} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Question about classes"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    required
                  />
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
