import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Hero from "./hero";
import Integrations from "../../components/integrations";
import GenericCta from "../../components/generic-cta";
import { CheckIcon, CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import {
  ConnectionIcon,
  ExportIcon,
  HandDrawnArrowIcon,
} from "../../components/icons";
import CtaButton from "../../components/ctaButton";
import Testimonials from "../../components/testimonials";

function ToDoListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="p-3 border border-gray-200 bg-gray-50 rounded-lg font-semibold flex gap-x-3 items-center text-gray-900">
      <CheckIcon className="w-8 h-8 text-gray-800" />
      {children}
    </li>
  );
}

const gettingStartedSteps = [
  {
    name: "Sign up",
    description:
      "Sign up for a free Cloudpress account. You just need a username and password and takes less than a minute.",
    href: "/docs/quick-start/register-an-account",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Connect your accounts",
    description:
      "Connect your Content Management System account and, if you want to export from Notion, your Notion account as well.",
    href: "/docs/reference/connections/add-connection",
    icon: ConnectionIcon,
  },
  {
    name: "Export content",
    description: (
      <>
        Start exporting your content and see you Cloudpress speeds up the
        process. We give you{" "}
        <span className="font-bold">five free exports</span> to try it out.
      </>
    ),
    href: "/docs/reference/export/introduction",
    icon: ExportIcon,
  },
];

export const metadata: Metadata = {};

export default function Page() {
  return (
    <>
      <Hero />
      <section className="bg-white pt-12 sm:pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-5xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Reduce the size of your content publishing checklist
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              With Cloudpress you spend less time copying and fixing your
              content, and more time on the creative stuff
            </p>
          </div>
          <div className="flex mt-16 max-w-3xl mx-auto gap-x-4 flex-col sm:flex-row">
            <div className="flex-1">
              <ul className="flex flex-col gap-y-2">
                <li className="text-center mb-3">
                  <h3 className="text-2xl font-bold">Before Cloudpress</h3>
                </li>
                <ToDoListItem>Write content</ToDoListItem>
                <ToDoListItem>Copy content to CMS</ToDoListItem>
                <ToDoListItem>Fix formatting errors</ToDoListItem>
                <ToDoListItem>Upload and relink images</ToDoListItem>
                <ToDoListItem>Create embeds for YouTube videos</ToDoListItem>
                <ToDoListItem>Upload featured image</ToDoListItem>
                <ToDoListItem>Set category and author</ToDoListItem>
                <ToDoListItem>Publish</ToDoListItem>
              </ul>
            </div>
            <div className="flex-1 mt-8 sm:mt-0">
              <ul className="flex flex-col gap-y-2 h-full">
                <li className="text-center mb-3">
                  <h3 className="text-2xl font-bold">With Cloudpress</h3>
                </li>
                <ToDoListItem>Write content</ToDoListItem>
                <ToDoListItem>Click export button</ToDoListItem>
                <li className="border border-green-200 bg-green-50 rounded-lg grow">
                  <div className="flex flex-col h-full p-4 min-h-[200px] gap-y-4">
                    <div className="flex-1 flex items-start justify-center">
                      <HandDrawnArrowIcon className="w-20 h-20" />
                    </div>
                    <div className="text-center px-10 font-script text-3xl">
                      more time for running your business and doing creative
                      work
                    </div>
                    <div className="flex-1 flex items-end justify-center">
                      <HandDrawnArrowIcon className="w-20 h-20 rotate-180" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-gray-100 py-24 pb-12 sm:py-32 sm:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Start exporting in three easy steps
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              Getting started with Cloudpress and exporting your first document
              takes three easy steps
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {gettingStartedSteps.map((step) => (
                <div key={step.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <step.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {step.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{step.description}</p>
                    <p className="mt-6">
                      <Link
                        href={step.href}
                        className="text-base font-semibold leading-7 text-blue-600"
                      >
                        <span>
                          Read the documentation{" "}
                          <span aria-hidden="true">→</span>
                        </span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="text-center mt-12 sm:mt-20">
          <CtaButton />
        </div>
      </section>

      {/* Integrations */}
      <Integrations />

      <section className="bg-blue-700 py-24 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-xl max-w-none text-white mx-4 lg:mx-0">
            <p>
              You&apos;d rather write content, run your business, or do other
              creative work. Instead, you have to spend time struggling with
              getting your content from Google Docs and Notion into your CMS,
              wasting time correcting formatting, reuploading images, and doing
              other menial tasks to get your content published.
            </p>
            <p className="font-bold">
              It shouldn&apos;t be this complicated, right?
            </p>
            <p>
              We hear you,{" "}
              <span className="font-bold">and we&apos;ve got your back</span>.
              At Cloudpress, we automate exporting your content from Google Docs
              and Notion. We&apos;ll ensure that the content is perfectly
              formatted in your CMS, and also take care of things like uploading
              images and setting additional fields like the author, category,
              and tags.
            </p>
            <p>
              This frees up your time to do the work that matters. The work that
              moves your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <GenericCta />
    </>
  );
}
