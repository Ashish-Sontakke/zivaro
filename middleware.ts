// middleware.ts
import { NextRequest, NextResponse } from "next/server";

import { fetchAuthSession } from "aws-amplify/auth/server";

import { runWithAmplifyServerContext } from "@/lib/amplify-utils";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  // check for auth only if pathname starts with /app
  if (pathname.startsWith("/app") && !pathname.startsWith("/auth")) {
    const authenticated = await runWithAmplifyServerContext({
      nextServerContext: { request, response },
      operation: async (contextSpec) => {
        try {
          const session = await fetchAuthSession(contextSpec, {});
          return session.tokens !== undefined;
        } catch (error) {
          console.log(error);
          return false;
        }
      },
    });

    if (authenticated) {
      return response;
    }

    return NextResponse.redirect(new URL("/auth", request.url));
  } else {
    return response;
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
