import InlineIntegrationDropdown from "./inline-integration-dropdown";
import ImageComparison from "./image-comparison";
import { Integration, thisIntegration } from "../lib/Integrations";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";

type Props = {
  source: string;
  destination: string;
  imageCompare1: StaticImageData;
  imageCompare2: StaticImageData;
};

export default function IntegrationLandingPageHeader({
  source,
  destination,
  imageCompare1,
  imageCompare2,
}: Props) {
  const [sourceIntegration, setSourceIntegration] =
    useState<Integration | null>(null);
  const [destinationIntegration, setDestinationIntegration] =
    useState<Integration | null>(null);

  useEffect(() => {
    setSourceIntegration(thisIntegration("source", source, destination));
    setDestinationIntegration(
      thisIntegration("destination", source, destination)
    );
  }, [source, destination]);

  if (sourceIntegration === null || destinationIntegration === null) {
    return <div />;
  }

  return (
    <>
      {/* Heading */}
      <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-36 lg:pb-40 lg:px-8">
        <section className="xl mx-auto lg:max-w-4xl ">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight leading-snug font-extrabold text-gray-900 md:text-6xl md:leading-snug space-y-4">
              Export content from{" "}
              <InlineIntegrationDropdown
                kind="source"
                source={source}
                destination={destination}
              />{" "}
              to{" "}
              <InlineIntegrationDropdown
                kind="destination"
                source={source}
                destination={destination}
              />
            </h1>
            <h2 className="mt-8 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-2xl md:max-w-6xl">
              Write and collaborate in {sourceIntegration!.name}, then export
              your content to {destinationIntegration!.name} with the click of a
              button. Or even better - put your entire content publishing
              workflow on autopilot with our powerful API and automation tools.
            </h2>
          </div>
        </section>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1"></div>
          <div className="flex-1 w-full bg-brand-100"></div>
        </div>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 pb-5">
          <ImageComparison
            image1={imageCompare1}
            image1Label={sourceIntegration.name}
            image2={imageCompare2}
            image2Label={destinationIntegration.name}
          />
        </div>
      </div>
    </>
  );
}
