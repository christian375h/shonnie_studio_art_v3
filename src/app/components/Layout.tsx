// src/components/Layout.tsx
// This component wraps every page, ensuring the Header and Footer are always present.
// It's a standard pattern in Next.js/T3 apps.

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-poppins flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
