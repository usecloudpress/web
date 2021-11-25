import Link from "next/link";
import Layout from "../components/layout";
import ReactCompareImage from "react-compare-image";
import compare1 from "../public/images/compare-1.png";
import compare2 from "../public/images/compare-2.png";
import how2 from "../public/images/how-2.png";
import Integrations from "../components/integrations";

export default function Features() {
  return (
    <>
      <Layout>
        {/* Heading */}
        <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-36 lg:pb-40 lg:px-8">
          <section className="xl mx-auto lg:max-w-4xl ">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl space-y-4">
                <span className="block">Features that will</span>
                <span className="block">save you time</span>
              </h1>
            </div>
          </section>
        </div>

        {/* Seamless integration */}
        <div className="bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-20 lg:px-8">
          <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Seamless Integration with Google Docs
                </h4>
                <p className="mt-3 text-lg leading-7 text-gray-500">
                  Cloudpress seamlessly integrates with Google Docs, allowing
                  you to complete the exporting of your content without ever
                  leaving Docs.
                </p>

                <ul className="mt-10">
                  <li>
                    <div className="flex">
                      <div>
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          One-click exporting
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          Click a button, wait a few seconds, and your content
                          is exported successfully to your Content Management
                          System (CMS).
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-8">
                    <div className="flex">
                      <div>
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          Quick navigation
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          Once the export is complete, easily navigate to your
                          CMS to view or edit the exported content and add
                          finishing touches.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-8">
                    <div className="flex">
                      <div>
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          Re-export content
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          Made changes and want to export again? No problem.
                          Cloudpress will update the previously exported content
                          in your CMS.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="mt-8">
                    <div className="flex">
                      <div>
                        <h5 className="text-lg leading-6 font-medium text-gray-900">
                          Automation
                          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium leading-4 bg-brand-200 text-brand-800 ml-2">
                            Coming Soon
                          </span>
                        </h5>
                        <p className="mt-2 text-base leading-6 text-gray-500">
                          With our API and Zapier integration, you can automate
                          the exporting of your content without any human
                          intervention.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mt-10 -mx-4 relative lg:mt-0">
                <img
                  className="relative mx-auto"
                  src={how2.src}
                  alt=""
                  width="490"
                />
              </div>
            </div>
          </section>
        </div>

        {/* beautiful exports */}
        <div className="pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-20 lg:px-8">
          <section className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="mb-10 text-center">
              <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Beautiful exports
              </h4>
              <p className="mt-3 text-lg leading-7 text-gray-500">
                Our goal is to never require you to have to edit content in your
                CMS after it has been exported.
              </p>
            </div>
            <div className="max-w-screen-lg mx-auto px-4 sm:px-6 pb-16 pt-4">
              <ReactCompareImage
                leftImage={compare1.src}
                leftImageLabel="Google Docs"
                rightImage={compare2.src}
                rightImageLabel="Website"
                sliderLineColor="#A0AEC0"
                sliderLineWidth={3}
              />
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-6 w-6"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M280 48H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h272a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8zm160 384H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h432a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zM280 304H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h272a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8zm160-128H8a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h432a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Preserves formatting
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Cloudpress preserves the formatting of your content whether
                    it be headings, bold or italic text, lists, or tables.
                  </p>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-6 w-6"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm16 336c0 8.822-7.178 16-16 16H48c-8.822 0-16-7.178-16-16V112c0-8.822 7.178-16 16-16h416c8.822 0 16 7.178 16 16v288zM112 232c30.928 0 56-25.072 56-56s-25.072-56-56-56-56 25.072-56 56 25.072 56 56 56zm0-80c13.234 0 24 10.766 24 24s-10.766 24-24 24-24-10.766-24-24 10.766-24 24-24zm207.029 23.029L224 270.059l-31.029-31.029c-9.373-9.373-24.569-9.373-33.941 0l-88 88A23.998 23.998 0 0 0 64 344v28c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-92c0-6.365-2.529-12.47-7.029-16.971l-88-88c-9.373-9.372-24.569-9.372-33.942 0zM416 352H96v-4.686l80-80 48 48 112-112 80 80V352z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Exports images
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Images are exported to your CMS without fuss and Cloudpress
                    will ensure that they are embedded correctly in the exported
                    content.
                  </p>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-6 w-6"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path d="M224 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zM80 160l26.66-53.33L160 80l-53.34-26.67L80 0 53.34 53.33 0 80l53.34 26.67L80 160zm0-96c8.84 0 16 7.16 16 16s-7.16 16-16 16-16-7.16-16-16 7.16-16 16-16zm352 224l-26.66 53.33L352 368l53.34 26.67L432 448l26.66-53.33L512 368l-53.34-26.67L432 288zm0 96c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm70.63-306.04L434.04 9.37C427.79 3.12 419.6 0 411.41 0s-16.38 3.12-22.63 9.37L9.37 388.79c-12.5 12.5-12.5 32.76 0 45.25l68.59 68.59c6.25 6.25 14.44 9.37 22.63 9.37s16.38-3.12 22.63-9.37l379.41-379.41c12.49-12.5 12.49-32.76 0-45.26zM100.59 480L32 411.41l258.38-258.4 68.6 68.6L100.59 480zm281.02-281.02l-68.6-68.6L411.38 32h.03L480 100.59l-98.39 98.39z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Extra magic
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Cloudpress even has a few magic tricks up its sleeve such as
                    handing code blocks and oEmbeds.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* secure */}
        <div className="bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-20 lg:px-8">
          <section className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <h4 className="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                    Secure
                  </h4>
                  <p className="mt-3 text-lg leading-7 text-gray-500">
                    We take the privacy of your content seriously. Cloudpress
                    only has access to the documents you explicitly give it
                    access to.
                  </p>
                  <p className="mt-3 text-lg leading-7 text-gray-500">
                    Cloudpress does not require access to your entire Google
                    Drive and does not keep any of the exported documents on our
                    servers beyond the time it takes to complete the export.
                  </p>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1 flex justify-center text-brand-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-64 w-64"
                    fill="currentColor"
                  >
                    <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zm-47.2 114.2l-184 184c-6.2 6.2-16.4 6.2-22.6 0l-104-104c-6.2-6.2-6.2-16.4 0-22.6l22.6-22.6c6.2-6.2 16.4-6.2 22.6 0l70.1 70.1 150.1-150.1c6.2-6.2 16.4-6.2 22.6 0l22.6 22.6c6.3 6.3 6.3 16.4 0 22.6z" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Integrations */}
        <Integrations />

        <div className="bg-gray-50">
          <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Ready to export your first document?
              <br />
              <span className="text-brand-600">
                Start your free trial today.
              </span>
            </h2>
            <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
              <div className="inline-flex rounded-md shadow">
                <Link href="https://app.usecloudpress.com/register">
                  <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-brand-600 hover:bg-brand-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                    Register an account
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
