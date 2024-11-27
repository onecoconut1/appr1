import { NextResponse } from "next/server";

const domains = {
  "r1.caashishkapoor.com": "r1-portal",
  "r2.caashishkapoor.com": "r2-portal",
};

export function middleware(request) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // Get exact domain match
  const siteId = domains[hostname] || "default";

  // For dynamic API routes that need site identification
  if (pathname.startsWith("/api/")) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-site-id", siteId);
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // Rewrite to the site-specific pages
  return NextResponse.rewrite(
    new URL(`/_sites/${siteId}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_sites|_next/static|_next/image|favicon.ico).*)"],
};
