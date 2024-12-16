import React from "react";
import "../global.css";
import Script from "next/script";
import { mergeSeo } from "../lib/merge-seo";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = mergeSeo({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
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
        <GoogleAnalytics gaId="G-DR99SXYCWL" />
      </body>
    </html>
  );
}
