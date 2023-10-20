import React from "react";
import "../global.css";
import Script from "next/script";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s - Cloudpress",
    default: "Export from Google Docs and Notion to your CMS",
  },
  description:
    "Export from Google Docs and Notion to your Content Management System with the click of a button, or automate the entire process.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script async defer src="https://sa.usecloudpress.com/latest.js" />
        <Script
          async
          src="https://cdn.tolt.io/tolt.js"
          data-tolt="3ab9ca2e-cfab-48f0-926a-8dc4485fb894"
        />
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "fz73hxh1ag");`,
          }}
        />
        <noscript>
          <Image
            src="https://sa.usecloudpress.com/noscript.gif"
            width={1}
            height={1}
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </body>
    </html>
  );
}
