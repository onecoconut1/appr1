// middleware.js
import { NextResponse } from "next/server";
import { domains } from "./config/sites";

export function middleware(request) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  const siteId = domains[hostname] || "default";

  // Skip rewrite for _next paths and API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes("/favicon.ico")
  ) {
    return NextResponse.next();
  }

  // Rewrite to the site-specific pages
  return NextResponse.rewrite(
    new URL(`/_sites/${siteId}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /favicon.ico, /sitemap.xml (static files)
     */
    "/((?!api|_next|favicon.ico).*)",
  ],
};
