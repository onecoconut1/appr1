// components/layouts/SiteLayout.js
export default function SiteLayout({ children, siteConfig }) {
  if (!siteConfig || !siteConfig.theme) {
    // Provide fallback values if siteConfig is not loaded properly
    siteConfig = {
      name: "Default Site",
      theme: {
        primary: "#000000",
        secondary: "#333333",
        background: "#ffffff",
        text: "#000000",
      },
    };
  }

  return (
    <div
      style={{
        backgroundColor: siteConfig.theme.background,
        color: siteConfig.theme.text,
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          backgroundColor: siteConfig.theme.primary,
          padding: "1rem",
        }}
      >
        <h1 style={{ color: "#ffffff" }}>{siteConfig.name}</h1>
      </header>
      <main style={{ padding: "1rem" }}>{children}</main>
    </div>
  );
}
