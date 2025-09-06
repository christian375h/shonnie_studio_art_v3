// src/components/Footer.tsx
// The footer is also a reusable component. I've used Tailwind for layout and styling.
// I've replaced the Font Awesome icon classes with SVG icons for better performance and customization.

import Link from "next/link";
import { Facebook, Instagram, Mail, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-poppins mt-16 bg-gray-100 text-gray-600">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 py-8 text-center md:flex-row md:text-left">
        <div className="mb-6 md:mb-0">
          <ul className="space-y-1">
            <li className="font-semibold text-gray-800">Shonnie Schmidt</li>
            <li>shonnieart@gmail.com</li>
            <li>801-200-5363</li>
          </ul>
        </div>
        <div className="mb-6 flex items-center space-x-6 md:mb-0">
          <a
            href="https://www.facebook.com/Shonniestudioart"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-pink-600"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/shonniesart"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-pink-600"
          >
            <Instagram />
          </a>
          {/* FIX: Removed nested <a> tag */}
          <Link
            href="/contact"
            className="transition-colors hover:text-pink-600"
          >
            <Mail />
          </Link>
          <a
            href="https://www.linkedin.com/in/shonnie-schmidt-5a7752233/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-pink-600"
          >
            <Linkedin />
          </a>
        </div>
        <div>
          {/* FIX: Removed nested <a> tag */}
          <Link
            href="/faq"
            className="font-semibold text-gray-800 transition-colors hover:text-pink-600"
          >
            FAQ
          </Link>
        </div>
      </div>
      <div className="bg-gray-200 py-4 text-center text-sm text-gray-500">
        <p>Copyright © {currentYear} shonniestudioart</p>
      </div>
    </footer>
  );
};
