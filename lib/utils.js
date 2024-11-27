// lib/utils.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getSiteConfig(domain) {
  try {
    const site = await prisma.site.findUnique({
      where: { domain },
      include: {
        theme: true,
        layout: {
          include: {
            navbar: {
              include: {
                links: true,
              },
            },
            footer: {
              include: {
                links: true,
              },
            },
          },
        },
      },
    });

    if (!site) {
      // Fallback to first site if domain not found
      return await prisma.site.findFirst({
        include: {
          theme: true,
          layout: {
            include: {
              navbar: {
                include: {
                  links: true,
                },
              },
              footer: {
                include: {
                  links: true,
                },
              },
            },
          },
        },
      });
    }

    return site;
  } catch (error) {
    console.error("Error fetching site config:", error);
    throw error;
  }
}

export async function getPosts(domain) {
  try {
    const posts = await prisma.post.findMany({
      where: {
        site: {
          domain: domain,
        },
      },
    });

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}

export function getDomainFromHeaders(headers) {
  return headers.get("host");
}
