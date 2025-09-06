import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "./components/AnimatedSection";

// Placeholder image URLs. Assumes your assets are in the `public/assets` folder.
const pencilDrawingUrl = "/assets/pencil-drawing.jpg";
const shonnieProfileUrl = "/assets/shonnie-profile.jpg";

const HomePage = () => {
  return (
    // Note: The <Header> wrapper is gone. This is now rendered inside the layout.
    <>
      {/* Introduction Section */}
      <section className="border-b border-pink-100 bg-pink-50 py-16 text-center md:py-24">
        <AnimatedSection>
          <div className="container mx-auto px-4">
            <h1 className="font-merriweather mb-4 text-4xl font-bold text-gray-800 md:text-6xl">
              SHONNIE'S STUDIO OF ART
            </h1>
            <p className="font-poppins text-xl text-pink-600 md:text-2xl">
              Traveling Artist
            </p>

            <div className="mx-auto mt-12 max-w-2xl rounded-lg bg-white p-8 shadow-lg">
              <h2 className="font-poppins mb-4 text-3xl font-bold text-gray-800">
                Your first class is FREE on me!
              </h2>
              <div>
                <p className="mb-2 text-lg font-semibold text-gray-700">
                  Utah Locations
                </p>
                <ul className="flex justify-center space-x-6 text-gray-600">
                  <li>Bountiful</li>
                  <li>Millcreek</li>
                  <li>Virtual</li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-gray-700">
              <Link
                href="/events"
                className="font-semibold text-pink-600 hover:underline"
              >
                Schedule Today
              </Link>{" "}
              for your event, party or special occasion, sign up for paint
              night, face painting or glitter tattoos and decorative body art.
            </p>
          </div>

          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src={pencilDrawingUrl}
                  alt="A detailed pencil drawing of an eye"
                  width={600}
                  height={750}
                  className="h-auto w-full"
                />
              </div>
            </div>
            <div className="w-full space-y-4 text-base leading-relaxed text-gray-600 lg:w-1/2">
              <p>
                I am a traveling artist that can bring art right to your home. I
                focus to suit all ages, interest and needs in developing art
                skills. The main goal is to not only to create beautiful art
                work, but to bring excitement and understanding.
              </p>
              <p>
                I educated student to achieve success and find a passion for
                their talent. Many students not only learn the basics, but how
                to thrive and perform in the art world. As we go through the 7
                elements of art each week, I involve all sorts of education,
                from science, math to history and art.
              </p>
              <p>
                Classes involves 10 to 15 minutes of educating and introducing
                one specific element for each lesson. A brief summary of
                ancient, past and present artist are included in the
                presentation on techniques, in line with the element being
                taught. The last 30 minutes to an hour, implements what's being
                applied for that day. I provide sample instructions, training
                exercises, fun activities, art design and final projects.
              </p>
              <p>
                Students will also have the wonderful opportunity participating
                in the art show exhibit at the end of the year. Along with a
                options to sell their art work at the online art gallery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins mb-12 text-center text-4xl font-bold text-gray-800">
            Your Instructor
          </h2>
          <div className="flex flex-col items-center gap-12 rounded-lg bg-white p-8 shadow-xl md:flex-row md:p-12">
            <div className="space-y-4 leading-relaxed text-gray-600 md:w-2/3">
              <p>
                I have been doing art since i was 13 years old and have enjoyed
                it ever since. I started at Wasatch Junior High and through the
                years attended the Peterson Art Center. I have won several
                awards from participating many art shows such as Hogle Zoo,
                Davis County Fair, Granite Furniture and in my younger years
                Wasatch Junior High.
              </p>
              <p>
                I have taught classes for the disabled through the Utah Food
                bank and for Davis County and Salt Lake areas. It has always
                been such a passion for me and I am excited to continue success
                with my students.
              </p>
            </div>
            <div className="flex w-full justify-center md:w-1/3">
              <div className="h-64 w-64 overflow-hidden rounded-full shadow-2xl">
                <Image
                  src={shonnieProfileUrl}
                  alt="your instructor Shonnie"
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
