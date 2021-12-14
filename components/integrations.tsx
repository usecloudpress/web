import Link from "next/link";

export default function Integrations() {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Works with your favourite CMS
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-7 text-gray-500">
              Cloudpress supports exporting from Google Docs to a wide range of
              Content Management Systems and publishing platforms
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <Link href="/integrations/wordpress/">
              <a className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-brand-100">
                <img
                  className="max-h-12"
                  src="/images/logos/wordpress.svg"
                  alt="WordPress logo"
                />
              </a>
            </Link>
            <Link href="/integrations/webflow/">
              <a className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-brand-100">
                <img
                  className="max-h-12"
                  src="/images/logos/webflow.svg"
                  alt="Webflow logo"
                />
              </a>
            </Link>
            <Link href="/integrations/contentful/">
              <a className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-brand-100">
                <img
                  className="max-h-12"
                  src="/images/logos/contentful.svg"
                  alt="Contentful logo"
                />
              </a>
            </Link>
            <Link href="/integrations/kentico/">
              <a className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-brand-100">
                <img
                  className="max-h-12"
                  src="/images/logos/kontent.svg"
                  alt="Kontent logo"
                />
              </a>
            </Link>
            <Link href="/integrations/sanity/">
              <a className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 hover:bg-brand-100">
                <img
                  className="max-h-12"
                  src="/images/logos/sanity.svg"
                  alt="Sanity logo"
                />
              </a>
            </Link>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <img
                className="max-h-12"
                src="/images/logos/dev.svg"
                alt="dev.to logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
