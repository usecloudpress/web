import HeroSection from "./hero-section";
import { StaticImageData } from "next/image";
import { thisIntegration } from "../lib/Integrations";
import ImageComparison from "./image-comparison";
import React from "react";

type IntegrationHeroSectionProps = {
  source: string;
  destination: string;
  imageCompare1: StaticImageData;
  imageCompare2: StaticImageData;
};
export default function IntegrationHeroSection({
  source,
  destination,
  imageCompare1,
  imageCompare2,
}: IntegrationHeroSectionProps) {
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
    <HeroSection
      heading={`Export content from ${sourceIntegration.name} to ${destinationIntegration.name}`}
      supportingText={`Automate the export of perfectly formatted content from ${sourceIntegration.name} to ${destinationIntegration.name}, so you have more time for doing work that matters`}
      heroImage={
        <>
          <ImageComparison
            image1={imageCompare1}
            image1Label={sourceIntegration.name}
            image2={imageCompare2}
            image2Label={destinationIntegration.name}
          />
        </>
      }
    />
  );
}
