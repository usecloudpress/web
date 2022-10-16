import React, { useCallback, useEffect, useState } from "react";
import Footer from "../footer";
import { Navigation } from "../docs/Navigation";
import { Prose } from "../Prose";
import { TocItem } from "../markdown/helpers";
import Link from "next/link";
import clsx from "clsx";
import { DocsSection, getDocumentationSection } from "../docs/navigationLinks";
import { useRouter } from "next/router";
import Header from "../docs/Header";

type Props = {
  title: string;
  tableOfContents: TocItem[];
  children: React.ReactNode;
};

function useTableOfContents(tableOfContents: TocItem[]) {
  const [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id);

  const getHeadings = useCallback((tableOfContents: TocItem[]) => {
    return tableOfContents
      .flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
      .map((id) => {
        const el = document.getElementById(id);
        if (!el) {
          return;
        }
        const style = window.getComputedStyle(el);
        const scrollMt = parseFloat(style.scrollMarginTop);

        const top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
        return { id, top };
      });
  }, []);

  useEffect(() => {
    if (tableOfContents.length === 0) {
      return;
    }
    const headings = getHeadings(tableOfContents);

    function onScroll() {
      const top = window.scrollY;
      let current = headings[0]!.id;
      for (const heading of headings) {
        if (top >= heading!.top) {
          current = heading!.id;
        } else {
          break;
        }
      }
      setCurrentSection(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [getHeadings, tableOfContents]);

  return currentSection;
}

const DocumentationLayout = ({
  title,
  tableOfContents = [],
  children,
}: Props) => {
  let docsSection: DocsSection | undefined;
  const sectionRegex = /^\/docs\/([a-zA-Z-])*/;
  const router = useRouter();
  const matches = router.asPath.match(sectionRegex);
  if (matches) {
    docsSection = getDocumentationSection(matches[0]);
  }
  const navigationSection = docsSection?.items.find((section) =>
    section.items.find((item) => item.href === router.asPath)
  );
  const currentContentSection = useTableOfContents(tableOfContents);

  function isActive(section: TocItem): boolean {
    if (section.id === currentContentSection) {
      return true;
    }
    if (!section.children) {
      return false;
    }
    return section.children.findIndex(isActive) > -1;
  }

  return (
    <>
      <Header section={docsSection} />

      <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
        <div className="hidden lg:relative lg:block lg:flex-none">
          <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50" />
          <div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800" />
          <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800" />
          <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5">
            <Navigation
              section={docsSection}
              className="w-64 pr-8 xl:w-72 xl:pr-16"
            />
          </div>
        </div>
        <div className="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
          <article>
            {(title || navigationSection) && (
              <header className="mb-9 space-y-1">
                {navigationSection && (
                  <p className="font-display text-sm font-semibold text-blue-500">
                    {navigationSection.title}
                  </p>
                )}
                {title && (
                  <h1 className="font-semibold text-3xl tracking-tight text-slate-900">
                    {title}
                  </h1>
                )}
              </header>
            )}
            <Prose>{children}</Prose>
          </article>
          {/*<dl className="mt-12 flex border-t border-slate-200 pt-6">
            {previousPage && (
              <div>
                <dt className="font-display text-sm font-medium text-slate-900">
                  Previous
                </dt>
                <dd className="mt-1">
                  <Link
                    href={previousPage.href}
                    className="text-base font-semibold text-slate-500 hover:text-slate-600"
                  >
                    <span aria-hidden="true">&larr;</span> {previousPage.title}
                  </Link>
                </dd>
              </div>
            )}
            {nextPage && (
              <div className="ml-auto text-right">
                <dt className="font-display text-sm font-medium text-slate-900">
                  Next
                </dt>
                <dd className="mt-1">
                  <Link
                    href={nextPage.href}
                    className="text-base font-semibold text-slate-500 hover:text-slate-600"
                  >
                    {nextPage.title} <span aria-hidden="true">&rarr;</span>
                  </Link>
                </dd>
              </div>
            )}
          </dl>*/}
        </div>
        <div className="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
          <nav aria-labelledby="on-this-page-title" className="w-56">
            {tableOfContents.length > 0 && (
              <>
                <h2
                  id="on-this-page-title"
                  className="font-display text-sm font-semibold text-slate-900"
                >
                  On this page
                </h2>
                <ol className="mt-4 space-y-3 text-sm">
                  {tableOfContents.map((section) => (
                    <li key={section.id}>
                      <h3>
                        <Link href={`#${section.id}`}>
                          <a
                            className={clsx(
                              isActive(section)
                                ? "text-blue-500"
                                : "font-normal text-slate-500 hover:text-slate-700"
                            )}
                          >
                            {section.title}
                          </a>
                        </Link>
                      </h3>
                      {section.children.length > 0 && (
                        <ol className="mt-2 space-y-3 pl-5 text-slate-500">
                          {section.children.map((subSection) => (
                            <li key={subSection.id}>
                              <Link href={`#${subSection.id}`}>
                                <a
                                  className={
                                    isActive(subSection)
                                      ? "text-blue-500"
                                      : "hover:text-slate-600"
                                  }
                                >
                                  {subSection.title}
                                </a>
                              </Link>
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ol>
              </>
            )}
          </nav>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DocumentationLayout;
