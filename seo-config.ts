import { Metadata } from "next";

const title = "Export from Google Docs and Notion to your CMS";
const description =
  "Export from Google Docs and Notion to your Content Management System with the click of a button, or automate the entire process.";

export const SEO: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    images: [
      {
        url: "https://www.usecloudpress.com/images/social/default.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@usecloudpress",
    site: "@usecloudpress",
  },
  icons: {
    apple: "/apple-touch-icon.png",
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
};
