import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const sites = [
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

const posts = [
  {
    title: "Welcome to R3",
    content: "This is the first post for R3 site",
    domain: "r3.caashishkapoor.com",
  },
  {
    title: "Welcome to R4",
    content: "This is the first post for R4 site",
    domain: "r4.caashishkapoor.com",
  },
];

async function main() {
  // Delete existing data
  await prisma.site.deleteMany();

  // Create sites with all related data
  for (const siteData of sites) {
    const site = await prisma.site.create({
      data: {
        domain: siteData.domain,
        name: siteData.name,
        theme: {
          create: {
            primary: siteData.theme.primary,
            secondary: siteData.theme.secondary,
            background: siteData.theme.background,
            text: siteData.theme.text,
          },
        },
        layout: {
          create: {
            navbar: {
              create: {
                links: {
                  create: siteData.layout.navbar.links,
                },
              },
            },
            footer: {
              create: {
                text: siteData.layout.footer.text,
                links: {
                  create: siteData.layout.footer.links,
                },
              },
            },
          },
        },
      },
    });

    // Create associated posts
    const sitePosts = posts.filter((post) => post.domain === siteData.domain);
    for (const postData of sitePosts) {
      await prisma.post.create({
        data: {
          title: postData.title,
          content: postData.content,
          site: {
            connect: {
              id: site.id,
            },
          },
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
