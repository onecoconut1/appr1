import SiteLayout from "@/components/layouts/SiteLayout";
import { getSiteConfig } from "@/lib/getSiteConfig";

export default function AboutPage({ siteConfig }) {
  return (
    <SiteLayout siteConfig={siteConfig}>
      <h1>About {siteConfig.name}</h1>
      {/* Site-specific about content */}
    </SiteLayout>
  );
}

export async function getStaticPaths() {
  // Generate paths for all sites
  const sites = Object.values(domains);

  const paths = sites.map((site) => ({
    params: { site },
  }));

  return {
    paths,
    fallback: "blocking", // Enable ISR for new domains
  };
}

export async function getStaticProps({ params }) {
  const siteConfig = await getSiteConfig(params.site);

  return {
    props: {
      siteConfig,
    },
    revalidate: 3600, // Revalidate every hour
  };
}
