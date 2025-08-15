"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// FAQ data stored in a separate constant
const FAQ_ITEMS = [
  {
    id: "item-1",
    question: "How does the AI evaluate candidates?",
    answer:
      "Our AI analyzes responses based on job-specific criteria, technical accuracy, communication skills, and problem-solving abilities, providing objective scoring across all candidates.",
  },
  {
    id: "item-2",
    question: "Is this meant to replace human interviewers?",
    answer:
      "No, Zivaro.ai handles only the first-round screening, creating a ranked shortlist so your team can focus their expertise on evaluating the most promising candidates.",
  },
  {
    id: "item-3",
    question: "How do candidates access the interviews?",
    answer:
      "Candidates receive a secure link to complete their interview at their convenience within your specified timeframe, using any device with a camera and microphone.",
  },
  {
    id: "item-4",
    question: "Can we customize the interview questions?",
    answer:
      "Yes, you can provide specific questions or let our AI generate relevant questions based on your job description and evaluation criteria.",
  },
  {
    id: "item-5",
    question: "How secure is candidate data?",
    answer:
      "We prioritize data security with enterprise-grade encryption, strict access controls, and compliance with global privacy regulations including GDPR.",
  },
  {
    id: "item-6",
    question: "How quickly can we implement this?",
    answer:
      "Most clients are up and running within 24-48 hours. Our team provides comprehensive onboarding support to ensure a smooth implementation.",
  },
];

export function FAQ() {
  return (
    <section className="py-20" id="faq">
      <div className="container">
        <div className="flex flex-col gap-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our AI interview platform.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="rounded-lg border p-2"
          >
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="px-4 text-base">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <p className="text-muted-foreground text-base">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
