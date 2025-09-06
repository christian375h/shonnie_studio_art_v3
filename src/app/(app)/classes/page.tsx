"use client";

import { useState } from "react";
import Link from "next/link";

type Tab =
  | "arts-crafts"
  | "drawing-lessons"
  | "painting-lessons"
  | "private-lessons";

// A reusable component for the common "Lesson Subjects" section
const LessonSubjects = () => (
  <div>
    <h3 className="mb-4 text-xl font-semibold text-gray-700">
      Lesson Subjects
    </h3>
    <div className="grid grid-cols-1 gap-8 text-sm text-gray-600 sm:grid-cols-2 md:grid-cols-4">
      <div>
        <h4 className="font-bold text-gray-800">Crafts</h4>
        <ul className="mt-1 list-disc pl-5">
          <li>Building & Creating</li>
          <li>Drawing & Designing</li>
          <li>Shaping & Coloring</li>
          <li>Painting</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-gray-800">Elements</h4>
        <ul className="mt-1 list-disc pl-5">
          <li>Lines & Shapes</li>
          <li>Texture & Space</li>
          <li>Color & Value</li>
          <li>Form</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-gray-800">Artists</h4>
        <ul className="mt-1 list-disc pl-5">
          <li>What makes an artist?</li>
          <li>Famous Artists</li>
          <li>Future & Present</li>
          <li>Past & Ancient</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-gray-800">Art History</h4>
        <ul className="mt-1 list-disc pl-5">
          <li>Prehistoric & Ancient</li>
          <li>Medieval & Renaissance</li>
          <li>Baroque & Realism</li>
          <li>Impressionism & Cubism</li>
        </ul>
      </div>
    </div>
  </div>
);

const ClassesPage = () => {
  const [activeTab, setActiveTab] = useState<Tab>("arts-crafts");

  const renderContent = () => {
    switch (activeTab) {
      case "arts-crafts":
        return <ArtsCraftsContent />;
      case "drawing-lessons":
        return <DrawingLessonsContent />;
      case "painting-lessons":
        return <PaintingLessonsContent />;
      case "private-lessons":
        return <PrivateLessonsContent />;
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
            CLASS OPTIONS
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto flex flex-col gap-8 px-4 lg:flex-row">
          <div className="flex w-full flex-col gap-4 lg:w-1/4">
            <TabButton tab="arts-crafts">Arts and Crafts</TabButton>
            <TabButton tab="drawing-lessons">Drawing Lessons</TabButton>
            <TabButton tab="painting-lessons">Painting Lessons</TabButton>
            <TabButton tab="private-lessons">Private Lessons</TabButton>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="min-h-[500px] rounded-lg bg-white p-6 shadow-lg md:p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ArtsCraftsContent = () => (
  <div className="space-y-8">
    <div>
      <h2 className="font-merriweather text-3xl font-bold text-gray-800">
        Arts and Crafts
      </h2>
      <p className="text-lg text-pink-600">Ages 5 - 8</p>
    </div>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h3 className="mb-2 text-xl font-semibold text-gray-700">Pricing</h3>
        <ul className="list-disc space-y-2 pl-5 text-gray-600">
          <li>$65 per lesson</li>
          <li>$10 off each month for up-front payment</li>
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
        <h3 className="mb-2 text-xl font-semibold text-gray-700">Basic Info</h3>
        <ul className="list-disc space-y-2 pl-5 text-gray-600">
          <li>1-2 Lessons per week (45 mins each)</li>
          <li className="font-bold">In person only</li>
          <li>7 Students per lesson</li>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdxbGJMxj1IxTtR5vwCdXOY6Kn5RKoP5I6TLfvxyRgMiHeNWw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
            >
              Fill out the sign up sheet
            </a>
          </li>
        </ul>
      </div>
    </div>
    <LessonSubjects />
  </div>
);

const DrawingLessonsContent = () => (
  <div className="space-y-8">
    <div>
      <h2 className="font-merriweather text-3xl font-bold text-gray-800">
        Drawing Lessons
      </h2>
      <p className="text-lg text-pink-600">Ages 9 and up</p>
    </div>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h3 className="mb-2 text-xl font-semibold text-gray-700">Pricing</h3>
        <ul className="list-disc space-y-2 pl-5 text-gray-600">
          <li>$65 per lesson</li>
          <li>$10 off each month for up-front payment</li>
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
        <h3 className="mb-2 text-xl font-semibold text-gray-700">Basic Info</h3>
        <ul className="list-disc space-y-2 pl-5 text-gray-600">
          <li>1-2 Lessons per week (1 hour each)</li>
          <li>12 students per in-person lesson</li>
          <li>3 students per virtual lesson</li>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdxbGJMxj1IxTtR5vwCdXOY6Kn5RKoP5I6TLfvxyRgMiHeNWw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
            >
              Fill out the sign up sheet
            </a>
          </li>
        </ul>
      </div>
    </div>
    <LessonSubjects />
  </div>
);

const PaintingLessonsContent = () => (
  <div className="space-y-8">
    <div>
      <h2 className="font-merriweather text-3xl font-bold text-gray-800">
        Painting Lessons
      </h2>
      <p className="text-lg text-pink-600">Ages 12 and up</p>
    </div>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h3 className="mb-2 text-xl font-semibold text-gray-700">Pricing</h3>
        <ul className="list-disc space-y-2 pl-5 text-gray-600">
          <li>$65 per hour</li>
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
        <h3 className="mb-2 text-xl font-semibold text-gray-700">Basic Info</h3>
        <ul className="list-disc space-y-2 pl-5 text-gray-600">
          <li>1 Lesson per week (1 hour)</li>
          <li>15 students per in-person lesson</li>
          <li>6-15 students per virtual lesson</li>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdxbGJMxj1IxTtR5vwCdXOY6Kn5RKoP5I6TLfvxyRgMiHeNWw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
            >
              Fill out the sign up sheet
            </a>
          </li>
        </ul>
      </div>
    </div>
    <LessonSubjects />
  </div>
);

const PrivateLessonsContent = () => (
  <div className="space-y-8">
    <div>
      <h2 className="font-merriweather text-3xl font-bold text-gray-800">
        Private Lessons
      </h2>
      <p className="text-lg text-pink-600">All Ages</p>
    </div>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h3 className="mb-2 text-xl font-semibold text-gray-700">Pricing</h3>
        <ul className="list-disc space-y-2 pl-5 text-gray-600">
          <li>$85 per lesson</li>
          <li>$340 per month (4 weeks)</li>
          <li>Up-front payment discount offered</li>
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
        <h3 className="mb-2 text-xl font-semibold text-gray-700">Basic Info</h3>
        <ul className="list-disc space-y-2 pl-5 text-gray-600">
          <li>1 Lesson per week (1 hour)</li>
          <li>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdxbGJMxj1IxTtR5vwCdXOY6Kn5RKoP5I6TLfvxyRgMiHeNWw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
            >
              Fill out the sign up sheet
            </a>
          </li>
        </ul>
      </div>
    </div>
    <LessonSubjects />
  </div>
);

export default ClassesPage;
