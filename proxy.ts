import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const session = (() => null)();
  console.log("Middleware session:", session);
  if (!session) {
    console.log("Redirecting to /invoice/signin");
    const signInUrl = request.nextUrl.clone();
    signInUrl.pathname = "/signin";

    return NextResponse.redirect(signInUrl);
  }
  return NextResponse.next();
}
export const config = {
  //   matcher: "/", // WORKS, REDIRECTS TO /invoice/signin
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|signin).*)"], // DOES NOT WORK!!!
};
