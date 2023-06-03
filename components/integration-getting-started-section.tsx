import { thisIntegration } from "../lib/Integrations";
import React from "react";
import CtaButton from "./ctaButton";

interface IntegrationGettingStartedSectionProps {
  source: string;
  destination: string;
  steps: {
    description: string;
    icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  }[];
}

export default function IntegrationGettingStartedSection({
  source,
  destination,
  steps,
}: IntegrationGettingStartedSectionProps) {
  const sourceIntegration = thisIntegration("source", source, destination);
  const destinationIntegration = thisIntegration(
    "destination",
    source,
    destination
  );

  if (sourceIntegration === null || destinationIntegration === null) {
    return <div />;
  }

  return (
    <section className="bg-gray-100 py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
            Export from {sourceIntegration.name} to{" "}
            {destinationIntegration.name} in three simple steps
          </h2>
          <p className="text-gray-900 mt-6 text-base font-normal">
            You can export perfectly formatted content, including your images,{" "}
            from {sourceIntegration.name} to {destinationIntegration.name} by{" "}
            following these three simple steps:
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mt-12 lg:max-w-none">
          <ul className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.description}
                className="text-base font-normal leading-7 text-gray-900 flex items-center lg:items-start lg:flex-col gap-x-4 lg:gap-y-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 shrink-0 mt-2">
                  <step.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div>{step.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-center mt-12 sm:mt-20">
        <CtaButton />
      </div>
    </section>
  );
}
