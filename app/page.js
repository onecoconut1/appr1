// app/page.js
import { headers } from "next/headers";
import { getLayoutData, getPosts } from "@/lib/utils";
import { getDomainFromHeaders } from "@/lib/utils";

export default async function Home() {
  const headersList = headers();
  const domain = getDomainFromHeaders(headersList);

  // Fetch both layout data and posts in parallel
  const [layoutData, posts] = await Promise.all([
    getLayoutData(domain),
    getPosts(domain),
  ]);

  return (
    <div>
      <h1 style={{ color: layoutData.theme.text }}>{layoutData.name}</h1>
      <div>
        {posts.map((post) => (
          <article
            key={post.id}
            style={{
              marginBottom: "20px",
              padding: "15px",
              borderRadius: "8px",
              backgroundColor:
                layoutData.theme.background === "#FFFFFF"
                  ? "#f5f5f5"
                  : "#2a2a2a",
              border: `1px solid ${layoutData.theme.primary}`,
            }}
          >
            <h2 style={{ color: layoutData.theme.primary }}>{post.title}</h2>
            <p style={{ color: layoutData.theme.text }}>{post.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
