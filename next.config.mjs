/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        // Add your domain mappings for development
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "r1.caashishkapoor.com",
            },
            {
              type: "host",
              value: "r2.caashishkapoor.com",
            },
          ],
          destination: "/_sites/renocampus/:path*",
        },
        // Add similar rules for other domains
      ],
    };
  },
};

export default nextConfig;
