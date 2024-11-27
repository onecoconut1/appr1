/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "r1.caashishkapoor.com",
            },
          ],
          destination: "/_sites/r1/:path*",
        },
        {
          source: "/:path*",
          has: [
            {
              type: "host",
              value: "r2.caashishkapoor.com",
            },
          ],
          destination: "/_sites/r2/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
