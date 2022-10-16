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
    ];
  },
};
