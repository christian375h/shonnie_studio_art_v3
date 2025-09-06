import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "../styles/globals.css"; // Make sure you have a global CSS file for fonts, etc.
import { Merriweather, Poppins } from "next/font/google";

// Setup your fonts for the whole app
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Shonnie's Studio of Art",
  description: "Traveling Artist in Bountiful, Utah and surrounding areas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${merriweather.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
