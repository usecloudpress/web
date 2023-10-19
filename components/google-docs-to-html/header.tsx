import React from "react";

export default function Header(): JSX.Element {
  return (
    <div className="bg-white px-6 pt-24 pb-12 sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Export Google Docs to{" "}
          <span className="text-blue-600 drop-shadow">clean HTML</span>
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          The Google Docs HTML export contains a lot of unnecessary markup and
          CSS. Export your document to{" "}
          <span className="font-bold">clean HTML</span> by using our HTML export
          tool!
        </p>
      </div>
    </div>
  );
}
