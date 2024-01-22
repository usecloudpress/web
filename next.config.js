/** @type {import('next').NextConfig} */
const oldDocsRedirects = require("./old-docs-redirects");
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
    return [...oldDocsRedirects];
  },
};
