import { headers } from "next/headers";
import { getSiteConfig } from "@/lib/utils";

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
        <nav style={{ backgroundColor: siteConfig.theme.primary }}>
          {siteConfig.layout.navbar.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              style={{ color: siteConfig.theme.text, margin: "0 10px" }}
            >
              {link.text}
            </a>
          ))}
        </nav>

        <main>{children}</main>

        <footer style={{ backgroundColor: siteConfig.theme.secondary }}>
          <p>{siteConfig.layout.footer.text}</p>
          {siteConfig.layout.footer.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              style={{ color: siteConfig.theme.text, margin: "0 10px" }}
            >
              {link.text}
            </a>
          ))}
        </footer>
      </body>
    </html>
  );
}
