import { useRouter } from "next/router";
import Link from "next/link";

export default function SiteLayout({ children, siteConfig }) {
  const router = useRouter();

  return (
    <div
      style={{
        backgroundColor: siteConfig.theme.background,
        color: siteConfig.theme.text,
      }}
    >
      <header style={{ backgroundColor: siteConfig.theme.primary }}>
        <nav>
          {siteConfig.navigation.primary.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              style={{
                color:
                  router.pathname === item.path
                    ? siteConfig.theme.secondary
                    : "#fff",
                marginRight: "1rem",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer style={{ backgroundColor: siteConfig.theme.secondary }}>
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </footer>
    </div>
  );
}
