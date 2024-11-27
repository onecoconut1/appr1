// app/_sites/[site]/page.js
import { getPageData } from "@/lib/fakeDatabase";

// Handle root path
export default async function HomePage({ params }) {
  const pageData = await getPageData(params.site, "index");

  if (!pageData) return null;

  return (
    <div>
      <h1>{pageData.title}</h1>
      <div>{pageData.content}</div>
    </div>
  );
}

export const dynamic = "force-dynamic";
