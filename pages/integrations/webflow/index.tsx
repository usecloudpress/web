import Layout from "../../../components/layout";
import { NextSeo } from "next-seo";
import ImageComparison from "../../../components/image-comparison";
import imageCompare1 from "./compare-1.png";
import imageCompare2 from "./compare-2.png";
import Link from "next/link";
import imageWrite from "./write.png";
import imageAddOn from "./add-on.png";
import imageFormatting from "./formatting.png";
import imageReexport from "./reexport.png";

export default function WebflowPage() {
  return (
    <Layout>
      <NextSeo title="Export from Google Docs to Webflow" />

      {/* Heading */}
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-36 lg:pb-40 lg:px-8">
        <section className="xl mx-auto lg:max-w-4xl ">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl space-y-4">
              Export from Google Docs
              <br />
              to Webflow
            </h1>
            <p className="mt-8 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-2xl md:max-w-3xl">
              Write and collaborate in Google Docs, then export your document to
              your Webflow CMS with the click of a button
            </p>
          </div>
        </section>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1"></div>
          <div className="flex-1 w-full bg-gray-50"></div>
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 pb-5">
          <ImageComparison
            image1={imageCompare1}
            image1Label="Google Docs"
            image2={imageCompare2}
            image2Label="Webflow"
          />
        </div>
      </div>

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
                  Export your content without ever leaving Google Docs with our
                  Add-On. Just click the export button and you&apos;re done.
                </p>
                <p>
                  Once your export has completed, you can easily navigate to the
                  exported content in Webflow to add finishing touches such as
                  specifying the author, category, and other document properties
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

      {/* Preserve your formatting */}
      <div className="bg-gray-50 py-24 px-4 sm:px-6 lg:py-40 lg:px-8">
        <section className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Preserve your formatting
              </h4>
              <div className="mt-8">
                <div className="prose prose-lg lg:prose-xl leading-8">
                  <p>
                    Cloudpress does a great job of preserving your formatting.
                    It handles all the most common formatting styles used in
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
                  Docs? No worries. Cloudpress will update the content of the
                  previously exported post without messing up any of the other
                  properties you may have configured in Webflow.
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

      <div className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            <span className="block">
              Ready to export your first document to Webflow?
            </span>
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Your first 5 exports are on us!
            </span>
          </h2>
          <div className="mt-8 flex lg:shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="https://app.usecloudpress.com/register">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-brand-600 hover:bg-brand-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  Sign Up Now
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
