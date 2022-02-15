import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Product
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/features">
                      <a className="text-base leading-6 text-gray-300 hover:text-white">
                        Features
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing">
                      <a className="text-base leading-6 text-gray-300 hover:text-white">
                        Pricing
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Use Cases
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/use-cases/content-managers">
                      <a className="text-base leading-6 text-gray-300 hover:text-white">
                        Content Managers
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/use-cases/content-writers">
                      <a className="text-base leading-6 text-gray-300 hover:text-white">
                        Content Writers
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Resources
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/docs/">
                      <a className="text-base leading-6 text-gray-300 hover:text-white">
                        Documentation
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/">
                      <a className="text-base leading-6 text-gray-300 hover:text-white">
                        Blog
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Legal
                </h4>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/privacy/">
                      <a className="text-base leading-6 text-gray-300 hover:text-white">
                        Privacy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms/">
                      <a className="text-base leading-6 text-gray-300 hover:text-white">
                        Terms
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
              Address
            </h4>
            <p className="mt-4 text-gray-300 text-base leading-6">
              Unit 346, 3/F, Peninsula Centre
              <br />
              67 Mody Road, Tsim Sha Tsui
              <br />
              Kowloon, Hong Kong
              <br />
            </p>
            <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase mt-8">
              Contact
            </h4>
            <p className="mt-4 text-gray-300 text-base leading-6">
              <a
                href="mailto:hello@usecloudpress.com"
                className="text-base leading-6 text-gray-300 hover:text-white"
              >
                hello@usecloudpress.com
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex md:order-2">
            <a
              href="https://twitter.com/usecloudpress"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCo13PRFISQnV0g6jOApFzHw"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-6 text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">YouTube</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 576 512"
              >
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Cloudpress Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
