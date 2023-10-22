import PageHeaderSection from "../../../components/page-header-section";
import { LinkButton } from "../../../components/buttons";
import Why from "./Why";
import How from "./How";
import Terms from "./Terms";
import Faq from "./Faq";
import { mergeSeo } from "../../../lib/merge-seo";

function JoinButton() {
  return (
    <div className="mx-4">
      <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:max-w-screen-xl">
        <div className="text-center">
          <LinkButton
            size="2xl"
            variant="primary"
            target="_blank"
            href="https://affiliates.usecloudpress.com"
          >
            Join our Affiliate Program
          </LinkButton>
        </div>
      </section>
    </div>
  );
}

export const metadata = mergeSeo({
  title: "Become an Affiliate and earn 30% commission",
  description:
    "You can earn a commission of 30% for every customer you refer to us.",
});

export default function Page() {
  return (
    <>
      <PageHeaderSection
        heading="Earn recurring revenue by recommending Cloudpress to your audience"
        subHeading="Affiliate Program"
        supportingText="Earn 30% for life for every paying customer you refer by joining Cloudpress' affiliate program."
      />
      <JoinButton />
      <Why />
      <How />
      <JoinButton />
      <Terms />
      <Faq />
      <JoinButton />
    </>
  );
}
