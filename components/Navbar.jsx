export default function Navbar({ config }) {
  return (
    <nav style={{ backgroundColor: config.theme.primary }}>
      {config.layout.navbar.links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          style={{ color: config.theme.text, margin: "0 10px" }}
        >
          {link.text}
        </a>
      ))}
    </nav>
  );
}
