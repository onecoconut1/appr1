// app/_sites/[site]/[...pageId]/page.js
import { notFound } from "next/navigation";
import { getPageData } from "@/lib/fakeDatabase";

export default async function Page({ params }) {
  // Join pageId array to create path
  const path = params.pageId.join("/");
  const pageData = await getPageData(params.site, path);

  if (!pageData) {
    notFound();
  }

  return (
    <div>
      <h1>{pageData.title}</h1>
      <div>{pageData.content}</div>
      {/* Rest of your page content */}
    </div>
  );
}

export const dynamic = "force-dynamic";
