import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  const token = request.cookies.get("authToken");

  console.log("Token:", token?.value); // Debugging

  const isTokenValid = token?.value && token.value !== "undefined" && token.value !== "";

  const guestRoutes = ["/admin-login/login"];

  if (guestRoutes.includes(url)) {
    if (isTokenValid) {
      return NextResponse.redirect(new URL("/admin-panel", request.nextUrl.origin));
    }
    return NextResponse.next();
  }

  if (!isTokenValid) {
    return NextResponse.redirect(new URL("/admin-login/login", request.nextUrl.origin));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-login/login", "/admin-panel/:path*"], // Protects all admin routes
};
