import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";

const integrations = [
  {
    name: "Contentful",
    href: "/integrations/export-google-docs-to-contentful/",
    logo: "contentful.png",
  },
  {
    name: "Kontent.ai",
    href: "/integrations/export-google-docs-to-kontent-ai/",
    logo: "kontent.png",
  },
  {
    name: "Sanity",
    href: "/integrations/export-google-docs-to-sanity/",
    logo: "sanity.png",
  },
  {
    name: "Webflow",
    href: "/integrations/export-google-docs-to-webflow/",
    logo: "webflow.png",
  },
  {
    name: "WordPress",
    href: "/integrations/export-google-docs-to-wordpress/",
    logo: "wordpress.png",
  },
];

const Navbar = () => {
  return (
    <Popover className="relative bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <span className="sr-only"> Cloudpress</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="/cloudpress-logo.svg"
                  alt="Cloudpress Logo"
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-6">
            <Link href="/features">
              <a className="text-base font-medium text-gray-700 hover:text-gray-700 p-2 hover:text-gray-900 hover:bg-gray-100 rounded-md">
                Features
              </a>
            </Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={clsx(
                      open ? "text-gray-900" : "text-gray-700",
                      "group inline-flex items-center text-base font-medium text-gray-700 hover:text-gray-700 p-2 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                    )}
                  >
                    <span>Integrations</span>
                    <ChevronDownIcon
                      className={clsx(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-1 mt-1 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid bg-white gap-6 p-6">
                          {integrations.map((item) => (
                            <Link key={item.name} href={item.href}>
                              <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                <img
                                  className="w-6 h-6"
                                  src={`/images/logos/square/${item.logo}`}
                                  alt={`${item.name} logo`}
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link href="/pricing">
              <a className="text-base font-medium text-gray-700 hover:text-gray-700 p-2 hover:text-gray-900 hover:bg-gray-100 rounded-md">
                Pricing
              </a>
            </Link>
            <Link href="/docs">
              <a className="text-base font-medium text-gray-700 hover:text-gray-700 p-2 hover:text-gray-900 hover:bg-gray-100 rounded-md">
                Documentation
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-base font-medium text-gray-700 hover:text-gray-700 p-2 hover:text-gray-900 hover:bg-gray-100 rounded-md">
                Blog
              </a>
            </Link>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="https://app.usecloudpress.com/login">
              <a className="whitespace-nowrap text-base font-medium text-gray-700 hover:text-gray-700 p-2 hover:text-gray-900 hover:bg-gray-100 rounded-md">
                Log in
              </a>
            </Link>
            <Link href="https://app.usecloudpress.com/register">
              <a className="ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-600 hover:bg-brand-700">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 z-10 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/cloudpress-logo.svg"
                    alt="Cloudpress Logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/features">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Features
                      </span>
                    </a>
                  </Link>
                  <Link href="/pricing">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Pricing
                      </span>
                    </a>
                  </Link>
                  <Link href="/docs">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Documentation
                      </span>
                    </a>
                  </Link>
                  <Link href="/blog">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Blog
                      </span>
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <Link href="https://app.usecloudpress.com/register">
                  <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-600 hover:bg-brand-700">
                    Sign Up
                  </a>
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{" "}
                  <Link href="https://app.usecloudpress.com/login">
                    <a className="text-brand-600 hover:text-brand-500">
                      Log in
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
