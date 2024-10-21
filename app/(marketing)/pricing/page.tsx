import { Metadata } from "next";
import Testimonials from "../../../components/testimonials";
import PageHeaderSection from "../../../components/page-header-section";
import FeatureComparison from "./feature-comparison";
import PricingTable from "./pricing-table";
import Faq from "./faq";
import { mergeSeo } from "../../../lib/merge-seo";

export const metadata: Metadata = mergeSeo({
  title: "Cloudpress Pricing plans",
  description:
    "We offer three plans to cater for everyone from solo bloggers to large agencies managing exports of behalf of multiple clients.",
});

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

        <Testimonials />

        <FeatureComparison />

        <section className="max-w-7xl mx-auto bg-white py-4 sm:px-6 lg:px-8 px-4">
          <Faq />
        </section>
      </div>
    </>
  );
}
