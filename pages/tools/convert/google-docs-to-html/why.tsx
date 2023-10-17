import React from "react";
import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import {
  cloudpressCode,
  googleDocsCode,
} from "../../../../lib/google-docs-to-html-code-samples";

hljs.registerLanguage("xml", xml);

const highlightedGoogleDocsCode = hljs.highlight(googleDocsCode, {
  language: "xml",
}).value;
const highlightedCloudpressCode = hljs.highlight(cloudpressCode, {
  language: "xml",
}).value;

export default function Why(): JSX.Element {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Why should you use the Cloudpress HTML export tool?
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none prose">
          <p>
            Google lets you export a document to HTML. However, the HTML it
            generates is full of unnecessary HTML markup and CSS, making it
            nearly unusable. Here is an example of the HTML code Google Docs
            generates for you.
          </p>
          <pre className="max-h-96">
            <code>
              <div
                dangerouslySetInnerHTML={{
                  __html: highlightedGoogleDocsCode,
                }}
              />
            </code>
          </pre>
          <p>
            Our HTML export tool generates <strong>clean HTML</strong> without
            any unnecessary markup, and we will use the correct HTML elements
            for formatting, like <strong>bold</strong>, <em>italics</em>,{" "}
            <u>underline</u>, etc. Here is the HTML we generate for the same
            document.
          </p>
          <pre className="max-h-96">
            <code>
              <div
                dangerouslySetInnerHTML={{
                  __html: highlightedCloudpressCode,
                }}
              />
            </code>
          </pre>
          <p>
            Besides generating clean HTML, we can also enhance your content in
            other ways.
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
              automatically convert these tables into proper code blocks.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
