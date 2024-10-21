"use client";
import { Disclosure } from "@headlessui/react";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import clsx from "clsx";

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
      "Exports received as part of a subscription expire at the end of each calendar month and do not carry over to the next calendar month.",
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
];
export default function Faq() {
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
