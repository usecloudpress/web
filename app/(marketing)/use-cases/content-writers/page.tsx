import GenericCta from "../../../../components/generic-cta";
import PageHeaderSection from "../../../../components/page-header-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloudpress for Content Managers",
  description:
    "Learn how using Cloudpress in combination with Google Docs can help content managers stay on top of things",
};

export default function ContentWritersPage() {
  return (
    <>
      <PageHeaderSection
        heading="Cloudpress for Content Writers"
        subHeading="Use cases"
        supportingText="Learn how using Cloudpress in combination with Google Docs can help content writers"
      />
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits */}
        <div>
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <li>
              <div className="flex">
                <div className="shrink-0">
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
                <div className="shrink-0">
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
                <div className="shrink-0">
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
                      href="https://apps.apple.com/app/apple-store/id842842640"
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
                <div className="shrink-0">
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
                    images or external sources related to keywords without ever
                    having to leave your document.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="shrink-0">
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
                    Google Docs has a built-in spelling and grammar checker that
                    will highlight any spelling or grammatical error as you are
                    typing.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="shrink-0">
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
                    Give your Google Docs superpowers by installing add-ons that
                    will extend the standard capabilities of Google Docs. The
                    possibilities are endless.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="shrink-0">
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

      <GenericCta />
    </>
  );
}
