import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/hero.png";

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Streamline Your Hiring Process with AI-Powered Interviews
            </h1>
            <p className="text-xl text-muted-foreground">
              Let AI handle your first-round interviews and get a ranked
              leaderboard of candidates based on job-specific criteria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 lg:justify-start justify-center">
              <Link
                href="#contact"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                )}
              >
                Get Started
              </Link>
              <Link
                href="#how-it-works"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 py-3 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                )}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src={heroImage}
              alt="AI-powered interview platform"
              fill
              priority
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
