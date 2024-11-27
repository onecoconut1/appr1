import SiteLayout from "@/components/layouts/SiteLayout";
import { getSiteConfig } from "@/lib/getSiteConfig";

export default function HomePage({ siteConfig }) {
  return (
    <SiteLayout siteConfig={siteConfig}>
      <h1>Welcome to {siteConfig.name}</h1>
      <div>
        {siteConfig.features.enableCourses && (
          <section>
            <h2>Our Courses</h2>
            {/* Course content */}
          </section>
        )}

        {siteConfig.features.enableEvents && (
          <section>
            <h2>Upcoming Events</h2>
            {/* Events content */}
          </section>
        )}
      </div>
    </SiteLayout>
  );
}

export async function getStaticPaths() {
  // Generate paths for all sites
  const domains = {
    "r1.caashishkapoor.com": "r1-portal",
    "r2.caashishkapoor.com": "r2-portal",
  };

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
