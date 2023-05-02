import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { DocsSection } from "./navigationLinks";
import { MobileNavigation } from "./MobileNavigation";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface Props {
  section: DocsSection | undefined;
}

export default function Header({ section }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50  bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8",
        isScrolled
          ? "dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75"
          : "dark:bg-transparent"
      )}
    >
      <div className="flex flex-wrap items-center justify-between max-w-8xl mx-auto sm:px-2 lg:px-8 xl:px-12">
        <div className="mr-6 flex lg:hidden">
          <MobileNavigation section={section} />
        </div>
        <div className="flex flex-grow basis-0 items-center">
          <Link
            href="/docs"
            aria-label="Home page"
            className="hidden"
            legacyBehavior
          >
            <div>
              <img
                className="h-9 md:hidden"
                src="/cloudpress-docs-symbol-logo.svg"
                alt="Cloudpress Doc Logo"
              />
              <img
                className="hidden h-9 w-auto fill-slate-700 dark:fill-sky-100 md:block"
                src="/cloudpress-docs-text-logo.svg"
                alt="Cloudpress Doc Logo"
              />
            </div>
          </Link>
        </div>
        <div className="-my-5 mr-6 sm:mr-8 md:mr-0">{/*<Search />*/}</div>
        <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
          <Link href="/" className="group" aria-label="GitHub">
            <span className="flex items-center">
              Cloudpress website
              <ArrowTopRightOnSquareIcon className="ml-2 w-5 h-5" />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
