// lib/getSiteConfig.js
import path from "path";
import fs from "fs/promises";

export async function getSiteConfig(siteId) {
  const configPath = path.join(process.cwd(), "config", `${siteId}.json`);

  try {
    const rawData = await fs.readFile(configPath, "utf8");
    return JSON.parse(rawData);
  } catch (error) {
    // Return default config if site-specific config doesn't exist
    return {
      name: siteId.toUpperCase(),
      theme: {
        primary: "#000000",
        secondary: "#333333",
        background: "#ffffff",
        text: "#000000",
      },
      features: {
        enableCourses: true,
        enableEvents: true,
      },
    };
  }
}
