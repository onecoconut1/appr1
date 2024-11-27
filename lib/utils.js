import { posts, sites } from "./db";

export async function getSiteConfig(domain) {
  const site = sites.find((s) => s.domain === domain);
  return site || sites[0]; // fallback to first site if domain not found
}

export async function getPosts(domain) {
  return posts.filter((post) => post.domain === domain);
}
