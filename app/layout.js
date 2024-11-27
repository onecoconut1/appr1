import { headers } from "next/headers";
import { getSiteConfig } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata() {
  const headersList = headers();
  const domain = headersList.get("host");
  const siteConfig = await getSiteConfig(domain);

  return {
    title: siteConfig.name,
    // Add more metadata as needed
  };
}

export default async function RootLayout({ children }) {
  const headersList = headers();
  const domain = headersList.get("host");
  const siteConfig = await getSiteConfig(domain);

  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: siteConfig.theme.background,
          color: siteConfig.theme.text,
        }}
      >
        {/* Static Navbar */}
        <Navbar config={siteConfig} />

        {/* Dynamic Content Area */}
        <main
          style={{
            padding: "20px",
            minHeight: "calc(100vh - 200px)", // Adjust based on your navbar/footer height
          }}
        >
          {children}
        </main>

        {/* Static Footer */}
        <Footer config={siteConfig} />
      </body>
    </html>
  );
}
