import { NextSeo } from "next-seo";
import Layout from "../components/layouts/Layout";
import clsx from "clsx";
import { Disclosure, RadioGroup } from "@headlessui/react";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Testimonials from "../components/testimonials";
import PageHeaderSection from "../components/page-header-section";

const faqs = [
  {
    question: "Do the prices include VAT/Tax?",
    answer:
      "No, the above prices do not include VAT or other taxes. Taxes are calculated during checkout based on your country and region.",
  },
  {
    question: "What are connections?",
    answer:
      "A connection is a link you establish between Cloudpress and Notion or Cloudpress and a specific type of content on your CMS. You export documents from/to a connection.",
  },
  {
    question:
      "What counts as an export? How about when I re-export a document?",
    answer: (
      <>
        Each time you export a document to a CMS connection for the first time,
        we count it as an export. Re-exporting a previously exported document to
        the same connection does not count as an export.
        <br />
        <br />
        In other words, you can export a document to the same CMS connection
        multiple times and only use a single export credit. However, exporting
        the same document to a different CMS connection counts as a new export.
      </>
    ),
  },
  {
    question: "Do export credits expire?",
    answer:
      "The exports you receive when you purchase a pay-as-you-go bundle never expire. Exports received as part of a subscription expire at the end of each calendar month and do not carry over to the next calendar month.",
  },
  {
    question: "What are Google Docs conversions?",
    answer:
      "Allows you to convert a Google Doc to HTML or markdown via our API or Zapier and Make.com integrations. This is useful when you want to convert Google Docs into HTML or markdown for consumption by a CMS that is not currently supported by Cloudpress.",
  },
  {
    question: "Do you have a free trial?",
    answer:
      "Yes! You receive 5 free exports to try Cloudpress out when you sign up. Once your trial exports are used, you must buy an export bundle or subscription to export more documents.",
  },
  {
    question:
      "What's are the differences between the subscription and pay-as-you go bundles?",
    answer: (
      <>
        The pay-as-you-go bundles target occasional users or users with a low
        volume. A great example of this may be a solo blogger who posts 4 or 5
        blog posts a month.
        <br />
        <br />
        Therefore, features targeting users with a high export volume are only
        available to users with subscriptions - for example, our automation
        features like Collections, the Cloupress API, and Make.com integration.
      </>
    ),
  },
];

const tiers: {
  name: "Solo" | "Pro" | "Agency";
  title: string;
  id: string;
  featured: boolean;
  price: {
    monthly: string;
    annually: string;
  };
  description: string;
  features: string[];
  mostPopular: boolean;
}[] = [
  {
    name: "Solo",
    title: "Solo",
    id: "tier-solo",
    featured: false,
    price: { monthly: "$29", annually: "$290" },
    description:
      "For solo bloggers with a limited number of exports each month.",
    features: [
      "50 exports per month",
      "Unlimited Google Docs conversions",
      "1 CMS connection",
      "Automation features",
      "1 user",
    ],
    mostPopular: false,
  },
  {
    name: "Pro",
    title: "Pro",
    id: "tier-pro",
    featured: true,
    price: { monthly: "$49", annually: "$490" },
    description:
      "For companies that want to export a lot of documents to multiple CMSs.",
    features: [
      "Unlimited exports",
      "Unlimited Google Docs conversions",
      "10 CMS connections",
      "Automation features",
      "Unlimited users",
      "User roles",
    ],
    mostPopular: true,
  },
  {
    name: "Agency",
    title: "Agency",
    id: "tier-agency",
    featured: false,
    price: { monthly: "$89", annually: "$890" },
    description:
      "For agencies that export to multiple CMSs on behalf of clients.",
    features: [
      "Unlimited exports",
      "Unlimited Google Docs conversions",
      "Unlimited CMS connections",
      "Automation features",
      "Unlimited users",
      "User roles",
    ],
    mostPopular: false,
  },
];
const sections: {
  name: string;
  features: {
    name: string;
    tiers: {
      Solo: string | boolean;
      Pro: string | boolean;
      Agency: string | boolean;
    };
  }[];
}[] = [
  {
    name: "Connections",
    features: [
      {
        name: "Source connections",
        tiers: {
          Solo: "Unlimited",
          Pro: "Unlimited",
          Agency: "Unlimited",
        },
      },
      {
        name: "CMS connections",
        tiers: {
          Solo: "1",
          Pro: "10",
          Agency: "Unlimited",
        },
      },
    ],
  },
  {
    name: "Export clients",
    features: [
      {
        name: "Export Content page",
        tiers: {
          Solo: true,
          Pro: true,
          Agency: true,
        },
      },
      {
        name: "Google Workspace Add-on",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Cloudpress API",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
    ],
  },
  {
    name: "Content export features",
    features: [
      {
        name: "Export content with correct formatting",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Export images",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Advanced formatting",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Generates embeds",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Exports additional field values",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
    ],
  },
  {
    name: "Integrations",
    features: [
      {
        name: "Google Docs",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Notion",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "WordPress",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Webflow",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Contentful",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Sanity",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Kontent.ai",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
    ],
  },
  {
    name: "Automation",
    features: [
      {
        name: "Collections",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Cloudpress API",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Zapier integration",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Make.com integration",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
    ],
  },
  {
    name: "Content Conversion (via API)",
    features: [
      {
        name: "Convert Google Docs to Markdown",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
      {
        name: "Convert Google Docs to HTML",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
    ],
  },
  {
    name: "User Management",
    features: [
      {
        name: "Users",
        tiers: {
          Solo: "1",
          Pro: "Unlimited",
          Agency: "Unlimited",
        },
      },
      {
        name: "Roles",
        tiers: { Solo: false, Pro: true, Agency: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Email support",
        tiers: { Solo: true, Pro: true, Agency: true },
      },
    ],
  },
];

const frequencies: {
  value: "monthly" | "annually";
  label: string;
  priceSuffix: string;
}[] = [
  { value: "monthly", label: "Monthly", priceSuffix: "/month" },
  { value: "annually", label: "Annually", priceSuffix: "/year" },
];

function PricingTable() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-slate-200"
          >
            <RadioGroup.Label className="sr-only">
              Payment frequency
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  clsx(
                    checked ? "bg-blue-600 text-white" : "text-slate-500",
                    "cursor-pointer rounded-full py-1 px-2.5"
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={clsx(
                tier.mostPopular
                  ? "ring-2 ring-blue-600"
                  : "ring-1 ring-slate-200",
                "rounded-lg p-8 xl:p-10"
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={clsx(
                    tier.mostPopular ? "text-blue-600" : "text-slate-900",
                    "text-lg font-semibold leading-8"
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-blue-600/10 py-1 px-2.5 text-xs font-semibold leading-5 text-blue-600">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-slate-900">
                  {tier.price[frequency.value]}
                </span>
                <span className="text-sm font-semibold leading-6 text-slate-600">
                  {frequency.priceSuffix}
                </span>
              </p>
              <a
                href="https://app.usecloudpress.com/register"
                aria-describedby={tier.id}
                className={clsx(
                  tier.mostPopular
                    ? "bg-blue-600 text-white shadow-sm hover:bg-blue-500"
                    : "text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300",
                  "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                )}
              >
                Start a free trial
              </a>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-slate-600 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureComparison() {
  return (
    <section className="relative bg-white lg:pt-14 hidden md:block">
      <div className="mx-auto max-w-7xl py-12 px-6 sm:pb-24 sm:pt-8 lg:px-8">
        <div aria-labelledby="comparison-heading">
          <h2 className="text-center text-4xl font-bold pb-12">
            Feature comparison
          </h2>

          <div className="grid grid-cols-4 gap-x-8 border-t border-slate-900/10 before:block">
            {tiers.map((tier) => (
              <div key={tier.id} aria-hidden="true" className="-mt-px">
                <div
                  className={clsx(
                    tier.featured ? "border-blue-600" : "border-transparent",
                    "border-t-2 pt-10"
                  )}
                >
                  <p
                    className={clsx(
                      tier.featured ? "text-blue-600" : "text-slate-900",
                      "text-sm font-semibold leading-6"
                    )}
                  >
                    {tier.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {tier.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-16">
            {sections.map((section) => (
              <div key={section.name}>
                <h3 className="text-sm font-semibold leading-6 text-slate-900">
                  {section.name}
                </h3>
                <div className="relative -mx-8 mt-2">
                  {/* Fake card backgrounds */}
                  <div
                    className="absolute inset-y-0 inset-x-8 grid grid-cols-4 gap-x-8 before:block"
                    aria-hidden="true"
                  >
                    <div className="h-full w-full rounded-lg bg-slate-50 shadow-sm" />
                    <div className="h-full w-full rounded-lg bg-slate-50 shadow-sm" />
                    <div className="h-full w-full rounded-lg bg-slate-50 shadow-sm" />
                  </div>

                  <table className="relative w-full border-separate border-spacing-x-8">
                    <thead>
                      <tr className="text-left">
                        <th scope="col">
                          <span className="sr-only">Feature</span>
                        </th>
                        {tiers.map((tier) => (
                          <th key={tier.id} scope="col">
                            <span className="sr-only">{tier.name} tier</span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.features.map((feature, featureIdx) => (
                        <tr key={feature.name}>
                          <th
                            scope="row"
                            className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-slate-900"
                          >
                            {feature.name}
                            {featureIdx !== section.features.length - 1 ? (
                              <div className="absolute inset-x-8 mt-3 h-px bg-slate-200" />
                            ) : null}
                          </th>
                          {tiers.map((tier) => (
                            <td
                              key={tier.id}
                              className="relative w-1/4 px-4 py-0 text-center"
                            >
                              <span className="relative h-full w-full py-3">
                                {typeof feature.tiers[tier.name] ===
                                "string" ? (
                                  <span
                                    className={clsx(
                                      tier.featured
                                        ? "font-semibold text-blue-600"
                                        : "text-slate-900",
                                      "text-sm leading-6"
                                    )}
                                  >
                                    {feature.tiers[tier.name]}
                                  </span>
                                ) : (
                                  <>
                                    {feature.tiers[tier.name] === true ? (
                                      <CheckIcon
                                        className="mx-auto h-5 w-5 text-blue-600"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <XMarkIcon
                                        className="mx-auto h-5 w-5 text-slate-400"
                                        aria-hidden="true"
                                      />
                                    )}

                                    <span className="sr-only">
                                      {feature.tiers[tier.name] === true
                                        ? "Yes"
                                        : "No"}
                                    </span>
                                  </>
                                )}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Fake card borders */}
                  <div
                    className="pointer-events-none absolute inset-y-0 inset-x-8 grid grid-cols-4 gap-x-8 before:block"
                    aria-hidden="true"
                  >
                    {tiers.map((tier) => (
                      <div
                        key={tier.id}
                        className={clsx(
                          tier.featured
                            ? "ring-2 ring-blue-600"
                            : "ring-1 ring-slate-900/10",
                          "rounded-lg"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faqs() {
  return (
    <div className="mx-auto max-w-7xl py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl divide-y-2 divide-slate-200">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-slate-200">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-slate-400">
                      <span className="font-medium text-slate-900">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          className={clsx(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base text-slate-500">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <Layout>
      <NextSeo title="Cloudpress pricing plans" />
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
          <Faqs />
        </section>
      </div>
    </Layout>
  );
}
