/** @type {import('next').NextConfig} */
module.exports = {
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
