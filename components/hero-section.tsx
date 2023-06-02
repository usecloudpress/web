import { ReactNode } from "react";

interface HeroSectionProps {
  heading: string | ReactNode;
  supportingText: string;
  heroImage: JSX.Element;
  heroActionButtons?: JSX.Element;
}

export default function HeroSection({
  heading,
  supportingText,
  heroImage,
  heroActionButtons,
}: HeroSectionProps) {
  return (
    <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-16 py-16 sm:py-24">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 max-w-7xl gap-8 px-4 sm:px-8">
        <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-8 sm:gap-12">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 max-w-7xl relative gap-4 sm:gap-6">
            <h1 className="max-w-5xl text-4xl sm:text-6xl font-semibold text-center text-gray-900 leading-tight sm:leading-tight">
              {heading}
            </h1>
            <p className="max-w-3xl text-lg sm:text-xl text-center text-gray-600 leading-normal sm:leading-normal">
              {supportingText}
            </p>
          </div>
          {heroActionButtons && (
            <div className="flex flex-col sm:flex-row justify-center w-full gap-3">
              {heroActionButtons}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 max-w-7xl relative gap-8 px-4 sm:px-8">
        {heroImage}
      </div>
    </div>
  );
}
