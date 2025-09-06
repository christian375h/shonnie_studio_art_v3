"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

// This is a helper component for mobile navigation links
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={`block rounded-md px-4 py-2 transition-colors ${
          isActive ? "bg-pink-100 text-pink-700" : "hover:bg-gray-100"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

// This component no longer accepts or renders `children`.
// It is now a pure UI component for the header.
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const desktopLinkClasses = (path: string) =>
    `font-semibold hover:text-pink-600 transition-colors ${
      pathname === path ? "text-pink-600" : "text-gray-700"
    }`;

  return (
    <header className="font-poppins sticky top-0 z-50 bg-white shadow-md">
      {/* Desktop Navigation */}
      <div className="container mx-auto hidden h-20 items-center justify-center px-4 lg:flex">
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <Link href="/" className={desktopLinkClasses("/")}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/events" className={desktopLinkClasses("/events")}>
                SCHEDULE EVENTS
              </Link>
            </li>
            <li>
              <Link href="/classes" className={desktopLinkClasses("/classes")}>
                CLASS OPTIONS
              </Link>
            </li>
            <li>
              <Link href="/tattoos" className={desktopLinkClasses("/tattoos")}>
                GLITTER TATTOOS
              </Link>
            </li>
            <li>
              <Link href="/gallery" className={desktopLinkClasses("/gallery")}>
                ART GALLERY
              </Link>
            </li>
            <li>
              <Link href="/contact" className={desktopLinkClasses("/contact")}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div className="container mx-auto px-4 lg:hidden">
        <div className="flex h-16 items-center justify-between">
          <div className="font-merriweather truncate text-lg font-bold text-gray-800">
            <Link href="/">SHONNIE'S STUDIO OF ART</Link>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {/* Mobile Menu Links */}
        {isMenuOpen && (
          <nav className="pb-4" onClick={() => setIsMenuOpen(false)}>
            <ul className="flex flex-col space-y-2">
              <NavLink href="/">HOME</NavLink>
              <NavLink href="/events">EVENTS</NavLink>
              <NavLink href="/classes">CLASSES</NavLink>
              <NavLink href="/tattoos">TATTOOS</NavLink>
              <NavLink href="/gallery">GALLERY</NavLink>
              <NavLink href="/contact">CONTACT</NavLink>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
