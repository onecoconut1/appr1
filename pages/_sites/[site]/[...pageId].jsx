import SiteLayout from "@/components/layouts/SiteLayout";
import { getSiteConfig } from "@/lib/getSiteConfig";
import { getPageData } from "@/lib/fakeDatabase";
import { sites } from "@/config/sites";

export default function DynamicPage({ siteConfig, pageData, path }) {
  if (!pageData) {
    return (
      <SiteLayout siteConfig={siteConfig}>
        <h1>Page Not Found</h1>
        <p>The page {path.join("/")} does not exist</p>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout siteConfig={siteConfig}>
      <h1>{pageData.title}</h1>

      {pageData.content && <p>{pageData.content}</p>}

      {pageData.features && (
        <div>
          <h2>Features</h2>
          <ul>
            {pageData.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {pageData.curriculum && (
        <div>
          <h2>Curriculum</h2>
          <ul>
            {pageData.curriculum.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <p>Price: {pageData.price}</p>
        </div>
      )}

      {pageData.address && (
        <div>
          <h2>Contact Information</h2>
          <p>Address: {pageData.address}</p>
          <p>Phone: {pageData.phone}</p>
          <p>Email: {pageData.email}</p>
        </div>
      )}
    </SiteLayout>
  );
}

export async function getStaticPaths() {
  // Return empty paths array - all pages will be generated on demand
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const siteConfig = await getSiteConfig(params.site);
  const pageData = await getPageData(params.site, params.pageId);

  if (!siteConfig || !pageData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      siteConfig,
      pageData,
      path: params.pageId,
    },
  };
}
