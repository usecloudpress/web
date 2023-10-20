import React from "react";

export default function Header(): JSX.Element {
  return (
    <div className="bg-white px-6 pt-24 pb-12 sm:pt-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Export Google Docs to{" "}
          <span className="text-blue-600 drop-shadow">Markdown</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Export Google Docs to Markdown for use in your Headless CMS, GitHub
          Pages, or wherever you use Markdown
        </p>
      </div>
    </div>
  );
}
