import { NextSeo } from "next-seo";
import Layout from "../components/layouts/Layout";
import clsx from "clsx";
import { Disclosure, Listbox, RadioGroup } from "@headlessui/react";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import { CheckCircleIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const toPascalCase = (str: string) =>
  (str.match(/[a-zA-Z0-9]+/g) || [])
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join("");

const faqs = [
  {
    question: "Do the prices include VAT/Tax?",
    answer:
      "No, the above prices do not include VAT or other taxes. Taxes are calculated during checkout based on your country and region.",
  },
  {
    question: "What counts as an export?",
    answer:
      "Each time you export a document, we count it as an export. If you re-export a document, that counts as a separate export.",
  },
  {
    question: "Do export credits expire?",
    answer:
      "The exports you receive when you purchase a pay-as-you-go bundle never expire. Exports received as part of a subscription expire at the end of each calendar month and do not carry over to the next calendar month.",
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
        Yes. The pay-as-you-go bundles target occasional users or users with a
        low volume. A great example of this may be a solo blogger who posts 4 or
        5 blog posts a month.
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
  name: "PayAsYouGo" | "Subscription";
  title: string;
  id: string;
  featured: boolean;
  description: string;
}[] = [
  {
    name: "PayAsYouGo",
    title: "Pay-as-you-go",
    id: "tier-payasyougo",
    featured: false,
    description:
      "For solo bloggers with few monthly exports who do not want to make a monthly commitment.",
  },
  {
    name: "Subscription",
    title: "Subscription",
    id: "tier-subscription",
    featured: true,
    description:
      "For users with a higher number of exports. Get access to all the Cloudpress features.",
  },
];
const sections: {
  name: string;
  features: {
    name: string;
    tiers: { PayAsYouGo: string | boolean; Subscription: string | boolean };
  }[];
}[] = [
  {
    name: "Connections",
    features: [
      {
        name: "Source connections",
        tiers: {
          PayAsYouGo: "Unlimited",
          Subscription: "Unlimited",
        },
      },
      {
        name: "Destination connections",
        tiers: {
          PayAsYouGo: "Unlimited",
          Subscription: "Unlimited",
        },
      },
    ],
  },
  {
    name: "Export clients",
    features: [
      {
        name: "Export Content page",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
      {
        name: "Google Workspace Add-on",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
      {
        name: "Cloudpress API",
        tiers: { PayAsYouGo: false, Subscription: true },
      },
    ],
  },
  {
    name: "Content export features",
    features: [
      {
        name: "Export content with correct formatting",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
      {
        name: "Export images",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
      {
        name: "Advanced formatting",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
      {
        name: "Generates embeds",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
      {
        name: "Exports additional field values",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
    ],
  },
  {
    name: "Integrations",
    features: [
      {
        name: "Google Docs",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
      {
        name: "Notion",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
      {
        name: "WordPress",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
      {
        name: "Webflow",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
      {
        name: "Contentful",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
      {
        name: "Sanity",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
      {
        name: "Kontent.ai",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
    ],
  },
  {
    name: "Automation",
    features: [
      {
        name: "Collections",
        tiers: { PayAsYouGo: false, Subscription: true },
      },
      {
        name: "Cloudpress API",
        tiers: { PayAsYouGo: false, Subscription: true },
      },
      {
        name: "Make.com integration",
        tiers: { PayAsYouGo: false, Subscription: true },
      },
    ],
  },
  {
    name: "User Management",
    features: [
      {
        name: "Users",
        tiers: { PayAsYouGo: "1", Subscription: "Unlimited" },
      },
      {
        name: "Roles",
        tiers: { PayAsYouGo: false, Subscription: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Email support",
        tiers: { PayAsYouGo: true, Subscription: true },
      },
    ],
  },
];

type BillingInterval = "monthly" | "annually";

interface SubscriptionPlan {
  exports: number;
  monthly: number;
  annually: number;
}

const subscriptionPlans: SubscriptionPlan[] = [
  {
    exports: 25,
    monthly: 19,
    annually: 190,
  },
  {
    exports: 50,
    monthly: 29,
    annually: 290,
  },
  {
    exports: 100,
    monthly: 49,
    annually: 490,
  },
  {
    exports: 200,
    monthly: 95,
    annually: 950,
  },
  {
    exports: 300,
    monthly: 145,
    annually: 1450,
  },
  {
    exports: 400,
    monthly: 180,
    annually: 1800,
  },
  {
    exports: 500,
    monthly: 219,
    annually: 2190,
  },
];

function FeatureComparison() {
  return (
    <section className="relative bg-white lg:pt-14 hidden md:block">
      <div className="mx-auto max-w-7xl py-12 px-6 sm:pb-24 sm:pt-8 lg:px-8">
        <div aria-labelledby="comparison-heading">
          <h2 className="text-center text-4xl font-bold pb-12">
            Feature comparison
          </h2>

          <div className="grid grid-cols-3 gap-x-8 border-t border-gray-900/10 before:block">
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
                      tier.featured ? "text-blue-600" : "text-gray-900",
                      "text-sm font-semibold leading-6"
                    )}
                  >
                    {tier.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    {tier.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-16">
            {sections.map((section) => (
              <div key={section.name}>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {section.name}
                </h3>
                <div className="relative -mx-8 mt-2">
                  {/* Fake card backgrounds */}
                  <div
                    className="absolute inset-y-0 inset-x-8 grid grid-cols-3 gap-x-8 before:block"
                    aria-hidden="true"
                  >
                    <div className="h-full w-full rounded-lg bg-gray-50 shadow-sm" />
                    <div className="h-full w-full rounded-lg bg-gray-50 shadow-sm" />
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
                            className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
                          >
                            {feature.name}
                            {featureIdx !== section.features.length - 1 ? (
                              <div className="absolute inset-x-8 mt-3 h-px bg-gray-200" />
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
                                        : "text-gray-900",
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
                                        className="mx-auto h-5 w-5 text-gray-400"
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
                    className="pointer-events-none absolute inset-y-0 inset-x-8 grid grid-cols-3 gap-x-8 before:block"
                    aria-hidden="true"
                  >
                    {tiers.map((tier) => (
                      <div
                        key={tier.id}
                        className={clsx(
                          tier.featured
                            ? "ring-2 ring-blue-600"
                            : "ring-1 ring-gray-900/10",
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
      <div className="mx-auto max-w-3xl divide-y-2 divide-gray-200">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <dl className="mt-6 space-y-6 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt className="text-lg">
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                      <span className="font-medium text-gray-900">
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
                    <p className="text-base text-gray-500">{faq.answer}</p>
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
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>("monthly");
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan>(
    subscriptionPlans[0]
  );

  const includedFeatures = [
    "Export from Google Docs",
    "Export from Notion",
    "Connect unlimited CMS accounts",
    "Collections",
    "Make.com integration",
    "API access",
    "Unlimited users",
  ];

  return (
    <Layout>
      <NextSeo title="Cloudpress pricing plans" />
      <div className="bg-white">
        <div className="max-w-3xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-bold text-gray-900 sm:text-center">
              Pricing
            </h1>
            <p className="mt-5 text-xl text-gray-800 sm:text-center">
              Simple pricing based on the number of documents you export each
              month.
            </p>
          </div>
        </div>

        <section className="mt-8 mb-16 bg-white sm:mt-12">
          <div className="relative">
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-lg border rounded-lg border-slate-200 lg:flex lg:max-w-none">
                <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                    Subscription
                  </h3>
                  <p className="mt-6 text-base text-gray-500">
                    Our subscription plans give you access to all the features
                    of Cloudpress. You can select a pricing plan based on the
                    number of documents you export each month.
                  </p>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 bg-white pr-4 text-base font-semibold text-gray-900">
                        What&apos;s included
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />
                    </div>
                    <ul className="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0">
                      {includedFeatures.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start lg:col-span-1"
                        >
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="h-5 w-5 text-blue-600"
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
                <div className="bg-gray-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12">
                  <div className="relative">
                    <RadioGroup
                      value={billingInterval}
                      onChange={setBillingInterval}
                      className="grid grid-cols-2"
                    >
                      {["monthly", "annually"].map((interval) => (
                        <RadioGroup.Option
                          key={interval}
                          value={interval}
                          className={clsx(
                            "cursor-pointer border border-gray-300 py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400",
                            interval === "monthly"
                              ? "rounded-l-lg"
                              : "-ml-px rounded-r-lg"
                          )}
                        >
                          {toPascalCase(interval)}
                        </RadioGroup.Option>
                      ))}
                    </RadioGroup>
                    <div
                      aria-hidden="true"
                      className={clsx(
                        "pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-blue-600 transition-all duration-300",
                        billingInterval === "monthly"
                          ? "[clip-path:inset(0_50%_0_0)]"
                          : "[clip-path:inset(0_0_0_calc(50%-1px))]"
                      )}
                    >
                      {["monthly", "annually"].map((interval) => (
                        <div
                          key={interval}
                          className={clsx(
                            "py-2 text-center text-sm font-semibold text-white [&:not(:focus-visible)]:focus:outline-none",
                            interval === "annually" && "-ml-px"
                          )}
                        >
                          {toPascalCase(interval)}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
                    <span>
                      $
                      {billingInterval === "monthly"
                        ? selectedPlan.monthly
                        : selectedPlan.annually}
                    </span>
                    <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">
                      USD
                    </span>
                  </div>
                  <div className="mt-8">
                    <Listbox value={selectedPlan} onChange={setSelectedPlan}>
                      <div className="relative">
                        <Listbox.Button className="relative w-full cursor-default border border-slate-300 bg-white py-2 pl-3 pr-10 text-left hover:border-slate-500 hover:shadow-md focus:border-black focus:outline-none focus:ring-1 focus:ring-black">
                          <span className="block truncate">
                            {selectedPlan.exports} exports / month
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <ChevronUpDownIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {subscriptionPlans.map((item) => (
                            <Listbox.Option
                              key={item.exports}
                              value={item}
                              className={({ active }) =>
                                clsx(
                                  { "bg-slate-100": active },
                                  "relative cursor-default select-none py-2 pl-3 pr-9 text-slate-900"
                                )
                              }
                            >
                              <div className="flex flex-col gap-y-1 items-start">
                                <span className="block truncate font-bold">
                                  $
                                  {billingInterval === "monthly"
                                    ? item.monthly
                                    : item.annually}
                                </span>
                                <span className="block truncate">
                                  {item.exports} exports / month
                                </span>
                              </div>
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </div>
                    </Listbox>
                  </div>
                  <div className="mt-6">
                    <div className="rounded-md shadow">
                      <a
                        href="https://app.usecloudpress.com/register"
                        className="flex items-center justify-center rounded-md border border-transparent text-white bg-brand-600 hover:bg-brand-500  px-5 py-3 text-base font-medium text-white"
                      >
                        Start your free trial
                      </a>
                    </div>
                  </div>
                  <div className="mt-4 text-sm font-medium text-slate-900">
                    You get <span className="font-bold">5 free exports</span> to
                    try Cloudpress out!
                  </div>
                </div>
              </div>
              <div className="mx-auto max-w-lg lg:max-w-7xl mt-4">
                <div className="flex flex-col gap-6 rounded-lg p-8 border border-slate-200 sm:p-10 lg:flex-row lg:items-center lg:gap-8">
                  <div className="lg:min-w-0 lg:flex-1">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-slate-900">
                      Pay-as-you-go bundles
                    </h3>
                    <div className="mt-2 text-base leading-7 text-slate-600">
                      For occasional users, or users with low volume, we also
                      offer pay-as-you-go bundles that allow you to buy export
                      credits up-front and use at your own pace. Pricing starts
                      at{" "}
                      <span className="font-bold text-slate-900">
                        $29 (USD)
                      </span>{" "}
                      for 20 export credits.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeatureComparison />

        <section className="max-w-7xl mx-auto bg-white py-4 sm:px-6 lg:px-8 px-4">
          <Faqs />
        </section>
      </div>
    </Layout>
  );
}
