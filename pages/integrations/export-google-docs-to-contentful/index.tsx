import Link from "next/link";
import { NextSeo } from "next-seo";
import Layout from "../../../components/layout";
import imageCompare1 from "./compare-1.png";
import imageCompare2 from "./compare-2.png";
import imageWrite from "./write.png";
import imageAddOn from "./add-on.png";
import imageFormatting from "./formatting.png";
import imageImages from "./images.png";
import imageModelConfiguration from "./model-configuration.png";
import imageReexport from "./reexport.png";
import IntegrationLandingPageHeader from "../../../components/integration-landing-page-header";
import IntegrationCta from "../../../components/integration-cta";

export default function ContentfulPage() {
  const source = "google-docs";
  const destination = "contentful";

  return (
    <>
      <NextSeo title="Export from Google Docs to Contentful" />
      <Layout>
        <IntegrationLandingPageHeader
          source={source}
          destination={destination}
          imageCompare1={imageCompare1}
          imageCompare2={imageCompare2}
        />

        {/* Write in Google Docs */}
        <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:py-40 lg:px-8">
          <section className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Write in Google Docs
                </h4>
                <div className="mt-8 prose prose-lg lg:prose-xl leading-8">
                  <p>
                    Keep using the powerful editing and collaboration features
                    that make Google Docs such a great writing tool.
                  </p>
                  <p>
                    <Link href="/blog/write-your-next-blog-post-in-google-docs/">
                      <a>Read more</a>
                    </Link>{" "}
                    about why we think Google Docs is a great choice for writing
                    content.
                  </p>
                </div>
              </div>
              <div className="mt-10 -mx-4 relative lg:mt-0">
                <img
                  className="relative mx-auto shadow-xl"
                  src={imageWrite.src}
                  alt=""
                  width="490"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Export with one click */}
        <div className="bg-white py-24 px-4 sm:px-6 lg:py-40 lg:px-8">
          <section className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Export with one click
                </h4>
                <div className="mt-8 prose prose-lg lg:prose-xl leading-8">
                  <p>
                    Export your content without ever leaving Google Docs with
                    our Add-On. Just click the export button and wait for the
                    export to finish.
                  </p>
                  <p>
                    Once your export has completed, you can easily navigate to
                    the exported content in Contentful to edit any additional
                    fields or publish the content.
                  </p>
                  <p>
                    <Link href="/docs/introduction-to-the-google-docs-add-on/">
                      <a>Learn more</a>
                    </Link>{" "}
                    about our Google Docs Add-on.
                  </p>
                </div>
              </div>
              <div className="mt-10 -mx-4 relative lg:mt-0">
                <img
                  className="relative mx-auto shadow-xl"
                  src={imageAddOn.src}
                  alt=""
                  width="490"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Works with your Content Model */}
        <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:py-40 lg:px-8">
          <section className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Works with your Content Model
                </h4>
                <div className="mt-8 prose prose-lg lg:prose-xl leading-8">
                  <p>
                    Cloudpress works with your Content Model. Simply connect
                    your Contentful account, tell Cloudpress which fields to use
                    for the title and content of the exported document, and
                    we’ll take care of the rest.
                  </p>
                  <p>
                    <Link href="/docs/connect-contentful-account/">
                      <a>Learn how</a>
                    </Link>{" "}
                    to configure your Contentful account.
                  </p>
                </div>
              </div>
              <div className="mt-10 -mx-4 relative lg:mt-0">
                <img
                  className="relative mx-auto shadow-xl"
                  src={imageModelConfiguration.src}
                  alt=""
                  width="490"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Preserve your formatting */}
        <div className="bg-white py-24 px-4 sm:px-6 lg:py-40 lg:px-8">
          <section className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Preserve your formatting
                </h4>
                <div className="mt-8">
                  <div className="prose prose-lg lg:prose-xl leading-8">
                    <p>
                      Cloudpress does a great job of preserving your formatting
                      and handles all the common formatting styles used in
                      Google Docs, such as
                    </p>
                  </div>
                  <ul className="space-y-4 mt-5">
                    <li className="flex items-start">
                      <div className="shrink-0">
                        <svg
                          className="h-6 w-6 text-brand-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-xl leading-6 text-gray-600">
                        Headings
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="shrink-0">
                        <svg
                          className="h-6 w-6 text-brand-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-xl leading-6 text-gray-600">
                        Bold text
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="shrink-0">
                        <svg
                          className="h-6 w-6 text-brand-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-xl leading-6 text-gray-600">
                        Italic text
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="shrink-0">
                        <svg
                          className="h-6 w-6 text-brand-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-xl leading-6 text-gray-600">
                        Tables
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="shrink-0">
                        <svg
                          className="h-6 w-6 text-brand-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-xl leading-6 text-gray-600">
                        Lists
                      </p>
                    </li>
                    <li className="flex items-start">
                      <div className="shrink-0">
                        <svg
                          className="h-6 w-6 text-brand-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-xl leading-6 text-gray-600">
                        And more...
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 -mx-4 relative lg:mt-0">
                <img
                  className="relative mx-auto shadow-xl"
                  src={imageFormatting.src}
                  alt=""
                  width="490"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Export your images too */}
        <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:py-40 lg:px-8">
          <section className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Export your images too
                </h4>
                <div className="mt-8 prose prose-lg lg:prose-xl leading-8">
                  <p>
                    Cloudpress does not just work with text - your images are
                    taken along for the ride as well. Images are exported as
                    Assets to Contentful and linked correctly in the exported
                    content.
                  </p>
                </div>
              </div>
              <div className="mt-10 -mx-4 relative lg:mt-0">
                <img
                  className="relative mx-auto shadow-xl"
                  src={imageImages.src}
                  alt=""
                  width="490"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Re-export content */}
        <div className="bg-white py-24 px-4 sm:px-6 lg:py-40 lg:px-8">
          <section className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative lg:grid lg:grid-cols-2 lg:grid-flow-row-dense lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Re-export content
                </h4>
                <div className="mt-8 prose prose-lg lg:prose-xl leading-8">
                  <p>
                    Made changes and want to re-export your content from Google
                    Docs?
                  </p>
                  <p>
                    No worries. Cloudpress will update the content of the
                    previously exported content without messing up any of the
                    other fields you may have updated in Contentful.
                  </p>
                </div>
              </div>
              <div className="mt-10 -mx-4 relative lg:mt-0">
                <img
                  className="relative mx-auto shadow-xl"
                  src={imageReexport.src}
                  alt=""
                  width="490"
                />
              </div>
            </div>
          </section>
        </div>

        <IntegrationCta destination={destination} />
      </Layout>
    </>
  );
}
