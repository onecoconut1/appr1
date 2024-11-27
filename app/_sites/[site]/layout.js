// app/_sites/[site]/layout.js
import { getSiteConfig } from "@/lib/fakeDatabase";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default async function SiteLayout({ params, children }) {
  const siteConfig = await getSiteConfig(params.site);

  return (
    <div
      style={{
        backgroundColor: siteConfig.theme.background,
        color: siteConfig.theme.text,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navigation navigation={siteConfig.navigation} theme={siteConfig.theme} />

      <main style={{ flex: 1, padding: "20px" }}>{children}</main>

      <Footer footer={siteConfig.footer} theme={siteConfig.theme} />
    </div>
  );
}

// Force static rendering for layout and revalidate every 24 hours
// since navigation and footer rarely change
export const dynamic = "force-static";
export const revalidate = 86400;
