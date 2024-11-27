"use client";

import { memo } from "react";
import Link from "next/link";

const Footer = memo(function Footer({ config }) {
  return (
    <footer
      style={{
        backgroundColor: config.theme.secondary,
        padding: "20px",
        marginTop: "auto",
      }}
    >
      <p>{config.layout.footer.text}</p>
      {config.layout.footer.links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          style={{
            color: config.theme.text,
            margin: "0 10px",
            textDecoration: "none",
          }}
        >
          {link.text}
        </Link>
      ))}
    </footer>
  );
});

export default Footer;
