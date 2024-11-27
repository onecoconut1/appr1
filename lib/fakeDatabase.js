// lib/fakeDatabase.js
const database = {
  r1: {
    siteConfig: {
      name: "R1 Site",
      theme: {
        primary: "#2563eb",
        secondary: "#1e40af",
        background: "#ffffff",
        text: "#000000",
      },
      // Static parts that rarely change
      navigation: [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Courses", path: "/courses" },
        { label: "Contact", path: "/contact" },
      ],
      footer: {
        links: [
          { label: "Privacy Policy", path: "/privacy" },
          { label: "Terms", path: "/terms" },
        ],
        address: "123 R1 Street",
        contact: {
          email: "info@r1.com",
          phone: "123-456-7890",
        },
      },
    },
    pages: {
      index: {
        title: "Welcome to R1",
        content: "Main content here",
      },
      about: {
        title: "About R1",
        content: "About content",
      },
      "courses/web-development": {
        title: "Web Development",
        description: "Learn web development",
        curriculum: ["HTML", "CSS", "JavaScript"],
        pricing: {
          amount: 999,
          currency: "USD",
        },
      },
    },
  },
  r2: {
    siteConfig: {
      name: "R2 Site",
      theme: {
        primary: "#16a34a",
        secondary: "#15803d",
        background: "#ffffff",
        text: "#000000",
      },
      navigation: [
        { label: "Home", path: "/" },
        { label: "Programs", path: "/programs" },
        { label: "Contact", path: "/contact" },
      ],
      footer: {
        links: [
          { label: "Privacy", path: "/privacy" },
          { label: "Terms", path: "/terms" },
        ],
        address: "456 R2 Street",
        contact: {
          email: "info@r2.com",
          phone: "987-654-3210",
        },
      },
    },
    pages: {
      index: {
        title: "Welcome to R2",
        content: "Main content here",
      },
      programs: {
        title: "Our Programs",
        content: "Programs content",
      },
    },
  },
};

// lib/fakeDatabase.js
export async function getPageData(siteId, pagePath) {
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Handle root path
  if (!pagePath || pagePath === "/") pagePath = "index";

  // Remove leading slash if present
  pagePath = pagePath.replace(/^\//, "");

  // Handle array paths
  if (Array.isArray(pagePath)) {
    pagePath = pagePath.join("/");
  }

  return database[siteId]?.pages[pagePath] || null;
}
