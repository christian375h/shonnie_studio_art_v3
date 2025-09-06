import Image from "next/image";
import Link from "next/link";

// Data for Shonnie's artworks
const shonnieArtworks = [
  { src: "/assets/shonnie artwork/shonnie-1.jpg", alt: "Mother and Daughter" },
  { src: "/assets/shonnie artwork/shonnie-2.jpg", alt: "Monarch" },
  { src: "/assets/shonnie artwork/shonnie-3.jpg", alt: "Elk in the Wild" },
  { src: "/assets/shonnie artwork/shonnie-4.jpg", alt: "Fancy Portrait" },
  { src: "/assets/shonnie artwork/shonnie-5.jpg", alt: "Delicate Arch" },
  { src: "/assets/shonnie artwork/shonnie-6.jpg", alt: "USA! USA!" },
  { src: "/assets/shonnie artwork/shonnie-8.jpg", alt: "Hands" },
];

// Data for student artworks
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
];

// A reusable component to render an image gallery grid
const ImageGrid = ({ images }: { images: { src: string; alt: string }[] }) => (
  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
    {images.map((image, index) => (
      <div
        key={index}
        className="group aspect-w-1 aspect-h-1 relative overflow-hidden rounded-lg shadow-lg"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    ))}
  </div>
);

const GalleryPage = () => {
  return (
    <>
      <section className="border-b border-pink-100 bg-pink-50 py-16 text-center md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-merriweather text-4xl font-bold text-gray-800 md:text-6xl">
            ART GALLERY
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto space-y-16 px-4">
          <div>
            <h2 className="font-merriweather mb-8 text-center text-3xl font-bold text-gray-800">
              Shonnie's Artworks
            </h2>
            <ImageGrid images={shonnieArtworks} />
            <p className="mt-8 text-center text-lg text-gray-600">
              For more, visit{" "}
              <a
                href="https://www.shonnieart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pink-600 hover:underline"
              >
                my personal art page
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-merriweather mb-8 text-center text-3xl font-bold text-gray-800">
              Student Artworks
            </h2>
            <ImageGrid images={studentArtworks} />
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
