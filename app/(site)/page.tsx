import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Challange } from "@/components/sections/Challange";
import { Hero } from "@/components/sections/Hero";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <section className="py-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-start gap-8 text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Get in touch with us to learn more about how Zivaro.ai can help
              you find the best talent efficiently.
            </p>
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
