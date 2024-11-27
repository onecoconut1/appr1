// pages/_sites/[site]/index.js
import SiteLayout from "@/components/layouts/SiteLayout";
import { getSiteConfig } from "@/lib/getSiteConfig";
import { sites } from "@/config/sites";

export default function HomePage({ siteConfig }) {
  return (
    <SiteLayout siteConfig={siteConfig}>
      <h1>Welcome to {siteConfig.name}</h1>
      <div>
        {siteConfig.features?.enableCourses && (
          <section>
            <h2>Our Courses</h2>
          </section>
        )}

        {siteConfig.features?.enableEvents && (
          <section>
            <h2>Upcoming Events</h2>
          </section>
        )}
      </div>
    </SiteLayout>
  );
}

export async function getStaticPaths() {
  const paths = sites.map((site) => ({
    params: { site },
  }));

  return {
    paths,
    fallback: "blocking",
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
    },
    // revalidate: 3600,
  };
}
