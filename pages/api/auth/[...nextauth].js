import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const useSecureCookies = process.env.NEXTAUTH_URL.startsWith("https://");
const cookiePrefix = useSecureCookies ? "__Secure-" : "";
const hostName = new URL(process.env.NEXTAUTH_URL).hostname;
const rootDomain = "vercel.app";
console.log("hostName", hostName, useSecureCookies);
console.log("Cookie settings:", {
  name: `${useSecureCookies ? "__Secure-" : ""}next-auth.session-token`,
  options: {
    httpOnly: useSecureCookies ? false : true,
    sameSite: "lax",
    path: "/",
    secure: useSecureCookies,
    domain: hostName == "localhost" ? hostName : "." + rootDomain,
  },
});
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  cookies: {
    sessionToken: {
      name: `${useSecureCookies ? "__Secure-" : ""}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies,
        // domain: hostName == "localhost" ? hostName : "." + rootDomain, // add a . in front so that subdomains are included
      },
    },
  },
};

export default NextAuth(authOptions);
