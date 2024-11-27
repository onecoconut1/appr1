export default function Footer({ config }) {
  return (
    <footer style={{ backgroundColor: config.theme.secondary }}>
      <p>{config.layout.footer.text}</p>
      {config.layout.footer.links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          style={{ color: config.theme.text, margin: "0 10px" }}
        >
          {link.text}
        </a>
      ))}
    </footer>
  );
}
