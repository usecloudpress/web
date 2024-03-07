import React from "react";
import "../global.css";
import Script from "next/script";
import Image from "next/image";
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
        <Script async defer src="https://sa.usecloudpress.com/latest.js" />
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '429649826192788');
            fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <Image
            src="https://www.facebook.com/tr?id=429649826192788&ev=PageView&noscript=1"
            height={1}
            width={1}
            alt=""
            style={{ display: "none" }}
          />
        </noscript>
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
        <GoogleAnalytics gaId="G-DR99SXYCWL" />
      </body>
    </html>
  );
}
