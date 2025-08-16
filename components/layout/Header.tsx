import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm mx-auto container">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">zivaro.ai</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
            <Link
              href="#benefits"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Benefits
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/app"
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            )}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
