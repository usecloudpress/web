import { Metadata } from "next";
import Testimonials from "../../../components/testimonials";
import PageHeaderSection from "../../../components/page-header-section";
import FeatureComparison from "./feature-comparison";
import PricingTable from "./pricing-table";
import Faq from "./faq";

export const metadata: Metadata = {
  title: "Pricing plans",
};

export default function PricingPage() {
  return (
    <>
      <div className="bg-white">
        <PageHeaderSection
          heading="Pricing plans for teams of all sizes"
          subHeading="Pricing"
          supportingText="We offer three plans to cater for everyone from solo bloggers to large agencies managing exports of behalf of multiple clients."
        />

        <PricingTable />

        <div className="mx-auto max-w-lg lg:max-w-7xl mt-4 px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-lg p-8 border border-slate-200 sm:p-10 lg:flex-row lg:items-center lg:gap-8">
            <div className="lg:min-w-0 lg:flex-1">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-slate-900">
                Pay-as-you-go bundles
              </h3>
              <div className="mt-2 text-base leading-7 text-slate-600">
                For occasional users, or users with low volume, we also offer
                pay-as-you-go bundles that allow you to buy export credits
                up-front and use at your own pace. Pay-as-you-go bundles are
                limited to{" "}
                <span className="font-bold text-slate-900">
                  a single user account
                </span>
                , allow you to connect{" "}
                <span className="font-bold text-slate-900">
                  a single CMS account
                </span>
                , and{" "}
                <span className="font-bold text-slate-900">
                  excludes all our automation and content conversion features
                </span>
                . Pricing starts at{" "}
                <span className="font-bold text-slate-900">$45 (USD)</span> for
                20 export credits.
              </div>
            </div>
          </div>
        </div>

        <Testimonials />

        <FeatureComparison />

        <section className="max-w-7xl mx-auto bg-white py-4 sm:px-6 lg:px-8 px-4">
          <Faq />
        </section>
      </div>
    </>
  );
}
