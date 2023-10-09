import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Layout from "../../components/layouts/Layout";
import { NextSeo } from "next-seo";
import PageHeaderSection from "../../components/page-header-section";
import { LinkButton } from "../../components/buttons";
import {
  AffiliateCmsSupportIcon,
  AffiliateSingularFocusIcon,
  AffiliateSupportIcon,
  AffiliateInnovationIcon,
  AffiliateStep1Icon,
  AffiliateStep2Icon,
  AffiliateStep3Icon,
  AffiliateStep4Icon,
} from "../../components/icons";
import Link from "next/link";

const whyItems = [
  {
    name: "Singular focus",
    description:
      "We are 100% focused on improving the publishing workflow for bloggers and content writers.",
    icon: AffiliateSingularFocusIcon,
  },
  {
    name: "Top-tier Support",
    description:
      "Our support is top-tier, and our customers are our main priority.",
    icon: AffiliateSupportIcon,
  },
  {
    name: "Widest CMS support",
    description:
      "We support more Content Management Systems than any of our competitors",
    icon: AffiliateCmsSupportIcon,
  },
  {
    name: "Innovation",
    description:
      "We keep innovating with features like our Property Table and Raw Content Blocks",
    icon: AffiliateInnovationIcon,
  },
];

const howItems = [
  {
    name: "Sign Up",
    description:
      "Sign up for our affiliate program and get your unique affiliate link.",
    icon: AffiliateStep1Icon,
  },
  {
    name: "Promote",
    description:
      "Promote Cloudpress to your audience and share your affiliate link with them.",
    icon: AffiliateStep2Icon,
  },
  {
    name: "Convert",
    description:
      "When someone signs up with your affiliate link, that referral is linked to you.",
    icon: AffiliateStep3Icon,
  },
  {
    name: "Earn",
    description:
      "When a referral upgrades to a paid subscription, you earn 30% for the lifetime of their subscription.",
    icon: AffiliateStep4Icon,
  },
];

const faqs = [
  {
    question: "What is the commission percentage?",
    answer:
      "You earn a 30% commission for the lifetime of any subscription you refer.",
  },
  {
    question: "How long will I get paid for a subscription I referred?",
    answer:
      "You will get paid as long as the subscription is active. When a customer cancels their subscription, your commission will stop as well.",
  },
  {
    question: "How long is the cookie valid?",
    answer:
      "Our affiliate cookie is valid for 60 days. If someone signs up for a Cloudpress account during those 60 days, the referral will be attributed to you.",
  },
  {
    question: "Must referrals upgrade to a paid subscription within 60 days?",
    answer:
      "No. They only need to sign up for a Cloudpress account within the 60 days the cookie is valid for us to track the referral. If they upgrade to a paid subscription any time after that, you will earn a commission.",
  },
  {
    question: "How do I get paid?",
    answer: (
      <>
        You get paid every month via{" "}
        <a
          href="https://wise.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-600 hover:text-blue-500"
        >
          Wise
        </a>
        .
      </>
    ),
  },
  {
    question: "What are the payment terms?",
    answer:
      "Our payment terms are Net-30. For example, all commissions earned during March, are paid out on the 30th of April.",
  },
  {
    question: "Is there a minimum payment threshold?",
    answer:
      "Yes, the minimum threshold is $50. You will only get paid once your earnings exceed this threshold.",
  },
  {
    question: "How is your affiliate program managed?",
    answer: (
      <>
        We use{" "}
        <a
          href="https://tolt.io/"
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-600 hover:text-blue-500"
        >
          Tolt
        </a>{" "}
        to manage our affiliate program.
      </>
    ),
  },
];

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

export default function AffiliateIndex() {
  return (
    <Layout>
      <NextSeo
        title="Become an Affiliate and earn 30% commission"
        description="You can earn a commission of 30% for every customer you refer to us."
      />
      <PageHeaderSection
        heading="Earn recurring revenue by recommending Cloudpress to your audience"
        subHeading="Affiliate Program"
        supportingText="Earn 30% for life for every paying customer you refer by joining Cloudpress' affiliate program."
      />

      <JoinButton />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why promote us?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With so many other affiliate programs out there, why should you
              promote us?
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {whyItems.map((item) => (
                <div key={item.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <item.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {item.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How it works
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Go from zero to $$$ in four steps.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {howItems.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <JoinButton />

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Affiliate Program Terms
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Before you get started, here are four things you need to be aware
              of.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="prose max-w-none">
              <ol>
                <li>Self-referrals are not allowed.</li>
                <li>No abuse or attempting to mislead.</li>
                <li>
                  No search engine ads, Facebook ads, or other ads that compete
                  with our own marketing.
                </li>
                <li>
                  No pretending to be acting on behalf of us (i.e. as an
                  employee).
                </li>
              </ol>
              <p>
                For more detailed information, refer to the{" "}
                <Link href="/affiliates/terms">
                  Cloudpress Affiliate Program Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <JoinButton />
    </Layout>
  );
}
