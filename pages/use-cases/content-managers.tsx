import { NextSeo } from "next-seo";
import Layout from "../../components/layouts/Layout";
import GenericCta from "../../components/generic-cta";
import PageHeaderSection from "../../components/page-header-section";

export default function ContentManagersPage() {
  return (
    <Layout>
      <NextSeo
        title="Cloudpress for Content Managers"
        description="Learn how using Cloudpress in combination with Google Docs can
              help content managers stay on top of things"
      />

      <PageHeaderSection
        heading="Cloudpress for Content Managers"
        subHeading="Use cases"
        supportingText="Learn how using Cloudpress in combination with Google Docs can help content managers stay on top of things"
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
                    Collaboration built-in
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    With Google Docs’ collaboration features, you can leave
                    feedback for your writers or suggest changes to content.
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
                    Keep content in-house
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Keep content in-house on your company’s Team Drive and share
                    with collaborators as needed.
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
                    Keep revision history
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Revision History allows you to keep a full history of
                    changes. Easily roll back to an old version if necessary.
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
                    Check SEO
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Easily check SEO for your document using any of the SEO
                    add-ons available in the Google Apps Store.
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
                    Export with one click
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Export to your blog or website with the click of a button.
                    Cloudpress will preserve your document’s formatting and
                    upload your images as well.
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
                    Keep up to date on document changes
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Cloudpress notifies you of changes made to documents and
                    allows you to publish those changes with the click of a
                    button.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <GenericCta />
    </Layout>
  );
}
