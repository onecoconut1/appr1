import { headers } from "next/headers";
import { getSiteConfig, getPosts } from "@/lib/utils";

export default async function Home() {
  const headersList = headers();
  const domain = headersList.get("host");
  const siteConfig = await getSiteConfig(domain);
  const posts = await getPosts(domain);

  return (
    <div>
      <h1>{siteConfig.name}</h1>
      <div>
        {posts.map((post) => (
          <article
            key={post.id}
            style={{
              marginBottom: "20px",
              padding: "15px",
              borderRadius: "8px",
              backgroundColor:
                siteConfig.theme.background === "#FFFFFF"
                  ? "#f5f5f5"
                  : "#2a2a2a",
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
