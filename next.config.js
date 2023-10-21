/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sa.usecloudpress.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/docs/quick-start",
        destination: "/docs/quick-start/register-an-account",
        permanent: false,
      },
      {
        source: "/docs/reference",
        destination: "/docs/reference/overview/how-cloudpress-works",
        permanent: false,
      },
      {
        source: "/docs/integrations",
        destination: "/docs/integrations/google-docs/introduction",
        permanent: false,
      },
    ];
  },
};
