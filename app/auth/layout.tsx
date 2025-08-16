"use client";

import ConfigureAmplifyClientSide from "@/components/ConfigureAmplifyClientSide";
import { AuthProvider } from "@/hooks/use-auth";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ConfigureAmplifyClientSide />
      <main className="w-full lg:grid lg:grid-cols-2">
        <div className="hidden bg-accent-foreground lg:flex lg:flex-col p-8 text-white h-full">
          <Link href="/" className="flex items-center space-x-2 self-start">
            <span className="text-xl font-bold">zivaro.ai</span>
          </Link>
          <div className="my-auto text-start">
            <h1 className="text-4xl font-bold mb-4">
              Streamline Your Hiring Process
            </h1>
            <p className="text-lg max-w-md">
              Let AI handle your first-round interviews and get a ranked
              leaderboard of candidates.
            </p>
          </div>
          <div className="mt-auto">
            <blockquote className="space-y-2 text-start max-w-md">
              <p className="text-lg">
                “Zivaro has transformed our hiring process. We now identify top
                candidates in a fraction of the time.”
              </p>
              <footer className="text-sm">Sarah Johnson, Hiring Manager</footer>
            </blockquote>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="mx-auto h-screen w-full max-w-md gap-6">
            <AuthProvider>{children}</AuthProvider>
          </div>
        </div>
      </main>
    </>
  );
}
