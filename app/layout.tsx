import type { Metadata } from "next";
import { Manrope as Font } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Zivaro.ai | Realtime LLM Powered Multimodal AI Interviewer",
  description:
    "Zivaro.ai helps hiring teams handle the first round of interviews with AI, creating a leaderboard of candidates based on job-specific criteria.",
  keywords:
    "AI interviewer, hiring automation, candidate screening, job interviews, recruitment tool, HR technology",
};

const font = Font({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense>
        <body className={`${font.className} antialiased`}>{children}</body>
      </Suspense>
    </html>
  );
}
