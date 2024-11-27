// app/layout.js
import { headers } from "next/headers";
import { getLayoutData } from "@/lib/utils";
import { getDomainFromHeaders } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default async function RootLayout({ children }) {
  const headersList = headers();
  const domain = getDomainFromHeaders(headersList);
  const layoutData = await getLayoutData(domain);

  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: layoutData.theme.background,
          color: layoutData.theme.text,
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar config={layoutData} />
        <main
          style={{
            padding: "20px",
            flex: "1 0 auto",
          }}
        >
          {children}
        </main>
        <Footer config={layoutData} />
      </body>
    </html>
  );
}
