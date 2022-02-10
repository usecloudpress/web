import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import compare1 from "../public/images/compare-1.png";
import compare2 from "../public/images/compare-2.png";
import how1 from "../public/images/how-1.png";
import how2 from "../public/images/how-2.png";
import how3 from "../public/images/how-3.png";
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
          <div className="overflow-hidden">
            <div className="pt-6 pb-12 lg:pb-20">
              <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:mt-16 lg:mt-20">
                <div className="text-center">
                  <h1 className="text-4xl tracking-tight leading-snug font-extrabold text-gray-900 md:text-6xl md:leading-snug space-y-4">
                    Export content from{" "}
                    <span className="bg-gradient-to-r from-cyan-500 to-brand-500 text-transparent bg-clip-text">
                      Google Docs
                    </span>
                    <br />
                    or{" "}
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                      Notion
                    </span>{" "}
                    to your CMS
                  </h1>
                  <p className="mt-8 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-16 md:text-2xl md:max-w-3xl">
                    Keep using the writing tools that you love, then export your
                    masterpiece with the click of a button to your blog or
                    website
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex flex-col">
                <div className="flex-1"></div>
                <div className="flex-1 w-full bg-brand-100"></div>
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
        <div className="py-16 bg-gradient-to-b from-brand-100 to-white overflow-hidden lg:pb-24">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative">
              <h3 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                🚀 Supercharge your content publishing workflow 🚀
              </h3>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h4 className="text-2xl leading-8 font-bold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Use the writing tools{" "}
                  <span className="underline underline-offset-2 decoration-brand-500 decoration-4">
                    you love
                  </span>
                </h4>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  Both Google Docs and Notion are great for writing and
                  collaborating on content. You don&apos;t need to compromise
                  and settle for a sub-par experience.
                </p>
                <p className="mt-6 text-base leading-6 text-gray-500">
                  <Link href="/blog/write-your-next-blog-post-in-google-docs/">
                    <a className="text-brand-600 hover:text-brand-500 font-semibold">
                      Read more
                    </a>
                  </Link>{" "}
                  about why we think Google Docs is a great choice for writing
                  content.
                </p>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0">
                <img
                  className="relative mx-auto shadow-xl"
                  width="490"
                  src={how1.src}
                  alt=""
                />
              </div>
            </div>

            <div className="relative mt-12 sm:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <h4 className="text-2xl leading-8 font-bold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                    Perfect exports with{" "}
                    <span className="underline underline-offset-2 decoration-brand-500 decoration-4">
                      one click
                    </span>
                  </h4>
                  <p className="mt-3 text-lg leading-7 text-gray-500">
                    Once you have completed your masterpiece, there is no need
                    to struggle with copy-and-paste. With the click of a button,
                    you can export your content to your CMS with all your
                    formatting and images perfectly preserved.
                  </p>
                  <p className="mt-6 text-base leading-6 text-gray-500">
                    <Link href="/blog/our-new-google-workspace-add-on">
                      <a className="text-brand-600 hover:text-brand-500 font-semibold">
                        Learn more
                      </a>
                    </Link>{" "}
                    about our Google Docs Add-on.
                  </p>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                  <img
                    className="relative mx-auto shadow-xl"
                    width="490"
                    src={how2.src}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h4 className="text-2xl leading-8 font-bold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Automate{" "}
                  <span className="underline underline-offset-2 decoration-brand-500 decoration-4">
                    all the things
                  </span>
                </h4>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  Is clicking a button still slowing you down?{" "}
                  <span className="bg-yellow-100">Coming soon</span>, you will
                  be able to put your content publishing on autopilot with our
                  automation tools and API.
                </p>
                <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold leading-4 bg-brand-200 text-brand-800 mt-4">
                  Coming Soon
                </span>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0">
                <img
                  className="relative mx-auto shadow-xl"
                  width="490"
                  src={how3.src}
                  alt=""
                />
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
