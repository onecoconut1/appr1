"use client";

import { memo } from "react";
import Link from "next/link";

const Navbar = memo(function Navbar({ config }) {
  return (
    <nav
      style={{
        backgroundColor: config.theme.primary,
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      {config.layout.navbar.links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          style={{
            color: config.theme.text,
            margin: "0 10px",
            textDecoration: "none",
            padding: "15px",
            display: "inline-block",
          }}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
});

export default Navbar;
