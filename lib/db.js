export const sites = [
  {
    domain: "r3.caashishkapoor.com",
    name: "R3 Site",
    theme: {
      primary: "#FF0000",
      secondary: "#00FF00",
      background: "#FFFFFF",
      text: "#000000",
    },
    layout: {
      navbar: {
        links: [
          { text: "Home", href: "/" },
          { text: "About R3", href: "/about" },
        ],
      },
      footer: {
        text: "© 2024 R3 Site",
        links: [
          { text: "Privacy", href: "/privacy" },
          { text: "Terms", href: "/terms" },
        ],
      },
    },
  },
  {
    domain: "r4.caashishkapoor.com",
    name: "R4 Site",
    theme: {
      primary: "#0000FF",
      secondary: "#FF00FF",
      background: "#F0F0F0",
      text: "#333333",
    },
    layout: {
      navbar: {
        links: [
          { text: "Home", href: "/" },
          { text: "About R4", href: "/about" },
        ],
      },
      footer: {
        text: "© 2024 R4 Site",
        links: [
          { text: "Privacy", href: "/privacy" },
          { text: "Contact", href: "/contact" },
        ],
      },
    },
  },
];

export const posts = [
  {
    id: "1",
    title: "Welcome to R3",
    content: "This is the first post for R3 site",
    domain: "r3.caashishkapoor.com",
  },
  {
    id: "2",
    title: "Welcome to R4",
    content: "This is the first post for R4 site",
    domain: "r4.caashishkapoor.com",
  },
];
