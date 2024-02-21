import { Metadata } from "next";
import { mergeSeo } from "../../../lib/merge-seo";

export const metadata: Metadata = mergeSeo({
  title: "Privacy policy",
});

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-white pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-20 lg:px-8">
        <div className="max-w-lg mx-auto lg:max-w-4xl">
          <div>
            <h1 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Google API Disclosure
            </h1>
            <div className="prose max-w-none mt-8">
              <p>
                Cloudpress' use and transfer to any other app of information
                received from Google APIs will adhere to{" "}
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google API Services User Data Policy
                </a>
                , including the Limited Use requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
