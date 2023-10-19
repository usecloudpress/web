"use client";

import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import React from "react";

const faqs = [
  {
    question: "Is it free to convert my document to Markdown?",
    answer: "Yes, our tool is 100% free.",
  },
  {
    question: "Do you have an API?",
    answer: (
      <>
        Yes, our Cloudpress product has an API that allows you to convert
        unlimited documents to Markdown. This is included in{" "}
        <Link
          href="https://www.usecloudpress.com/pricing"
          className="text-blue-600 hover:text-blue-500 font-semibold"
        >
          all our Cloudpress subscriptions
        </Link>
        .
      </>
    ),
  },
  {
    question: "Can you export the content to my Content Management System?",
    answer: (
      <>
        Our Cloudpress product allows you to export content from Google Docs (or
        Notion) to{" "}
        <Link
          href="/integrations/export-google-docs-to-wordpress"
          className="text-blue-600 hover:text-blue-500 font-semibold"
        >
          WordPress
        </Link>
        ,{" "}
        <Link
          href="/integrations/export-google-docs-to-webflow"
          className="text-blue-600 hover:text-blue-500 font-semibold"
        >
          Webflow
        </Link>
        ,{" "}
        <Link
          href="/integrations/export-google-docs-to-contentful"
          className="text-blue-600 hover:text-blue-500 font-semibold"
        >
          Contentful
        </Link>
        ,{" "}
        <Link
          href="/integrations/export-google-docs-to-sanity"
          className="text-blue-600 hover:text-blue-500 font-semibold"
        >
          Sanity
        </Link>
        , and{" "}
        <Link
          href="/integrations/export-google-docs-to-kontent-ai"
          className="text-blue-600 hover:text-blue-500 font-semibold"
        >
          Kontent.ai
        </Link>
        . You can try it out by{" "}
        <Link
          href="https://app.usecloudpress.com/register"
          className="text-blue-600 hover:text-blue-500 font-semibold"
        >
          signing up for a free trial account
        </Link>
        .
      </>
    ),
  },
  {
    question: "Do you get access to my entire Google Drive?",
    answer:
      "No, we only get access to the document(s) you select for export. The access token we acquire when you authenticate your Google account is stored in memory, and we do not have access to it after you close the browser tab.",
  },
  {
    question: "Do you store the content of my document?",
    answer:
      "We temporarily store your document's content on our servers so we can export it to Markdown. Once the export is complete, the content is removed from our servers.",
  },
  {
    question: "How long can I access the exported content?",
    answer:
      "We will email you a download link when the export is complete. This download link is valid for 24 hours. The ZIP file containing the exported Markdown and images is removed afterwards.",
  },
  {
    question: "You now have my email address. Will you start spamming me?",
    answer:
      "No, we do not use your email for purposes other than sending you a notification once the export is finished. Once the email is sent, we do not store your email address on our servers. The email with the download link contains a short promotional blurb about our full product, but you won’t hear from us again.",
  },
  {
    question: "What happens if the export fails?",
    answer: (
      <>
        Occasionally, we encounter a document that contains content that trips
        up our Markdown converter. If this happens, you will receive an email
        indicating that the export failed. We encourage you to contact us at{" "}
        <a href="mailto:hello@usecloudpress.com">hello@usecloudpress.com</a> to
        see if we can figure out the problem.
      </>
    ),
  },
  {
    question:
      "I have another question not addressed here. How can I contact you?",
    answer: (
      <>
        We would love to hear from you. Please send us an email at{" "}
        <a href="mailto:hello@usecloudpress.com">hello@usecloudpress.com</a>.
      </>
    ),
  },
];

export default function Faq(): JSX.Element {
  return (
    <div className="bg-white pb-12">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-18 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2
            id="faq"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center"
          >
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
  );
}
