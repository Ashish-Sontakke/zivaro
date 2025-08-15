import Image from "next/image";
import Link from "next/link";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { cn } from "@/lib/utils";
import { Challange } from "@/components/sections/Challange";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="flex flex-col container mx-auto">
      {/* Hero Section */}
      <Hero />
      {/* Problem Section */}
      <Challange />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
