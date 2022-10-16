import Link from "next/link";
import clsx from "clsx";
import { DocsSection } from "./navigationLinks";
import { useRouter } from "next/router";
import React from "react";
import { BookOpenIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

interface Props {
  className?: string;
  section: DocsSection | undefined;
}

function DocumentationSection({
  title,
  slug,
  currentSection,
  logo,
}: {
  title: string;
  slug: string;
  currentSection: DocsSection | undefined;
  logo: React.ReactNode;
}) {
  return (
    <li>
      <Link href={slug}>
        <a
          className={clsx(
            "-m-3 p-3 flex items-center rounded-md hover:bg-gray-50",
            currentSection?.href === slug
              ? "text-blue-500"
              : "text-slate-500 hover:text-slate-700"
          )}
        >
          <div className="flex gap-x-2 items-center">
            <div className="rounded-md p-1 ring-1 ring-slate-200">{logo}</div>
            <span className="font-semibold">{title}</span>
          </div>
        </a>
      </Link>
    </li>
  );
}

export function Navigation({ className, section }: Props) {
  const router = useRouter();
  const slugElements = router.query.slug as string[];
  const currentPath = slugElements ? `/docs/${slugElements.join("/")}` : "";

  return (
    <nav className={clsx("text-base lg:text-sm", className)}>
      <h3 className="font-display font-semibold">Documentation Sections</h3>
      <ul className="mt-2">
        <DocumentationSection
          title="Quick start"
          slug="/docs/quick-start"
          currentSection={section}
          logo={<RocketLaunchIcon className="w-5 h-5" />}
        />
        <DocumentationSection
          title="Reference"
          slug="/docs/reference"
          currentSection={section}
          logo={<BookOpenIcon className="w-5 h-5" />}
        />
        <DocumentationSection
          title="Integrations"
          slug="/docs/integrations"
          currentSection={section}
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx={12} cy={5} r={2}></circle>
              <circle cx={5} cy={19} r={2}></circle>
              <circle cx={19} cy={19} r={2}></circle>
              <circle cx={12} cy={14} r={3}></circle>
              <line x1={12} y1={7} x2={12} y2={11}></line>
              <line x1="6.7" y1="17.8" x2="9.5" y2="15.8"></line>
              <line x1="17.3" y1="17.8" x2="14.5" y2="15.8"></line>
            </svg>
          }
        />
      </ul>
      <div className="my-4 w-full border-t border-t-2 border-slate-200" />
      <ul className="space-y-9">
        {section?.items.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-semibold text-slate-900">
              {section.title}
            </h2>
            <ul className="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200">
              {section.items.map((link) => (
                <li key={link.href} className="relative">
                  <Link href={link.href}>
                    <a
                      className={clsx(
                        "block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
                        link.href === currentPath
                          ? "font-semibold text-blue-500 before:bg-blue-500"
                          : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block"
                      )}
                    >
                      {link.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
