"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { AnimatedSection } from "src/app/components/AnimatedSection";

const facePaintImages = [
  "/assets/facepainting/facepaint-example-1.jpg",
  "/assets/facepainting/facepaint-example-2.jpg",
  "/assets/facepainting/facepaint-example-3.jpg",
  "/assets/facepainting/facepaint-example-4.jpg",
  "/assets/facepainting/facepaint-example-5.jpg",
  "/assets/facepainting/facepaint-example-6.jpg",
  "/assets/facepainting/facepaint-example-7.jpg",
  "/assets/facepainting/facepaint-example-8.jpg",
  "/assets/facepainting/facepaint-example-9.jpg",
  "/assets/facepainting/facepaint-example-10.jpg",
  "/assets/facepainting/facepaint-example-11.jpg",
  "/assets/facepainting/facepaint-example-12.jpeg",
  "/assets/facepainting/facepaint-example-13.jpg",
  "/assets/facepainting/facepaint-example-14.jpg",
  "/assets/facepainting/facepaint-example-15.jpg",
  "/assets/facepainting/facepaint-example-16.jpg",
  "/assets/facepainting/facepaint-example-17.jpg",
  "/assets/facepainting/facepaint-example-18.jpg",
  "/assets/facepainting/facepaint-example-19.jpg",
  "/assets/facepainting/facepaint-example-20.jpg",
  "/assets/facepainting/facepaint-example-21.jpg",
];

const glitterTattooImages = [
  "/assets/glittertattoos/tattoo-example-1.jpg",
  "/assets/glittertattoos/tattoo-example-2.jpg",
  "/assets/glittertattoos/tattoo-example-3.jpg",
  "/assets/glittertattoos/tattoo-example-4.jpg",
  "/assets/glittertattoos/tattoo-example-5.jpg",
  "/assets/glittertattoos/tattoo-example-6.jpg",
  "/assets/glittertattoos/tattoo-example-7.jpg",
  "/assets/glittertattoos/tattoo-example-8.jpg",
  "/assets/glittertattoos/tattoo-example-9.jpg",
  "/assets/glittertattoos/tattoo-example-10.jpg",
  "/assets/glittertattoos/tattoo-example-11.jpg",
  "/assets/glittertattoos/tattoo-example-12.jpg",
  "/assets/glittertattoos/tattoo-example-13.jpg",
  "/assets/glittertattoos/tattoo-example-14.jpg",
  "/assets/glittertattoos/tattoo-example-15.jpg",
  "/assets/glittertattoos/tattoo-example-16.jpg",
  "/assets/glittertattoos/tattoo-example-17.jpg",
  "/assets/glittertattoos/tattoo-example-18.jpg",
  "/assets/glittertattoos/tattoo-example-19.jpg",
  "/assets/glittertattoos/tattoo-example-20.jpg",
  "/assets/glittertattoos/tattoo-example-21.jpg",
  "/assets/glittertattoos/butterflies.png",
  "/assets/glittertattoos/purple.png",
  "/assets/glittertattoos/flowers.png",
  "/assets/glittertattoos/flower.png",
];

const paintNightImages = [
  "/assets/paintnightoptions/paint-night-arches.png",
  "/assets/paintnightoptions/paint-night-easel.png",
  "/assets/paintnightoptions/paint-night-mountains.png",
  "/assets/paintnightoptions/paint-night-green.png",
  "/assets/paintnightoptions/paint-night-1.jpg",
  "/assets/paintnightoptions/paint-night-2.jpg",
  "/assets/paintnightoptions/paint-night-3.jpg",
  "/assets/paintnightoptions/paint-night-4.jpg",
  "/assets/paintnightoptions/paint-night-5.jpg",
  "/assets/paintnightoptions/paint-night-6.jpg",
  "/assets/paintnightoptions/paint-night-7.jpg",
  "/assets/paintnightoptions/paint-night-8.jpg",
  "/assets/paintnightoptions/paint-night-9.jpg",
  "/assets/paintnightoptions/paint-night-10.jpg",
  "/assets/paintnightoptions/paint-night-11.jpg",
  "/assets/paintnightoptions/paint-night-12.jpg",
  "/assets/paintnightoptions/paint-night-13.jpg",
  "/assets/paintnightoptions/paint-night-14.jpg",
  "/assets/paintnightoptions/paint-night-15.jpg",
  "/assets/paintnightoptions/paint-night-16.jpg",
  "/assets/paintnightoptions/paint-night-17.jpg",
  "/assets/paintnightoptions/paint-night-18.jpg",
  "/assets/paintnightoptions/paint-night-19.jpg",
  "/assets/paintnightoptions/paint-night-20.jpg",
  "/assets/paintnightoptions/paint-night-21.jpg",
  "/assets/paintnightoptions/paint-night-22.jpg",
  "/assets/paintnightoptions/paint-night-23.jpg",
  "/assets/paintnightoptions/paint-night-tables.png",
];

// Reusable component for image galleries
const ImageGallery = ({ images }: { images: string[] }) => (
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
    {images.map((src, index) => (
      <div key={index} className="overflow-hidden rounded-lg shadow-md">
        <Image
          src={src}
          alt={`Gallery image ${index + 1}`}
          width={200}
          height={200}
          className="h-full w-full object-cover transition-transform hover:scale-110"
        />
      </div>
    ))}
  </div>
);

const EventsPage = () => {
  const [facePaintCount, setFacePaintCount] = useState(20);
  const [glitterTattooCount, setGlitterTattooCount] = useState(20);
  const [paintNightCount, setPaintNightCount] = useState(1);

  return (
    <>
      <section className="border-b border-pink-100 bg-pink-50 py-16 text-center md:py-20">
        <AnimatedSection>
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold md:text-6xl">SCHEDULE EVENTS</h1>
            <p className="font-poppins mt-2 text-lg text-pink-700">
              Great for Birthdays, Weddings, Reunions and Dances!
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="face-painting" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
              <TabsTrigger value="face-painting">Face Painting</TabsTrigger>
              <TabsTrigger value="tattoos">Glitter Tattoos</TabsTrigger>
              <TabsTrigger value="paint-night">Paint Nights</TabsTrigger>
            </TabsList>

            <TabsContent value="face-painting" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Face Painting</CardTitle>
                </CardHeader>
                <AnimatedSection>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle>Pricing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc space-y-2 pl-5">
                            <li>$100 - 1 hour for up to 20 kids</li>
                            <li>$200 - 2 hours for up to 40 kids</li>
                            <li>$300 - 3 hours for up to 60 kids</li>
                            <li>$400 - 4 hours for up to 80 kids</li>
                            <li>$500 - 5 hours for up to 100 kids</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Schedule Now</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p>
                            Schedule a time for Shonnie to paint faces at your
                            party! Supplies included.
                          </p>
                          <div className="flex items-center gap-4">
                            <Label htmlFor="face-paint-count">
                              Party Size (up to)
                            </Label>
                            <Input
                              id="face-paint-count"
                              type="number"
                              value={facePaintCount}
                              onChange={(e) =>
                                setFacePaintCount(Number(e.target.value))
                              }
                              min="20"
                              step="20"
                              className="w-24"
                            />
                          </div>
                          <Button className="w-full">
                            Schedule Face Painting
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Examples</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ImageGallery images={facePaintImages} />
                      </CardContent>
                    </Card>
                  </CardContent>
                </AnimatedSection>
              </Card>
            </TabsContent>

            {/* Glitter Tattoos Content */}
            <TabsContent value="tattoos" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Glitter Tattoos</CardTitle>
                </CardHeader>
                <AnimatedSection>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle>Pricing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc space-y-2 pl-5">
                            <li>$50 - 1 hour for up to 20 kids</li>
                            <li>$100 - 2 hours for up to 40 kids</li>
                            <li>$150 - 3 hours for up to 60 kids</li>
                            <li>$200 - 4 hours for up to 80 kids</li>
                            <li>$250 - 5 hours for up to 100 kids</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Schedule Now</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p>
                            Have Shonnie come and apply her newly made glitter
                            tattoos. A variety of options are available and
                            supplies are included.
                          </p>
                          <div className="flex items-center gap-4">
                            <Label htmlFor="glitter-tattoo-count">
                              Party Size (up to)
                            </Label>
                            <Input
                              id="glitter-tattoo-count"
                              type="number"
                              value={glitterTattooCount}
                              onChange={(e) =>
                                setGlitterTattooCount(Number(e.target.value))
                              }
                              min="20"
                              step="20"
                              className="w-24"
                            />
                          </div>
                          <Button className="w-full">
                            Schedule Glitter Tattoos
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Examples</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ImageGallery images={glitterTattooImages} />
                      </CardContent>
                    </Card>
                  </CardContent>
                </AnimatedSection>
              </Card>
            </TabsContent>

            {/* Paint Night Content */}
            <TabsContent value="paint-night" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Paint Nights</CardTitle>
                </CardHeader>
                <AnimatedSection>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Card>
                        <CardHeader>
                          <CardTitle>Pricing</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc space-y-2 pl-5">
                            <li>$35 per person for groups of 1 - 15</li>
                            <li>$30 per person for groups of 16+</li>
                            <li>
                              Group sessions held every month except August and
                              December.
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Schedule Now</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p>
                            Schedule a paint night for your group! All supplies
                            are included.
                          </p>
                          <div className="flex items-center gap-4">
                            <Label htmlFor="paint-night-count">
                              Party Size
                            </Label>
                            <Input
                              id="paint-night-count"
                              type="number"
                              value={paintNightCount}
                              onChange={(e) =>
                                setPaintNightCount(Number(e.target.value))
                              }
                              min="1"
                              max="50"
                              className="w-24"
                            />
                          </div>
                          <Button className="w-full">
                            Schedule a Paint Night
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Painting Options</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ImageGallery images={paintNightImages} />
                      </CardContent>
                    </Card>
                  </CardContent>
                </AnimatedSection>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default EventsPage;
