interface PageHeaderSectionProps {
  heading: string;
  subHeading: string;
  supportingText: string;
}

export default function PageHeaderSection({
  heading,
  subHeading,
  supportingText,
}: PageHeaderSectionProps): JSX.Element {
  return (
    <>
      <div className="flex flex-col justify-start items-start mx-auto max-w-7xl gap-16 py-16 sm:py-24 bg-white">
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-8 px-4 sm:px-8">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4 sm:gap-10">
            <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4 sm:gap-6">
              <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-3">
                <p className="self-stretch flex-grow-0 flex-shrink-0 text-sm sm:text-base font-semibold text-left text-blue-600">
                  {subHeading}
                </p>
                <p className="sm:text-5xl text-4xl font-semibold text-left text-gray-900 leading-tight sm:leading-tight">
                  {heading}
                </p>
              </div>
              <p className="text-lg sm:text-xl text-left text-gray-600 leading-normal sm:leading-normal">
                {supportingText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
