"use client"; // Required for Framer Motion animations

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "src/components/ui/accordion";
import { AnimatedSection } from "src/app/components/AnimatedSection";

const faqData = [
  {
    question: "Class Information",
    answer: (
      <>
        Lesson plans each week will be based on the elements of art and will
        build upon previous concepts taught. Each week will teach new and
        exciting concepts about the elements of art and how to implement them
        into your own artistic expression. For a more in-depth look at the Class
        Information please click{" "}
        <Link
          href="/class-info"
          className="font-semibold text-pink-600 hover:underline"
        >
          here
        </Link>
        .
      </>
    ),
  },
  {
    question: "Payments",
    answer: (
      <>
        Payment must be made before class starts, 24 hours before or on that
        day, unless you have paid for art classes in full. For those who would
        like a payment reminder, there will be an option to have a text message
        sent to you the first of the month. Payments can be made through Venmo,
        with cash, or using checks payable to Shonnie Schmidt. Any further
        questions, please{" "}
        <Link
          href="/contact"
          className="font-semibold text-pink-600 hover:underline"
        >
          contact
        </Link>{" "}
        Shonnie Schmidt.
      </>
    ),
  },
  {
    question: "Refund Policy",
    answer:
      "Full refunds can only be given if notice of withdrawal is made in advance 24 hours before the first class of the month starts. Once first class has been attended, only half your refund can be given. Refunds will be made available due to weather or emergency needs. Further information will be given in such an event.",
  },
  {
    question: "Make Up Classes",
    answer:
      "When illness occurs, eligibility for make-up classes are available, if the instructor has been informed at least one hour before class starts. Further discussion will be communicated for make-up class times.",
  },
  {
    question: "Agreement Form",
    answer: (
      <>
        Signature for this agreement form must be sign by a student, parent or
        guardian 18 years of age or older. Students will need to have this
        agreement signed by or on first day of class in order to attend. Click{" "}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfz6gy3UghhdN9ggLNXfDG3Wa2v0vMqR-VQxOW3bLogY_JNGw/viewform"
          className="font-semibold text-pink-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>{" "}
        to view and sign the agreement form.
      </>
    ),
  },
];

const FaqPage = () => {
  return (
    <>
      <section className="border-b border-pink-100 bg-pink-50 py-16 text-center md:py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h1 className="text-4xl font-bold md:text-6xl">
              FREQUENTLY ASKED QUESTIONS
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AnimatedSection key={index}>
                <AccordionItem
                  value={`item-${index}`}
                  className="mb-4 rounded-lg border bg-white px-4 shadow-sm"
                >
                  <AccordionTrigger className="font-merriweather text-left text-xl">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
