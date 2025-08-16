import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const funnyMessages = [
  "Oops! Looks like this page is playing hide and seek.",
  "Who brought you here? This page doesn't exist.",
  "404! The page you are looking for has been abducted by aliens.",
  "Well, this is awkward. The page is on a coffee break.",
  "Are you lost? Don't worry, we all are sometimes.",
  "This is not the page you are looking for. *waves hand*",
];

export default function NotFound() {
  const randomMessage =
    funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

  return (
    <div className="flex flex-col min-h-screen container mx-auto">
      <Header />
      <main className="flex-1 flex flex-col items-start justify-start text-start py-12 container mx-auto">
        <div className="space-y-6 text-start max-w-md">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              404 - Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg">{randomMessage}</p>
          </div>
          <div className="flex justify-start">
            <Button asChild size="lg">
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
