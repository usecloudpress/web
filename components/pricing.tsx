import Link from "next/link";

export default function Pricing() {
  return (
    <div className="bg-brand-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block mb-4">Ready to dive in?</span>
          <span className="block text-brand-600">
            Start using the Cloudpress Beta for free today.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="https://app.usecloudpress.com/register">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-600 hover:bg-brand-700">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
