"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardPage() {
  const { user, isLoading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/auth");
    }
  }, [user, isLoading, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push("/auth");
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>User Profile</CardTitle>
            <CardDescription>Your account information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div>
              <span className="font-medium">Username:</span> {user.username}
            </div>
            <div>
              <span className="font-medium">Email:</span> {user.email || "N/A"}
            </div>
            <div>
              <span className="font-medium">User ID:</span> {user.userId}
            </div>
            <div>
              <span className="font-medium">Groups:</span>{" "}
              {user.groups && user.groups.length > 0 ? (
                <span className="inline-flex gap-1">
                  {user.groups.map((group) => (
                    <span
                      key={group}
                      className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800"
                    >
                      {group}
                    </span>
                  ))}
                </span>
              ) : (
                "No groups assigned"
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Welcome!</CardTitle>
            <CardDescription>
              You are now signed in to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              This is your protected dashboard page. You can only see this
              content when authenticated.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
