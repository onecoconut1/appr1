// middleware.js
import { NextResponse } from "next/server";

const domains = {
  "r1.caashishkapoor.com": "r1",
  "r2.caashishkapoor.com": "r2",
};

export function middleware(request) {
  const hostname = request.headers.get("host");
  const siteId = domains[hostname];

  // For debugging
  console.log({
    hostname,
    siteId,
    url: request.url,
    pathname: request.nextUrl.pathname,
  });

  if (!siteId) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const url = new URL(
    `/_sites/${siteId}${request.nextUrl.pathname}`,
    request.url
  );
  console.log("Rewriting to:", url.toString());

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_sites (our internal site pages)
     * 4. /static (static files)
     * 5. /favicon.ico, /sitemap.xml (public files)
     */
    "/((?!api|_next|_sites|static|favicon.ico).*)",
  ],
};
