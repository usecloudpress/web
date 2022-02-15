import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import { Fragment } from "react";
import classNames from "classnames";
import { CheckIcon, MinusIcon } from "@heroicons/react/solid";
import { InformationCircleIcon } from "@heroicons/react/outline";
import * as Tooltip from "@radix-ui/react-tooltip";

type PricingTier = {
  name: "Solo" | "Pro";
  href: string;
  priceMonthly: number;
  description: string;
};

type TierAvailability = {
  Solo?: boolean | string;
  Pro?: boolean | string;
};

type Feature = {
  name: string;
  description?: string;
  tiers: TierAvailability;
};

type FeatureSection = {
  name: string;
  features: Feature[];
};

const ctaText = "Sign Up";
const tiers: PricingTier[] = [
  {
    name: "Solo",
    href: "https://app.usecloudpress.com/register",
    priceMonthly: 19,
    description: "Ideal for solo bloggers and small websites",
  },
  {
    name: "Pro",
    href: "https://app.usecloudpress.com/register",
    priceMonthly: 49,
    description:
      "For companies and agencies that want to automate up their content publication pipeline",
  },
];
const sections: FeatureSection[] = [
  {
    name: "Quotas",
    features: [
      {
        name: "Credits",
        description:
          "Each time you export a document or run a job, you use one credit",
        tiers: { Solo: "50", Pro: "200" },
      },
      {
        name: "Source Connections",
        description:
          "The number of connected accounts from which you can export content",
        tiers: { Solo: "Unlimited", Pro: "Unlimited" },
      },
      {
        name: "Destination Connections",
        description:
          "The number of connected accounts to which you can export content",
        tiers: { Solo: "Unlimited", Pro: "Unlimited" },
      },
    ],
  },
  {
    name: "Features",
    features: [
      {
        name: "Export content",
        tiers: { Solo: true, Pro: true },
      },
      {
        name: "Export images",
        tiers: { Solo: true, Pro: true },
      },
      {
        name: "Preserve content formatting",
        tiers: { Solo: true, Pro: true },
      },
    ],
  },
  {
    name: "Integrations",
    features: [
      {
        name: "Google Docs",
        tiers: { Solo: true, Pro: true },
      },
      {
        name: "Notion",
        tiers: { Solo: true, Pro: true },
      },
      {
        name: "Contentful",
        tiers: { Solo: true, Pro: true },
      },
      {
        name: "Content by Kentico",
        tiers: { Solo: true, Pro: true },
      },
      {
        name: "Sanity",
        tiers: { Solo: true, Pro: true },
      },
      {
        name: "Webflow",
        tiers: { Solo: true, Pro: true },
      },
      {
        name: "WordPress",
        tiers: { Solo: true, Pro: true },
      },
    ],
  },
  {
    name: "Automation",
    features: [
      {
        name: "REST API",
        description: "Export content using the Cloudpress REST API",
        tiers: { Solo: true, Pro: true },
      },
      {
        name: "Zapier",
        tiers: { Solo: true, Pro: true },
      },
      {
        name: "Integromat",
        tiers: { Solo: true, Pro: true },
      },
      {
        name: "Jobs",
        description:
          "Jobs allow you to export a collection of pages, for example and entire folder on Google Docs",
        tiers: { Pro: true },
      },
    ],
  },
  {
    name: "User Management",
    features: [
      {
        name: "Additional users",
        tiers: { Solo: "Unlimited", Pro: "Unlimited" },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Email support",
        tiers: { Solo: true, Pro: true },
      },
    ],
  },
];

function FreeDuringBeta() {
  return (
    <div className="mt-4">
      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-brand-100 text-brand-800">
        Free during the beta
      </span>
    </div>
  );
}

export default function PricingPage() {
  return (
    <Layout>
      <NextSeo title="Cloudpress pricing plans" />
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
              Pricing Plans
            </h1>
            <p className="mt-5 text-xl text-gray-500 sm:text-center">
              Cloudpress is currently in beta and paid pricing plans will only
              come into effect at a later stage. The pricing plans below are not
              finalized, but they will give you an idea of what the pricing will
              be like.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8">
          {/* xs to lg */}
          <div className="max-w-2xl mx-auto space-y-16 lg:hidden">
            {tiers.map((tier, tierIdx) => (
              <section key={tier.name}>
                <div className="px-4 mb-8 relative">
                  <h2 className="text-lg leading-6 font-medium text-gray-900">
                    {tier.name}
                  </h2>
                  <p className="mt-4 price-strikethrough-mobile">
                    <span className="text-4xl font-extrabold text-gray-900">
                      ${tier.priceMonthly}
                    </span>{" "}
                    <span className="text-base font-medium text-gray-500">
                      /mo
                    </span>
                  </p>
                  <FreeDuringBeta />
                  <p className="mt-4 text-sm text-gray-500">
                    {tier.description}
                  </p>
                  <a
                    href={tier.href}
                    className="mt-6 block border border-transparent rounded-md bg-brand-600 w-full py-2 text-sm font-semibold text-white text-center hover:bg-brand-700"
                  >
                    {ctaText}
                  </a>
                </div>

                {sections.map((section) => (
                  <table key={section.name} className="w-full">
                    <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                      {section.name}
                    </caption>
                    <thead>
                      <tr>
                        <th className="sr-only" scope="col">
                          Feature
                        </th>
                        <th className="sr-only" scope="col">
                          Included
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {section.features.map((feature) => (
                        <tr
                          key={feature.name}
                          className="border-t border-gray-200"
                        >
                          <th
                            className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                            scope="row"
                          >
                            <div className="flex content-center">
                              <span>{feature.name}</span>
                              {feature.description && (
                                <Tooltip.Root delayDuration={0}>
                                  <Tooltip.Trigger>
                                    <InformationCircleIcon className="h-5 w-5 inline ml-1 text-gray-400 cursor-pointer" />
                                  </Tooltip.Trigger>
                                  <Tooltip.Content
                                    className="px-2 py-1.5 text-sm leading-4 font-normal shadow-sm rounded-md pointer-events-none break-words border bg-neutral-700 border-neutral-600 text-neutral-100"
                                    side="bottom"
                                    align="center"
                                  >
                                    {feature.description}
                                  </Tooltip.Content>
                                </Tooltip.Root>
                              )}
                            </div>
                          </th>
                          <td className="py-5 pr-4">
                            {typeof feature.tiers[tier.name] === "string" ? (
                              <span className="block text-sm text-gray-700 text-right">
                                {feature.tiers[tier.name]}
                              </span>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    className="ml-auto h-5 w-5 text-green-500"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <MinusIcon
                                    className="ml-auto h-5 w-5 text-gray-400"
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
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}

                <div
                  className={classNames(
                    tierIdx < tiers.length - 1 ? "py-5 border-b" : "pt-5",
                    "border-t border-gray-200 px-4"
                  )}
                >
                  <a
                    href={tier.href}
                    className="block w-full bg-brand-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-brand-700"
                  >
                    {ctaText}
                  </a>
                </div>
              </section>
            ))}
          </div>

          {/* lg+ */}
          <div className="hidden lg:block">
            <table className="w-full h-px table-fixed">
              <caption className="sr-only">Pricing plan comparison</caption>
              <thead>
                <tr>
                  <th
                    className="pb-4 px-6 text-sm font-medium text-gray-900 text-left"
                    scope="col"
                  >
                    <span className="sr-only">Feature by</span>
                    <span>Plans</span>
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className="w-1/4 pb-4 px-6 text-lg leading-6 font-bold text-gray-900 text-center"
                      scope="col"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="border-t border-gray-200 divide-y divide-gray-200">
                <tr>
                  <th
                    className="py-8 px-6 text-sm font-medium text-gray-900 text-left align-top"
                    scope="row"
                  >
                    Pricing
                  </th>
                  {tiers.map((tier) => (
                    <td
                      key={tier.name}
                      className="h-full py-8 px-6 align-top text-center"
                    >
                      <div className="relative h-full table">
                        <p className="price-strikethrough">
                          <span className="text-4xl font-extrabold text-gray-900">
                            ${tier.priceMonthly}
                          </span>{" "}
                          <span className="text-base font-medium text-gray-500">
                            /mo
                          </span>
                        </p>
                        <FreeDuringBeta />
                        <p className="mt-4 mb-16 text-sm text-gray-500">
                          {tier.description}
                        </p>
                        <a
                          href={tier.href}
                          className="absolute bottom-0 flex-grow block w-full bg-brand-600 border border-transparent rounded-md 5 py-2 text-sm font-semibold text-white text-center hover:bg-brand-700"
                        >
                          {ctaText}
                        </a>
                      </div>
                    </td>
                  ))}
                </tr>
                {sections.map((section) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        className="bg-gray-50 py-3 pl-6 text-sm font-medium text-gray-900 text-left"
                        colSpan={3}
                        scope="colgroup"
                      >
                        {section.name}
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th
                          className="py-5 px-6 text-sm font-normal text-gray-500 text-left"
                          scope="row"
                        >
                          <div className="flex content-center">
                            <span>{feature.name}</span>
                            {feature.description && (
                              <Tooltip.Root delayDuration={0}>
                                <Tooltip.Trigger>
                                  <InformationCircleIcon className="h-5 w-5 inline ml-1 text-gray-400 cursor-pointer" />
                                </Tooltip.Trigger>
                                <Tooltip.Content
                                  className="px-2 py-1.5 text-sm leading-4 font-normal shadow-sm rounded-md pointer-events-none break-words border bg-neutral-700 border-neutral-600 text-neutral-100"
                                  side="right"
                                  sideOffset={5}
                                >
                                  {feature.description}
                                </Tooltip.Content>
                              </Tooltip.Root>
                            )}
                          </div>
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.name} className="py-5 px-6 text-center">
                            {typeof feature.tiers[tier.name] === "string" ? (
                              <span className="block text-sm text-gray-700">
                                {feature.tiers[tier.name]}
                              </span>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon
                                    className="h-5 w-5 text-green-500 inline"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <MinusIcon
                                    className="h-5 w-5 text-gray-400 inline"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true
                                    ? "Included"
                                    : "Not included"}{" "}
                                  in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-gray-200">
                  <th className="sr-only" scope="row">
                    Choose your plan
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="pt-5 px-6">
                      <a
                        href={tier.href}
                        className="block w-full bg-brand-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-brand-700"
                      >
                        {ctaText}
                      </a>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
