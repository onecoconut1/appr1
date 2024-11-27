import { cache } from "react";
import { getPosts, getSiteConfig } from "./utils";

export const getCachedSiteConfig = cache(async (domain) => {
  return await getSiteConfig(domain);
});

export const getCachedPosts = cache(async (domain) => {
  return await getPosts(domain);
});
