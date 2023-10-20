import React from "react";
import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js/lib/core";
import markdown from "highlight.js/lib/languages/markdown";
import { CloudpressMarkdown } from "./code-samples";

hljs.registerLanguage("markdown", markdown);

const highlightedCloudpressMarkdown = hljs.highlight(CloudpressMarkdown, {
  language: "markdown",
}).value;

export default function Why(): JSX.Element {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Why should you use the Cloudpress Markdown export tool?
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none prose">
          <p>
            Google Docs is a great tool for writing and collaborating on
            content. However, it does not have built-in support for exporting
            the content to Markdown.
          </p>
          <p>
            The Cloudpress Markdown export tool will export the contents of your
            Google Doc to Markdown for you to easily use in your Headless CMS,
            GitHub Pages, or anywhere else you want to use Markdown. We also
            download all images in your document and include them in the ZIP
            file we generate for you.
          </p>
          <p>Here is an example of the Markdown we generate.</p>
          <pre className="max-h-96">
            <code>
              <div
                dangerouslySetInnerHTML={{
                  __html: highlightedCloudpressMarkdown,
                }}
              />
            </code>
          </pre>
          <p>
            Besides generating Markdown, we can enhance your content in other
            ways.
          </p>
          <ol>
            <li>
              Want to generate the proper embed code for a YouTube video? Add a
              paragraph containing just the link to the video to your document
              and enable the “Auto-detect embeds” option when exporting the
              content. With this option enabled, Cloudpress will automatically
              generate the correct embed code. This not only works for YouTube,
              but also for X (Twitter), TikTok, Facebook, Instagram, and
              hundreds of other applications.
            </li>
            <li>
              If you’re a software developer, add a single-cell table to your
              document and enable the option to convert single-cell tables to
              code blocks. With this option enabled, Cloudpress will
              automatically convert these tables into fenced code blocks.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
