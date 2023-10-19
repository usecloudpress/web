import React from "react";
import {
  ConvertClickButtonIcon,
  ConvertSelectDocumentIcon,
  ConvertSettingsIcon,
} from "../../../../components/icons";

const howToSteps = [
  {
    name: "Select the document you want to export",
    description:
      "Use the Google Drive picker to select the document you want to export. Don’t worry; we do not get full access to your account. We will only have temporary access to download the content of the document you select.",
    icon: ConvertSelectDocumentIcon,
  },
  {
    name: "Specify the export settings",
    description:
      "Our export tool has a few nifty tricks, such as converting standalone links to embeds. For example, add a link to a YouTube video, and we’ll generate the correct embed code for you.",
    icon: ConvertSettingsIcon,
  },
  {
    name: "Click the Export button",
    description:
      "We will download your document’s content and convert it to Markdown. We will also download and include any images in your document. Once we’re done, we’ll email you a link to download a ZIP file with the content.",
    icon: ConvertClickButtonIcon,
  },
];

export default function HowTo(): JSX.Element {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            How to export a
            <br />
            Google Doc to Markdown
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
            Export your document to Markdown following these three simple steps.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <ol className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {howToSteps.map((feature) => (
              <li key={feature.name} className="flex flex-col">
                <div className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </div>
                <div className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
