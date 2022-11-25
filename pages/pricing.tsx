import { NextSeo } from "next-seo";
import Layout from "../components/layouts/Layout";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { Disclosure } from "@headlessui/react";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";

const faqs = [
  {
    question: "Do the prices include VAT/Tax?",
    answer:
      "No, the above prices do not include VAT or other taxes. Taxes are calculated during checkout based on your country and region.",
  },
  {
    question: "What is a credit?",
    answer:
      "Cloudpress uses a credit system to record usage. You receive credits by buying a credit bundle or a subscription, which includes the number of credits indicated in the pricing table above. Each time you export a document, we deduct 1 credit.",
  },
  {
    question: "Do credits expire?",
    answer:
      "The credits you receive when you purchase a credit bundle never expire. Credits received as part of a subscription expire at the end of each calendar month and do not carry over to the next calendar month.",
  },
  {
    question: "Do you have a free trial?",
    answer:
      "Yes! You receive 5 free credits to try Cloudpress out when you sign up. The trial has no functional limitations other than that you are limited to 5 exports. After that, you must buy a credit bundle or subscription to export more documents.",
  },
  {
    question: "Which features are included in each plan?",
    answer:
      "You have access to all the features of Cloudpress regardless of whether you buy a credit bundle or subscription.",
  },
];

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

interface PricingColumnProps {
  title: string;
  description: string;
  products: { credits: number; price: number; suffix?: string }[];
  highlight?: { borderClass: string; labelClass: string; label: string };
}

function PricingColumn({
  title,
  description,
  products,
  highlight,
}: PricingColumnProps) {
  return (
    <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm relative flex">
      {highlight && (
        <>
          {/*<div
            className={clsx(
              "pointer-events-none absolute inset-0 rounded-lg border-2",
              highlight.borderClass
            )}
            aria-hidden="true"
          ></div>*/}
          <div className="absolute inset-x-0 top-0 translate-y-px transform">
            <div className="flex -translate-y-1/2 transform justify-center">
              <span
                className={clsx(
                  "inline-flex rounded-full px-4 py-1 text-base font-semibold text-white",
                  highlight.labelClass
                )}
              >
                {highlight.label}
              </span>
            </div>
          </div>
        </>
      )}
      <div className="p-6 pt-8 flex flex-col w-full">
        <h2 className="text-lg font-semibold leading-6 text-gray-900">
          {title}
        </h2>
        <p className="mt-4 text-sm text-gray-500">{description}</p>
        <ul className="mt-6 space-y-4 grow">
          {products.map((p) => (
            <li key={p.credits} className="grid grid-cols-2">
              <div>
                {p.credits} Credits {p.suffix && "per month"}
              </div>
              <div className="text-right">
                <span className="font-bold">${p.price}</span>
                {p.suffix && (
                  <span className="text-slate-500">/{p.suffix}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-y-4 mt-8 ">
          <p className="text-slate-600 text-center">
            Sign up today and you will receive{" "}
            <span className="font-bold">5 free credits</span> to try out
            Cloudpress!
          </p>
          <a
            href="https://app.usecloudpress.com/register"
            className="block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
          >
            Start a free trial
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <Layout>
      <NextSeo title="Cloudpress pricing plans" />
      <div className="bg-white">
        <div className="max-w-3xl mx-auto pt-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">
              Pricing
            </h1>
            <p className="mt-5 text-xl text-gray-500 sm:text-center">
              All Cloudpress features are included regardless of the bundle or
              subscription plan you choose. You pay only for exporting content.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8 px-4">
          <div className="space-y-4 grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
            <PricingColumn
              title="Credit Bundles"
              description="Credit bundles allow you to export content without any long term financial commitment."
              products={[
                { credits: 20, price: 20 },
                { credits: 50, price: 69 },
                { credits: 100, price: 129 },
                { credits: 200, price: 219 },
                { credits: 500, price: 509 },
                { credits: 1000, price: 999 },
              ]}
            />
            <PricingColumn
              title="Monthly Subscription"
              description="Save money on exports by committing to a monthly subscription."
              highlight={{
                borderClass: "border-blue-600",
                labelClass: "bg-blue-600",
                label: "Commit and Save",
              }}
              products={[
                { credits: 25, price: 19, suffix: "month" },
                {
                  credits: 50,
                  price: 29,
                  suffix: "month",
                },
                {
                  credits: 100,
                  price: 49,
                  suffix: "month",
                },
                {
                  credits: 200,
                  price: 95,
                  suffix: "month",
                },
                {
                  credits: 300,
                  price: 145,
                  suffix: "month",
                },
                {
                  credits: 400,
                  price: 180,
                  suffix: "month",
                },
                {
                  credits: 500,
                  price: 219,
                  suffix: "month",
                },
              ]}
            />
            <PricingColumn
              title="Annual Subscription"
              description="Get 2 months free when you commit to an annual subscription"
              highlight={{
                borderClass: "border-green-600",
                labelClass: "bg-green-600",
                label: "2 Months Free",
              }}
              products={[
                { credits: 25, price: 190, suffix: "year" },
                {
                  credits: 50,
                  price: 290,
                  suffix: "year",
                },
                {
                  credits: 100,
                  price: 490,
                  suffix: "year",
                },
                {
                  credits: 200,
                  price: 950,
                  suffix: "year",
                },
                {
                  credits: 300,
                  price: 1450,
                  suffix: "year",
                },
                {
                  credits: 400,
                  price: 1800,
                  suffix: "year",
                },
                {
                  credits: 500,
                  price: 2190,
                  suffix: "year",
                },
              ]}
            />
          </div>
          <Faqs />
        </div>
      </div>
    </Layout>
  );
}
