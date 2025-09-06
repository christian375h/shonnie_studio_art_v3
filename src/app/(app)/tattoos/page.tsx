import Image from "next/image";

const TattoosPage = () => {
  return (
    <>
      <section className="border-b border-pink-100 bg-pink-50 py-16 text-center md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-merriweather text-4xl font-bold text-gray-800 md:text-6xl">
            GLITTER TATTOOS
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 text-center">
          <div className="relative h-48 w-full max-w-md">
            <Image
              src="/assets/glittertattoos/tinseltoo.png"
              alt="Tinseltoo Tattoos Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="font-poppins mt-8 text-3xl font-semibold text-gray-700">
            Coming Soon!
          </p>
        </div>
      </section>
    </>
  );
};

export default TattoosPage;
