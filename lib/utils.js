// lib/utils.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// This will be fetched once at the layout level
export async function getLayoutData(domain) {
  try {
    const site = await prisma.site.findUnique({
      where: { domain },
      select: {
        name: true,
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
      return await prisma.site.findFirst({
        select: {
          name: true,
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
    console.error("Error fetching layout data:", error);
    throw error;
  }
}

// This will be fresh for each request
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
