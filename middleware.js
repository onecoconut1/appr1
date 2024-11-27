// middleware.js
import { NextResponse } from "next/server";

const domains = {
  "r1.caashishkapoor.com": "r1",
  "r2.caashishkapoor.com": "r2",
};

export function middleware(request) {
  const hostname = request.headers.get("host") || "";
  const siteId = domains[hostname];

  if (!siteId) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return NextResponse.rewrite(
    new URL(`/_sites/${siteId}${request.nextUrl.pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_sites|_next/static|_next/image|favicon.ico).*)"],
};
