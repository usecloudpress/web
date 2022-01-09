import { CheckCircleIcon } from "@heroicons/react/solid";
import Link from "next/link";

const includedFeatures = [
  "Link as many CMS accounts as you want",
  "Invite unlimited users",
  "Export via our Google Docs Add-On",
  "Export via our API (coming soon)",
  "Automate with our Zapier integration (coming soon)",
];
const faqs = [
  {
    question: "Does 1 export use 1 credit?",
    answer: (
      <>
        <p>
          No, an export typically uses more than 1 credit. You use a credit each
          time we upload or download content, meaning that each image inside
          your document is counted separately. Also, a single image typically
          consumes two credits - one for downloading the image, and another one
          for uploading the image to your CMS.
        </p>
        <p>
          As an example a document with 2 images will cost you 5 credits - 2
          credits for downloading the images, 2 credits for uploading the
          images, and 1 credit for uploading the text content of the document
        </p>
        <p>
          For a more detailed explanation on how credits work in Cloudpress,
          please{" "}
          <Link href="//docs/credit-usage">
            <a>refer to our documentation</a>
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    question: "When do my credits expire?",
    answer:
      "Your credits never expire. Buy credits in bulk to save money, then use them at your leisure.",
  },
];

export default function Pricing() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2
                id="pricing"
                className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl"
              >
                Fair usage-based pricing
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                No monthly commitment required. Simply buy credits up-front and
                use them to export content.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-100" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                    All features included
                  </h3>
                  <p className="mt-6 text-base text-gray-500">
                    Everyone gets access to all the features with no artificial
                    limitations based on pricing tiers. It costs us money to
                    export your content, therefore you only pay when you export
                    content.
                  </p>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                        What&apos;s included
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />
                    </div>
                    <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                      {includedFeatures.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start lg:col-span-1"
                        >
                          <div className="flex-shrink-0">
                            <CheckCircleIcon
                              className="h-5 w-5 text-green-400"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                  <div className="flex justify-center">
                    <table className="w-72 lg:w-60 text-gray-700">
                      <tr>
                        <td className="pb-3 text-left">100 credits</td>
                        <td className="pb-3 text-right font-semibold">$25</td>
                      </tr>
                      <tr>
                        <td className="pb-3 text-left">200 credits</td>
                        <td className="pb-3 text-right font-semibold">$46</td>
                      </tr>
                      <tr>
                        <td className="pb-3 text-left">500 credits</td>
                        <td className="pb-3 text-right font-semibold">$110</td>
                      </tr>
                      <tr>
                        <td className="pb-3 text-left">1,000 credits</td>
                        <td className="pb-3 text-right font-semibold">$200</td>
                      </tr>
                      <tr>
                        <td className="pb-3 text-left">2,000 credits</td>
                        <td className="pb-3 text-right font-semibold">$350</td>
                      </tr>
                      <tr>
                        <td className="pb-3 text-left">5,000 credits</td>
                        <td className="pb-3 text-right font-semibold">$800</td>
                      </tr>
                      <tr>
                        <td className="pb-3 text-left">10,000 Credits</td>
                        <td className="pb-3 text-right font-semibold">
                          $1,500
                        </td>
                      </tr>
                    </table>
                  </div>
                  <p className="mt-4 text-sm">
                    <Link href="/docs/credit-usage">
                      <a className="font-medium text-gray-500 underline">
                        Learn about how credits are used
                      </a>
                    </Link>
                  </p>
                  <div className="mt-6">
                    <div className="rounded-md shadow">
                      <a
                        href="https://app.usecloudpress.com/register"
                        className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700"
                      >
                        Create an Account
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:pb-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Can’t find the answer you’re looking for? Reach out to our{" "}
                <a
                  href="mailto:support@usecloudpress.com"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  customer support
                </a>{" "}
                team.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base text-gray-500 prose max-w-none">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
