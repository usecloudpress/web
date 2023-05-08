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
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4">
              {/*<div className="flex justify-start items-center flex-grow-0 flex-shrink-0 gap-3 pl-1 pr-2.5 py-1 rounded-2xl bg-blue-50 mix-blend-multiply">
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative px-2.5 py-0.5 rounded-2xl bg-white">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-blue-700">
                    New feature
                  </p>
                </div>
                <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-1">
                  <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-blue-700">
                    Check out the team dashboard
                  </p>
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M3.83325 8.00004H13.1666M13.1666 8.00004L8.49992 3.33337M13.1666 8.00004L8.49992 12.6667"
                      stroke="#3B82F6"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>*/}
              <p className="max-w-5xl text-4xl sm:text-6xl font-semibold text-center text-gray-900 leading-tight sm:leading-tight">
                {heading}
              </p>
            </div>
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
