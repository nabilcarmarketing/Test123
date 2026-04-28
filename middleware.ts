import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
  "https://utipkfkcllfthtslqk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1dGlwa2Zqa2NsbGZ0aHRzbHFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczODA1ODcsImV4cCI6MjA5Mjk1NjU4N30.4nnSICuJRzBxilsrNfxP1TvX7EzTtpoifZcoQNbU6h0",
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value;
        },
        set(name, value, options) {
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name, options) {
          response.cookies.set({
            name,
            value: "",
            ...options,
            
          });
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isLoginPage = request.nextUrl.pathname === "/admin/login";

  if (!session && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (session && isLoginPage) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/admin/:path*"],
};