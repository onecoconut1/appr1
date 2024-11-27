// pages/_sites/[site]/[...pageId].jsx
import SiteLayout from "@/components/layouts/SiteLayout";
import { getSiteConfig } from "@/lib/getSiteConfig";
import { sites } from "@/config/sites";

export default function DynamicPage({ siteConfig, path }) {
  return (
    <SiteLayout siteConfig={siteConfig}>
      <h1>Dynamic Page</h1>
      <p>Current path: {path.join("/")}</p>
    </SiteLayout>
  );
}

export async function getStaticPaths() {
  // Example paths - you can add more paths that you want to pre-render
  const dynamicPaths = [
    { path: ["about"] },
    { path: ["contact"] },
    { path: ["courses", "web-development"] },
    { path: ["courses", "data-science"] },
  ];

  const paths = sites.flatMap((site) =>
    dynamicPaths.map(({ path }) => ({
      params: {
        site,
        pageId: path,
      },
    }))
  );

  return {
    paths,
    fallback: "blocking", // Generate new pages on demand
  };
}

export async function getStaticProps({ params }) {
  const siteConfig = await getSiteConfig(params.site);

  if (!siteConfig) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      siteConfig,
      path: params.pageId,
    },
    // revalidate: 3600,
  };
}
