"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";

// Helper component for lists of subjects/techniques
const InfoList = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h3 className="mb-2 font-semibold text-gray-800">{title}</h3>
    <ul className="list-disc space-y-1 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const ClassesPage = () => {
  return (
    <>
      <section className="border-b border-pink-100 bg-pink-50 py-16 text-center md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold md:text-6xl">CLASS OPTIONS</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="arts-crafts" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
              <TabsTrigger value="arts-crafts">Arts & Crafts</TabsTrigger>
              <TabsTrigger value="drawing">Drawing Lessons</TabsTrigger>
              <TabsTrigger value="painting">Painting Lessons</TabsTrigger>
              <TabsTrigger value="private">Private Lessons</TabsTrigger>
            </TabsList>

            {/* Arts & Crafts Content */}
            <TabsContent value="arts-crafts" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between">
                    <span className="text-3xl">Arts and Crafts</span>
                    <span className="text-lg font-normal text-gray-500">
                      Ages 5 - 8
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <InfoList
                      title="Pricing"
                      items={[
                        "$65 per lesson",
                        "Up-front payment discount: $10 off each month",
                      ]}
                    />
                    <InfoList
                      title="Basic Info"
                      items={[
                        "1 - 2 Lessons per week",
                        "In person only",
                        "7 Students per lesson",
                        "45 Minutes long",
                      ]}
                    />
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Lesson Subjects</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      <InfoList
                        title="Crafts"
                        items={[
                          "Building",
                          "Creating",
                          "Making",
                          "Drawing",
                          "Designing",
                          "Shaping",
                          "Coloring",
                          "Painting",
                        ]}
                      />
                      <InfoList
                        title="Elements"
                        items={[
                          "Lines",
                          "Shapes",
                          "Texture",
                          "Space",
                          "Color",
                          "Value",
                          "Form",
                        ]}
                      />
                      <InfoList
                        title="Artists"
                        items={[
                          "What makes an artist?",
                          "What makes an artist famous?",
                          "Future, Present, Past, Ancient",
                        ]}
                      />
                      <InfoList
                        title="Art History"
                        items={[
                          "Prehistoric",
                          "Ancient",
                          "Medieval",
                          "Renaissance",
                          "Baroque",
                          "And more...",
                        ]}
                      />
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Drawing Lessons Content */}
            <TabsContent value="drawing" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between">
                    <span className="text-3xl">Drawing Lessons</span>
                    <span className="text-lg font-normal text-gray-500">
                      Ages 9+
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <InfoList
                      title="Pricing"
                      items={[
                        "$65 per lesson",
                        "Up-front payment discount: $10 off each month",
                      ]}
                    />
                    <InfoList
                      title="Basic Info"
                      items={[
                        "1 - 2 Lessons per week",
                        "In person & virtual available",
                        "12 students (in person), 3 (virtual)",
                        "1 Hour long",
                      ]}
                    />
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Techniques & Subjects</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      <InfoList
                        title="Drawing Techniques"
                        items={[
                          "Layering",
                          "Shading",
                          "Loose Sketching",
                          "Gesture Drawing",
                          "Blending",
                          "Contour Line",
                          "And more...",
                        ]}
                      />
                      <InfoList
                        title="Lesson Subjects"
                        items={["Elements of Art", "History", "Artist Studies"]}
                      />
                      <a
                        target="_blank"
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdxbGJMxj1IxTtR5vwCdXOY6Kn5RKoP5I6TLfvxyRgMiHeNWw/viewform"
                        className="font-semibold text-pink-600 hover:underline"
                      >
                        Fill out the sign up sheet &rarr;
                      </a>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Painting Lessons Content */}
            <TabsContent value="painting" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between">
                    <span className="text-3xl">Painting Lessons</span>
                    <span className="text-lg font-normal text-gray-500">
                      Ages 12+
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* ... Content for painting lessons ... */}
                  <p>Details for Painting Lessons can be filled in here.</p>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Private Lessons Content */}
            <TabsContent value="private" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between">
                    <span className="text-3xl">Private Lessons</span>
                    <span className="text-lg font-normal text-gray-500">
                      All Ages
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* ... Content for private lessons ... */}
                  <p>Details for Private Lessons can be filled in here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default ClassesPage;
