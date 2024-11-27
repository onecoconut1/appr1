import { Suspense } from "react";
import { headers } from "next/headers";
import { getCachedSiteConfig, getCachedPosts } from "@/lib/cache";
import { getDomainFromHeaders } from "@/lib/utils";
import Loading from "@/components/loading";

// Posts component for better code splitting
async function Posts() {
  const headersList = headers();
  const domain = getDomainFromHeaders(headersList);
  const posts = await getCachedPosts(domain);
  const siteConfig = await getCachedSiteConfig(domain);

  return (
    <div>
      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            marginBottom: "20px",
            padding: "15px",
            borderRadius: "8px",
            backgroundColor:
              siteConfig.theme.background === "#FFFFFF" ? "#f5f5f5" : "#2a2a2a",
            transition: "transform 0.2s ease",
            cursor: "pointer",
            ":hover": {
              transform: "scale(1.01)",
            },
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </div>
  );
}

export default async function Home() {
  const headersList = headers();
  const domain = getDomainFromHeaders(headersList);
  const siteConfig = await getCachedSiteConfig(domain);

  return (
    <div>
      <h1>{siteConfig.name}</h1>
      <Suspense fallback={<Loading />}>
        <Posts />
      </Suspense>
    </div>
  );
}
