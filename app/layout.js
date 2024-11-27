import { headers } from "next/headers";
import { getCachedSiteConfig } from "@/lib/cache";
import { getDomainFromHeaders } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/error-boundary";
import "./globals.css";

export default async function RootLayout({ children }) {
  const headersList = headers();
  const domain = getDomainFromHeaders(headersList);
  const siteConfig = await getCachedSiteConfig(domain);

  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: siteConfig.theme.background,
          color: siteConfig.theme.text,
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ErrorBoundary>
          <Navbar config={siteConfig} />
          <main
            style={{
              padding: "20px",
              flex: "1 0 auto",
            }}
          >
            {children}
          </main>
          <Footer config={siteConfig} />
        </ErrorBoundary>
      </body>
    </html>
  );
}
