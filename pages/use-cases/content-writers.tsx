import Link from "next/link";
import Layout from "../../components/layout";
import { NextSeo } from "next-seo";

export default function ContentWritersPage() {
  return (
    <Layout>
      <NextSeo
        title="Cloudpress for Content Managers"
        description="Learn how using Cloudpress in combination with Google Docs can
              help content managers stay on top of things"
      />

      <div className="py-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page heading */}
          <div className="lg:text-center">
            <p className="text-base leading-6 text-brand-600 font-semibold tracking-wide uppercase">
              Use Cases
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Cloudpress for Content Writers
            </h3>
            <p className="mt-8 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              Learn how using Cloudpress in combination with Google Docs can
              help content writers
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-20">
            <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 text-brand-500">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Superior writing experience
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Google Docs offer a writing experience that is light-years
                      ahead of anything being offered by the most blogging
                      software.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 text-brand-500">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Working with photos is easy-peasy
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Take photos on your phone, upload to Google Photos and
                      insert them into your document with the built-in Google
                      Photos picker.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 text-brand-500">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Write on the go
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Write your blog post on the go using the Google Docs
                      application for{" "}
                      <a
                        className="text-brand-600 hover:text-brand-500"
                        href="https://itunes.apple.com/app/apple-store/id842842640?mt=8"
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        iOS
                      </a>{" "}
                      and{" "}
                      <a
                        className="text-brand-600 hover:text-brand-500"
                        href="https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.docs&referrer=utm_source%3Ddocs_mkt%26utm_medium%3Dmobile_section%26utm_campaign%3Ddocs_mkt"
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        Android
                      </a>
                      . If you’re using a computer, the{" "}
                      <a
                        className="text-brand-600 hover:text-brand-500"
                        href="https://chrome.google.com/webstore/detail/office-editing-for-docs-s/gbkeegbaiigmenfmjfclcdgdpimamgkj?hl=en"
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        offline editing
                      </a>{" "}
                      extension allows you to work when offline.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 text-brand-500">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Research at your fingertips
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      The Google Docs Explore Tool allows you to quickly find
                      images or external sources related to keywords without
                      ever having to leave your document.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 text-brand-500">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Spelling and grammar in the box
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Google Docs has a built-in spelling and grammar checker
                      that will highlight any spelling or grammatical error as
                      you are typing.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 text-brand-500">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Rich add-on ecosystem
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Give your Google Docs superpowers by installing add-ons
                      that will extend the standard capabilities of Google Docs.
                      The possibilities are endless.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 text-brand-500">
                      <svg
                        className="w-8 h-8"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Export to your blog with one click
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Export to your blog with the click of a button. Cloudpress
                      will preserve your document’s formatting and upload your
                      images as well.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            <span className="block">Ready to export your first document?</span>
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Your first 5 exports are on us!
            </span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
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
