import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const isLogin = pathname === "/admin/login";

  // Nur Login Seite immer erlauben
  if (isLogin) {
    return NextResponse.next();
  }

  // Alles andere lassen wir durch (kein Block hier)
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};