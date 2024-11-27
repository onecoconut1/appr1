// middleware.js
import { NextResponse } from "next/server";

const domains = {
  "r1.caashishkapoor.com": "r1",
  "r2.caashishkapoor.com": "r2",
};

export function middleware(request) {
  const hostname = request.headers.get("host");
  const siteId = domains[hostname];

  if (!siteId) {
    return new NextResponse("Not Found", { status: 404 });
  }

  // Create new URL using request.url as base
  // This preserves the protocol and host
  const currentUrl = new URL(request.url);

  // Update pathname to include _sites/[site]
  currentUrl.pathname = `/_sites/${siteId}${request.nextUrl.pathname}`;

  return NextResponse.rewrite(currentUrl);
}

export const config = {
  matcher: ["/((?!api|_next|_sites|static|favicon.ico).*)"],
};
