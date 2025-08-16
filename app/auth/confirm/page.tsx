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

const confirmSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  code: z
    .string()
    .min(6, { message: "Confirmation code must be at least 6 characters" }),
});

type ConfirmFormValues = z.infer<typeof confirmSchema>;

export default function ConfirmPage() {
  const { confirmSignUp, user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailFromParams = searchParams.get("email") || "";
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ConfirmFormValues>({
    resolver: zodResolver(confirmSchema),
    defaultValues: {
      email: emailFromParams,
      code: "",
    },
  });

  // Update form value if email param changes
  useEffect(() => {
    if (emailFromParams) {
      form.setValue("email", emailFromParams);
    }
  }, [emailFromParams, form]);

  const onSubmit = async (data: ConfirmFormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await confirmSignUp(data.email, data.code);

      if (result.isSignUpComplete) {
        // Check if user is now signed in (auto-signin should have occurred)
        if (user) {
          router.push("/app");
        } else {
          // Auto sign-in didn't work, redirect to login page with email prefilled
          router.push("/auth?email=" + encodeURIComponent(data.email));
        }
      }
    } catch (err: unknown) {
      const error = err as Error;
      setError(error.message || "Failed to confirm account");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Confirm your account"
      description="Enter the confirmation code sent to your email"
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
                    disabled={!!emailFromParams || isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirmation Code</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter code"
                    autoComplete="one-time-code"
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
            {isLoading ? "Confirming..." : "Confirm Account"}
          </Button>
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        Already confirmed?{" "}
        <Link href="/auth" className="text-primary hover:underline">
          Sign in
        </Link>
      </div>
    </AuthLayout>
  );
}
