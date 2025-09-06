// src/app/(site)/contact/page.tsx

import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

const ContactPage = () => {
  // The <Layout> wrapper has been removed.
  // The root layout in src/app/layout.tsx now handles the Header automatically.
  return (
    <>
      {/* Introduction Section */}
      <section className="border-b border-pink-100 bg-pink-50 py-16 text-center md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-merriweather text-4xl font-bold text-gray-800 md:text-6xl">
            GET IN TOUCH
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Left Side: Contact Info */}
            <div className="w-full rounded-lg bg-white p-8 shadow-lg lg:w-1/2">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">
                Contact Information
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li>801-200-5363 (Accepts Calls or Texts)</li>
                <li>shonnieart@gmail.com</li>
                <li className="flex items-center gap-2">
                  Message me through
                  <a
                    href="https://www.facebook.com/Shonniestudioart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="Facebook"
                  >
                    <Facebook />
                  </a>
                  or
                  <a
                    href="https://www.instagram.com/shonniesart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800"
                    aria-label="Instagram"
                  >
                    <Instagram />
                  </a>
                </li>
              </ul>
              <div className="mt-8 flex justify-center gap-4">
                <div className="relative h-40 w-40">
                  <Image
                    src="/assets/facebook-qr.png"
                    alt="Facebook QR code"
                    fill={true}
                    className="object-contain"
                  />
                </div>
                <div className="relative h-40 w-40">
                  <Image
                    src="/assets/ig-shonniesart-qr.png"
                    alt="Instagram QR code"
                    fill={true}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full rounded-lg bg-white p-8 shadow-lg lg:w-1/2">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">
                Email the Instructor
              </h2>
              {/* This form can be updated to use a Server Action for modern handling */}
              <form className="space-y-6">
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex-1">
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-pink-500 focus:ring-pink-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-pink-500 focus:ring-pink-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    maxLength={500}
                    placeholder="Message"
                    rows={6}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-pink-500 focus:ring-pink-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-pink-600 px-6 py-3 font-bold text-white transition-colors hover:bg-pink-700 focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:outline-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
