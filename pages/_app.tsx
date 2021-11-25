import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";

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
        title="Export content from Google Docs to your website"
        description="Export content from Google Docs to your blog or website with the click of a button"
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
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
