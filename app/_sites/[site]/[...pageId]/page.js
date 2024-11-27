// app/_sites/[site]/[...pageId]/page.js
import { notFound } from "next/navigation";
import { getPageData } from "@/lib/fakeDatabase";

export default async function Page({ params }) {
  const pageData = await getPageData(params.site, params.pageId.join("/"));

  if (!pageData) {
    notFound();
  }

  return (
    <div>
      <h1>{pageData.title}</h1>

      {pageData.content && <div>{pageData.content}</div>}

      {pageData.description && (
        <div>
          <h2>Description</h2>
          <p>{pageData.description}</p>
        </div>
      )}

      {pageData.curriculum && (
        <div>
          <h2>Curriculum</h2>
          <ul>
            {pageData.curriculum.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {pageData.pricing && (
        <div>
          <h2>Pricing</h2>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: pageData.pricing.currency,
            }).format(pageData.pricing.amount)}
          </p>
        </div>
      )}
    </div>
  );
}

// Make page content dynamic
export const dynamic = "force-dynamic";
