/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.usecloudpress.com",
  generateRobotsTxt: true,
  additionalPaths: () => {
    return [
      {
        loc: "/tools/convert/google-docs-to-html",
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: "/tools/convert/google-docs-to-markdown",
        changefreq: "daily",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
    ];
  },
};
