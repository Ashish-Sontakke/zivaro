"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "@/hooks/use-auth";
import AuthLayout from "@/components/auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { signIn, isAuthenticated } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailFromParams = searchParams.get("email") || "";
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: emailFromParams,
      password: "",
    },
  });

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/app");
    }
  }, [isAuthenticated, router]);

  // Update form value if email param changes
  useEffect(() => {
    if (emailFromParams) {
      form.setValue("email", emailFromParams);
    }
  }, [emailFromParams, form]);

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signIn(data.email, data.password);

      if (result.isSignedIn) {
        router.push("/app");
      } else if (result.nextStep?.signInStep === "CONFIRM_SIGN_UP") {
        router.push(`/auth/confirm?email=${encodeURIComponent(data.email)}`);
      }
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "Failed to sign in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Login"
      description="Enter your email and password to access your account"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="your.email@example.com"
                    type="email"
                    autoComplete="email"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <FormLabel>Password</FormLabel>
                  <Link
                    href="/auth/forgot-password"
                    className="ml-auto inline-block text-sm text-primary hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <FormControl>
                  <Input
                    placeholder="••••••••"
                    type="password"
                    autoComplete="current-password"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <div className="text-sm text-destructive">{error}</div>}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </Form>
      <div className="mt-4 text-start text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/auth/signup" className="text-primary hover:underline">
          Sign up
        </Link>
      </div>
    </AuthLayout>
  );
}
