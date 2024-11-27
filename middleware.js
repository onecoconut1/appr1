import { NextResponse } from "next/server";

export function middleware(request) {
  const hostname = request.headers.get("host");
  const url = request.nextUrl;

  // You can add more validation here if needed
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
