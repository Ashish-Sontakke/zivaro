// components/auth/login.tsx
"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

export default function Login() {
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && user) {
      redirect("/app");
    }
  }, [user, isLoading]);

  return null;
}
