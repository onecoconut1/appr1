import path from "path";
import fs from "fs/promises";

export async function getSiteConfig(siteId) {
  const configPath = path.join(process.cwd(), "config", `${siteId}.json`);
  try {
    const rawData = await fs.readFile(configPath, "utf8");
    return JSON.parse(rawData);
  } catch (error) {
    const defaultConfig = await fs.readFile(
      path.join(process.cwd(), "config", "default.json"),
      "utf8"
    );
    return JSON.parse(defaultConfig);
  }
}
