// app/_sites/[site]/Navigation.js
import Link from "next/link";

export default function Navigation({ navigation, theme }) {
  return (
    <nav
      style={{
        backgroundColor: theme.primary,
        padding: "1rem",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        {navigation.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
