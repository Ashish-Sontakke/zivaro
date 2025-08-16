"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import {
  customSignIn,
  customSignUp,
  customConfirmSignUp,
  customSignOut,
  currentUser,
  customResetPassword,
  customConfirmResetPassword,
} from "@/lib/auth-functions";

type AuthUser = {
  username: string;
  userId: string;
  signInDetails: any;
  email?: string;
  groups?: string[];
} | null;

type AuthContextType = {
  user: AuthUser;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  signIn: (
    username: string,
    password: string
  ) => Promise<{ isSignedIn: boolean; nextStep: any }>;
  signUp: (
    username: string,
    password: string
  ) => Promise<{
    isSignUpComplete: boolean;
    userId: string | undefined;
    nextStep: any;
  }>;
  confirmSignUp: (
    username: string,
    code: string
  ) => Promise<{ isSignUpComplete: boolean; nextStep: any }>;
  signOut: () => Promise<boolean>;
  resetPassword: (username: string) => Promise<any>;
  confirmResetPassword: (
    username: string,
    code: string,
    newPassword: string
  ) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      try {
        setIsLoading(true);
        const userData = await currentUser();
        setUser(userData as AuthUser);
      } catch (err) {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkUser();
  }, []);

  const signIn = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await customSignIn({ username, password });

      if (result.isSignedIn) {
        const userData = await currentUser();
        setUser(userData as AuthUser);
        router.refresh();
      }

      return result;
    } catch (err: any) {
      setError(err.message || "Failed to sign in");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (username: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await customSignUp({ username, password });
      return result;
    } catch (err: any) {
      setError(err.message || "Failed to sign up");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const confirmSignUp = async (username: string, code: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await customConfirmSignUp({
        username,
        confirmationCode: code,
      });

      // After successful confirmation, check if user is auto-signed in
      if (result.isSignUpComplete) {
        try {
          const userData = await currentUser();
          setUser(userData as AuthUser);
        } catch {
          // Auto-signin didn't work, user will need to login manually
        }
      }

      return result;
    } catch (err: any) {
      setError(err.message || "Failed to confirm sign up");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await customSignOut();
      setUser(null);
      router.refresh();
      return result;
    } catch (err: any) {
      setError(err.message || "Failed to sign out");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (username: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await customResetPassword(username);
      return result;
    } catch (err: any) {
      setError(err.message || "Failed to reset password");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const confirmResetPassword = async (
    username: string,
    code: string,
    newPassword: string
  ) => {
    setIsLoading(true);
    setError(null);
    try {
      await customConfirmResetPassword({
        username,
        confirmationCode: code,
        newPassword,
      });
    } catch (err: any) {
      setError(err.message || "Failed to confirm reset password");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        error,
        signIn,
        signUp,
        confirmSignUp,
        signOut,
        resetPassword,
        confirmResetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
