/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove the rewrites configuration as we're handling it in middleware
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "x-custom-header",
            value: "my custom header value",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Add any custom rewrites here if needed
      ],
    };
  },
};

export default nextConfig;
