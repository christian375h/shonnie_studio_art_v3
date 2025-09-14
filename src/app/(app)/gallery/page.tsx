import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";

// Data for image galleries
const shonnieArtworks = [
  { src: "/assets/shonnie artwork/shonnie-1.jpg", alt: "Mother and Daughter" },
  { src: "/assets/shonnie artwork/shonnie-2.jpg", alt: "Monarch" },
  { src: "/assets/shonnie artwork/shonnie-3.jpg", alt: "Elk in the Wild" },
  { src: "/assets/shonnie artwork/shonnie-4.jpg", alt: "Fancy Portrait" },
  { src: "/assets/shonnie artwork/shonnie-5.jpg", alt: "Delicate Arch" },
  { src: "/assets/shonnie artwork/shonnie-6.jpg", alt: "USA! USA!" },
  { src: "/assets/shonnie artwork/shonnie-8.jpg", alt: "Hands" },
];

const studentArtworks = [
  { src: "/assets/studentsartwork/student-example-1.jpg", alt: "Wolf" },
  { src: "/assets/studentsartwork/student-example-2.jpg", alt: "Tree" },
  { src: "/assets/studentsartwork/student-example-3.jpg", alt: "Birds" },
  { src: "/assets/studentsartwork/student-example-4.jpg", alt: "Beach" },
  { src: "/assets/studentsartwork/student-example-5.jpg", alt: "Eye" },
  { src: "/assets/studentsartwork/student-example-6.jpg", alt: "Love You!" },
  { src: "/assets/studentsartwork/student-example-7.jpg", alt: "Macaw" },
  { src: "/assets/studentsartwork/student-example-23.JPEG", alt: "Snail" },
  { src: "/assets/studentsartwork/student-example-11.jpg", alt: "Forest" },
  { src: "/assets/studentsartwork/student-example-27.JPEG", alt: "Pyramid" },
  { src: "/assets/studentsartwork/student-example-12.jpg", alt: "Forest 2" },
  { src: "/assets/studentsartwork/student-example-28.JPEG", alt: "Tunnel" },
  { src: "/assets/studentsartwork/student-example-13.jpg", alt: "Triangles" },
  { src: "/assets/studentsartwork/student-example-14.jpg", alt: "Apple" },
  { src: "/assets/studentsartwork/student-example-15.jpg", alt: "Tortoise" },
  { src: "/assets/studentsartwork/student-example-16.jpg", alt: "Cherries" },
  {
    src: "/assets/studentsartwork/student-example-18.jpg",
    alt: "Vanishing Point",
  },
  { src: "/assets/studentsartwork/student-example-24.JPEG", alt: "Eye Study" },
  { src: "/assets/studentsartwork/student-example-19.jpg", alt: "Flower" },
  { src: "/assets/studentsartwork/student-example-20.jpg", alt: "Rose 2" },
  { src: "/assets/studentsartwork/student-example-21.jpg", alt: "Feet" },
  { src: "/assets/studentsartwork/student-example-22.jpg", alt: "Wolves" },
  {
    src: "/assets/studentsartwork/student-example-25.JPEG",
    alt: "Mischevious",
  },
  {
    src: "/assets/studentsartwork/student-example-26.JPEG",
    alt: "Checkerboard",
  },
  {
    src: "/assets/studentsartwork/student-example-29.JPEG",
    alt: "Hands Study",
  },
  {
    src: "/assets/studentsartwork/soccer-painting.JPG",
    alt: "Tom Playing Soccer",
  },
];

const GalleryPage = () => {
  return (
    <>
      <section className="border-b border-pink-100 bg-pink-50 py-16 text-center md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold md:text-6xl">ART GALLERY</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto space-y-12 px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-3xl">
                Shonnie's Artworks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {shonnieArtworks.map((artwork) => (
                  <div
                    key={artwork.src}
                    className="group overflow-hidden rounded-lg shadow-lg"
                  >
                    <Image
                      src={artwork.src}
                      alt={artwork.alt}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center">
                For more, visit{" "}
                <a
                  href="https://www.shonnieart.com"
                  className="font-semibold text-pink-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  my art page
                </a>
                .
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-3xl">
                Student Artworks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {studentArtworks.map((artwork) => (
                  <div
                    key={artwork.src}
                    className="group overflow-hidden rounded-lg shadow-lg"
                  >
                    <Image
                      src={artwork.src}
                      alt={artwork.alt}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
