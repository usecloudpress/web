import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import compare1 from "../public/images/compare-1.png";
import compare2 from "../public/images/compare-2.png";
import how1 from "../public/images/how-1.png";
import how2 from "../public/images/how-2.png";
import Integrations from "../components/integrations";
import ImageComparison from "../components/image-comparison";
import Pricing from "../components/pricing";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="preload" href={compare1.src} as="image" />
        <link rel="preload" href={compare2.src} as="image" />
      </Head>
      <Layout>
        {/* Hero */}
        <div className="bg-white">
          <div className="relative overflow-hidden">
            <div className="relative pt-6 pb-12 lg:pb-20">
              <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:mt-16 lg:mt-20">
                <div className="text-center">
                  <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl space-y-7">
                    Export from Google Docs
                    <br />
                    to your CMS
                  </h1>
                  <p className="mt-8 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-16 md:text-2xl md:max-w-3xl">
                    Write and collaborate in Google Docs, then export your
                    document to your blog or website with the click of a button
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex flex-col">
                <div className="flex-1"></div>
                <div className="flex-1 w-full bg-gray-100"></div>
              </div>
              <div className="max-w-screen-lg mx-auto px-4 sm:px-6 pb-5">
                <ImageComparison
                  image1={compare1}
                  image1Label="Google Docs"
                  image2={compare2}
                  image2Label="Website"
                />
              </div>
            </div>
          </div>
        </div>

        {/* How it works  */}
        <div className="py-16 bg-gray-100 overflow-hidden lg:pb-24">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative">
              <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                How it works
              </h3>
              <p className="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
                Learn how Cloudpress helps speed up your publishing workflow
              </p>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Write in Google Docs
                </h4>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  Use the powerful editing and collaboration features of Google
                  Docs to create your content
                </p>

                <ul className="mt-10">
                  <li>
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          Powerful editing tools
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          Writing, formatting, working with images, spell
                          checking and grammar tools in the box. Google Docs
                          makes writing a breeze.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          Collaboration built in
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          Google Docs&apos; collaboration and review tools allow
                          you to easily collaborate on content with other
                          people.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <p className="mt-6 text-base leading-6 text-gray-500">
                      <Link href="/blog/write-your-next-blog-post-in-google-docs/">
                        <a className="text-brand-600 hover:text-brand-500 font-semibold">
                          Read more
                        </a>
                      </Link>{" "}
                      about why we think Google Docs is a great choice for
                      writing content.
                    </p>
                  </li>
                </ul>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0">
                <img
                  className="relative mx-auto shadow-lg"
                  width="490"
                  src={how1.src}
                  alt=""
                />
              </div>
            </div>

            <div className="relative mt-12 sm:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                    Export with one click
                  </h4>
                  <p className="mt-3 text-lg leading-7 text-gray-500">
                    Once you have finished creating your masterpiece, exporting
                    your content to your CMS is as easy as clicking a button
                  </p>

                  <ul className="mt-10">
                    <li>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium text-gray-900">
                            Export using our Google Docs Add-On
                          </h5>
                          <p className="mt-2 text-base leading-6 text-gray-500">
                            Export content without ever leaving Google Docs with
                            our Add-On. One click and you&apos;re done.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="mt-10">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h5 className="text-lg leading-6 font-medium text-gray-900">
                            Quick navigation to exported content
                          </h5>
                          <p className="mt-2 text-base leading-6 text-gray-500">
                            Quickly navigate to the exported content in your
                            Content Management System to add the finishing
                            touches.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <p className="mt-6 text-base leading-6 text-gray-500">
                        <Link href="/blog/introducing-the-cloudpress-google-docs-add-on/">
                          <a className="text-brand-600 hover:text-brand-500 font-semibold">
                            Learn more
                          </a>
                        </Link>{" "}
                        about our Google Docs Add-on.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                  <img
                    className="relative mx-auto shadow-lg"
                    width="490"
                    src={how2.src}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <Integrations />

        {/* Pricing */}
        <Pricing />
      </Layout>
    </>
  );
};

export default Home;
