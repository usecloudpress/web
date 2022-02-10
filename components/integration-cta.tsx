import Link from "next/link";
import { useEffect, useState } from "react";
import { Integration, thisIntegration } from "../lib/Integrations";

type Props = {
  destination: string;
};

export default function IntegrationCta({ destination }: Props) {
  const [destinationIntegration, setDestinationIntegration] =
    useState<Integration | null>(null);
  useEffect(() => {
    setDestinationIntegration(thisIntegration("destination", "", destination));
  }, [destination]);

  if (destinationIntegration === null) {
    return <div />;
  }
  return (
    <div className="bg-brand-50">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          <span className="block mb-4">
            Ready to export your first document to {destinationIntegration.name}
            ?
          </span>
          <span className="block text-brand-600">
            Sign up for the Cloudpress Beta today!
          </span>
        </h2>
        <div className="mt-8 flex lg:shrink-0 lg:mt-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="https://app.usecloudpress.com/register">
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-brand-600 hover:bg-brand-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
