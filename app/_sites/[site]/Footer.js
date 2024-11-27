// app/_sites/[site]/Footer.js
import Link from "next/link";

export default function Footer({ footer, theme }) {
  return (
    <footer
      style={{
        backgroundColor: theme.secondary,
        padding: "2rem",
        color: "white",
      }}
    >
      <div>
        {footer.links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            style={{
              color: "white",
              marginRight: "1rem",
              textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div style={{ marginTop: "1rem" }}>
        <p>{footer.address}</p>
        <p>Email: {footer.contact.email}</p>
        <p>Phone: {footer.contact.phone}</p>
      </div>
    </footer>
  );
}
