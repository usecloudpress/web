import Link from "next/link";

export default function Terms() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Affiliate Program Terms
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Before you get started, here are four things you need to be aware
            of.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="prose max-w-none">
            <ol>
              <li>Self-referrals are not allowed.</li>
              <li>No abuse or attempting to mislead.</li>
              <li>
                No search engine ads, Facebook ads, or other ads that compete
                with our own marketing.
              </li>
              <li>
                No pretending to be acting on behalf of us (i.e. as an
                employee).
              </li>
            </ol>
            <p>
              For more detailed information, refer to the{" "}
              <Link href="/affiliates/terms">
                Cloudpress Affiliate Program Terms of Service
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
