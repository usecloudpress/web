import Link from "next/link";
import contentfulLogo from "../public/images/logos/contentful.png";
import kontentLogo from "../public/images/logos/kontent.png";
import sanityLogo from "../public/images/logos/sanity.png";
import webflowLogo from "../public/images/logos/webflow.png";
import wordPressLogo from "../public/images/logos/wordpress.png";
import Image from "next/image";

export default function Integrations() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl leading-9 font-bold text-gray-900 sm:text-4xl sm:leading-10">
              Works with your CMS
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-7 text-gray-800">
              Cloudpress supports exporting content to a wide range of Content
              Management Systems and publishing platforms.
            </p>
            <p className="mt-3 max-w-3xl text-lg leading-7 text-gray-800">
              Don&apos;t see yours on the list?{" "}
              <Link
                href="mailto:hello@usecloudpress.com"
                className="font-semibold leading-7 text-blue-600"
              >
                Let us know
              </Link>{" "}
              and we can look into adding support for it.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <Link
              href="/integrations/export-google-docs-to-wordpress"
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-brand-100"
            >
              <Image
                className="max-h-12"
                src={wordPressLogo}
                alt="WordPress logo"
                style={{ objectFit: "contain" }}
              />
            </Link>
            <Link
              href="/integrations/export-google-docs-to-webflow"
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-brand-100"
            >
              <Image
                className="max-h-12"
                src={webflowLogo}
                alt="Webflow logo"
                style={{ objectFit: "contain" }}
              />
            </Link>
            <Link
              href="/integrations/export-google-docs-to-contentful"
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-brand-100"
            >
              <Image
                className="max-h-12"
                src={contentfulLogo}
                alt="Contentful logo"
                style={{ objectFit: "contain" }}
              />
            </Link>
            <Link
              href="/integrations/export-google-docs-to-kontent-ai"
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-brand-100"
            >
              <Image
                className="max-h-12"
                src={kontentLogo}
                alt="Kontent logo"
                style={{ objectFit: "contain" }}
              />
            </Link>
            <Link
              href="/integrations/export-google-docs-to-sanity"
              className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-brand-100"
            >
              <Image
                className="max-h-12"
                src={sanityLogo}
                alt="Sanity logo"
                style={{ objectFit: "contain" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
