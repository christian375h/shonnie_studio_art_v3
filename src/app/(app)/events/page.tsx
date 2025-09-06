"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Data for image galleries to make the component cleaner
const facePaintingImages = [
  {
    src: "/assets/facepainting/facepaint-example-1.jpg",
    alt: "Butterfly Purple",
  },
  {
    src: "/assets/facepainting/facepaint-example-2.jpg",
    alt: "Butterfly Blue",
  },
  { src: "/assets/facepainting/facepaint-example-3.jpg", alt: "Tiger" },
  { src: "/assets/facepainting/facepaint-example-4.jpg", alt: "Macaw" },
  { src: "/assets/facepainting/facepaint-example-5.jpg", alt: "Stitched Face" },
  { src: "/assets/facepainting/facepaint-example-6.jpg", alt: "Claw Marks" },
  { src: "/assets/facepainting/facepaint-example-7.jpg", alt: "Rainbow" },
  { src: "/assets/facepainting/facepaint-example-8.jpg", alt: "Witch Hat" },
];

const glitterTattooImages = [
  { src: "/assets/glittertattoos/tattoo-example-1.jpg", alt: "Lilly" },
  { src: "/assets/glittertattoos/tattoo-example-2.jpg", alt: "Pumpkin" },
  {
    src: "/assets/glittertattoos/tattoo-example-3.jpg",
    alt: "Purple Butterflies",
  },
  { src: "/assets/glittertattoos/tattoo-example-4.jpg", alt: "Black Widow" },
  { src: "/assets/glittertattoos/tattoo-example-5.jpg", alt: "Boo!" },
  { src: "/assets/glittertattoos/tattoo-example-6.jpg", alt: "Golden Skull" },
  {
    src: "/assets/glittertattoos/tattoo-example-7.jpg",
    alt: "Monarch Butterflies",
  },
  { src: "/assets/glittertattoos/tattoo-example-8.jpg", alt: "Football" },
];

const paintNightImages = [
  { src: "/assets/paintnightoptions/paint-night-1.jpg", alt: "Waterfall" },
  { src: "/assets/paintnightoptions/paint-night-2.jpg", alt: "Blossoms" },
  { src: "/assets/paintnightoptions/paint-night-3.jpg", alt: "Forest" },
  { src: "/assets/paintnightoptions/paint-night-4.jpg", alt: "Lillies" },
  { src: "/assets/paintnightoptions/paint-night-5.jpg", alt: "Delicate Arch" },
  {
    src: "/assets/paintnightoptions/paint-night-6.jpg",
    alt: "Falling Blossoms",
  },
  { src: "/assets/paintnightoptions/paint-night-7.jpg", alt: "Rainbow Moon" },
  { src: "/assets/paintnightoptions/paint-night-8.jpg", alt: "Jellyfish" },
];

type Tab = "face-painting" | "tattoos" | "paint-night";

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("face-painting");

  const renderContent = () => {
    switch (activeTab) {
      case "face-painting":
        return <FacePaintingContent />;
      case "tattoos":
        return <GlitterTattoosContent />;
      case "paint-night":
        return <PaintNightContent />;
      default:
        return null;
    }
  };

  const TabButton = ({
    tab,
    children,
  }: {
    tab: Tab;
    children: React.ReactNode;
  }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`w-full rounded-lg px-4 py-3 text-lg font-semibold transition-colors ${
        activeTab === tab
          ? "bg-pink-600 text-white shadow-md"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {children}
    </button>
  );

  return (
    <>
      <section className="border-b border-pink-100 bg-pink-50 py-16 text-center md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-merriweather text-4xl font-bold text-gray-800 md:text-6xl">
            SCHEDULE EVENTS
          </h1>
          <p className="font-poppins mt-2 text-xl text-pink-600">
            Great for Birthdays, Weddings, Reunions and Dances!
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto flex flex-col gap-8 px-4 lg:flex-row">
          <div className="flex w-full flex-col gap-4 lg:w-1/4">
            <TabButton tab="face-painting">Face Painting</TabButton>
            <TabButton tab="tattoos">Glitter Tattoos</TabButton>
            <TabButton tab="paint-night">Paint Nights</TabButton>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="rounded-lg bg-white p-6 shadow-lg md:p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ImageGallery = ({
  images,
}: {
  images: { src: string; alt: string }[];
}) => (
  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
    {images.map((image, index) => (
      <div
        key={index}
        className="relative aspect-square overflow-hidden rounded-lg shadow-md"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    ))}
  </div>
);

const FacePaintingContent = () => (
  <div>
    <h2 className="font-merriweather mb-6 text-3xl font-bold text-gray-800">
      Face Painting
    </h2>
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-gray-700">Pricing</h3>
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            <li>$100 - 1 hour for up to 20 kids</li>
            <li>$200 - 2 hours for up to 40 kids</li>
            <li>$300 - 3 hours for up to 60 kids</li>
            <li>Payment is due 24 hours before the session</li>
            <li>
              For more info, see the{" "}
              <Link href="/faq" className="text-pink-600 hover:underline">
                FAQ
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-pink-600 hover:underline">
                contact me
              </Link>
              .
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold text-gray-700">
            Basic Info
          </h3>
          <p className="text-gray-600">
            Schedule a time to have Shonnie come and paint faces at your party!
            All supplies are included.
          </p>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xl font-semibold text-gray-700">Examples</h3>
        <ImageGallery images={facePaintingImages} />
      </div>
    </div>
  </div>
);

const GlitterTattoosContent = () => (
  <div>
    <h2 className="font-merriweather mb-6 text-3xl font-bold text-gray-800">
      Glitter Tattoos
    </h2>
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-gray-700">Pricing</h3>
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            <li>$50 - 1 hour for up to 20 kids</li>
            <li>$100 - 2 hours for up to 40 kids</li>
            <li>$150 - 3 hours for up to 60 kids</li>
            <li>Payment is due 24 hours before the session</li>
            <li>
              For more info, see the{" "}
              <Link href="/faq" className="text-pink-600 hover:underline">
                FAQ
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-pink-600 hover:underline">
                contact me
              </Link>
              .
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold text-gray-700">
            Basic Info
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            <li>Have Shonnie come and apply her newly made glitter tattoos.</li>
            <li>Glitter Tattoos are not permanent.</li>
            <li>A variety of options are available.</li>
            <li>Supplies are included.</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xl font-semibold text-gray-700">Examples</h3>
        <ImageGallery images={glitterTattooImages} />
      </div>
    </div>
  </div>
);

const PaintNightContent = () => (
  <div>
    <h2 className="font-merriweather mb-6 text-3xl font-bold text-gray-800">
      Paint Nights
    </h2>
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-gray-700">Pricing</h3>
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            <li>$35 per person for groups of 1 - 15</li>
            <li>$30 per person for groups of 16+</li>
            <li>Payment is due 24 hours before the session starts</li>
            <li>
              For more info, see the{" "}
              <Link href="/faq" className="text-pink-600 hover:underline">
                FAQ
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-pink-600 hover:underline">
                contact me
              </Link>
              .
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold text-gray-700">
            Basic Info
          </h3>
          <ul className="list-disc space-y-2 pl-5 text-gray-600">
            <li>Group sessions held every month except August and December.</li>
            <li>Supplies are included.</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-xl font-semibold text-gray-700">
          Painting Options
        </h3>
        <ImageGallery images={paintNightImages} />
      </div>
    </div>
  </div>
);

export default EventsPage;
