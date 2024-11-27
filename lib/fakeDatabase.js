const database = {
  r1: {
    about: {
      title: "About R1",
      content: "This is the R1 campus about page",
      features: ["Feature 1", "Feature 2"],
    },
    "courses/web-development": {
      title: "Web Development at R1",
      description: "Learn web development",
      curriculum: ["HTML", "CSS", "JavaScript"],
      price: "$999",
    },
    contact: {
      address: "R1 Address",
      phone: "R1 Phone",
      email: "r1@example.com",
    },
  },
  r2: {
    about: {
      title: "About R2",
      content: "This is the R2 campus about page",
      features: ["Feature A", "Feature B"],
    },
    "courses/web-development": {
      title: "Web Development at R2",
      description: "Master web development",
      curriculum: ["React", "Node", "MongoDB"],
      price: "$1299",
    },
    contact: {
      address: "R2 Address",
      phone: "R2 Phone",
      email: "r2@example.com",
    },
  },
};

export async function getPageData(siteId, pagePath) {
  // Simulate database delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  const path = Array.isArray(pagePath) ? pagePath.join("/") : pagePath;
  return database[siteId]?.[path] || null;
}
