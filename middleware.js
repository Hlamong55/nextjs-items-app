import { NextResponse } from "next/server";

export function middleware(request) {
  const isLoggedIn = request.cookies.get("isLoggedIn");

  const protectedRoutes = ["/add-item"];

  if (
    protectedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route)
    )
  ) {
    if (!isLoggedIn) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }
  }

  return NextResponse.next();
}
