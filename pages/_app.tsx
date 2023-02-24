import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
import { useRouter } from "next/router";
import "../global.css";

function MyApp({ Component, pageProps }: AppProps) {
  const CANONICAL_DOMAIN = "https://www.usecloudpress.com";

  const router = useRouter();
  const _pathSliceLength = Math.min.apply(Math, [
    router.asPath.indexOf("?") > 0
      ? router.asPath.indexOf("?")
      : router.asPath.length,
    router.asPath.indexOf("#") > 0
      ? router.asPath.indexOf("#")
      : router.asPath.length,
  ]);
  const canonicalURL =
    CANONICAL_DOMAIN + router.asPath.substring(0, _pathSliceLength);

  return (
    <>
      <DefaultSeo
        title="Export content from Google Docs and Notion to your website"
        description="Export your content from Google Docs and Notion to your blog or website with the click of a button with images and formatting perfectly preserved"
        titleTemplate="%s | Cloudpress"
        canonical={canonicalURL}
        openGraph={{
          type: "website",
          images: [
            { url: "https://www.usecloudpress.com/images/social/default.png" },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: "@usecloudpress",
          handle: "@usecloudpress",
        }}
        additionalLinkTags={[
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
        ]}
      />
      <Component {...pageProps} />
      <Script async defer src="https://sa.usecloudpress.com/latest.js" />
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
        <img
          src="https://sa.usecloudpress.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
    </>
  );
}

export default MyApp;
