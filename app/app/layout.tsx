"use client";

import ConfigureAmplifyClientSide from "@/components/ConfigureAmplifyClientSide";
import { AuthProvider } from "@/hooks/use-auth";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ConfigureAmplifyClientSide />
      <AuthProvider>{children}</AuthProvider>
    </div>
  );
}
