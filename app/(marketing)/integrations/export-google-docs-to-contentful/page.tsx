import React from "react";
import imageCompare1 from "../../../../public/images/terracotta-army-google-docs.png";
import imageCompare2 from "../../../../public/images/terracotta-army-contentful.png";
import AutomateExportsImage from "./automate-exports.png";
import BulkExportImage from "./bulk-export-content.png";
import ConvertFormattingImage from "./converts-google-docs-formatting-to-contentful.png";
import EmbedsImage from "./converts-links-to-embeds.png";
import DraftOrPublishedImage from "./export-as-draft-or-published.png";
import AdditionalFieldsImage from "./exports-additional-fields.png";
import ExportsImagesImage from "./exports-images-from-google-docs-to-contentful.png";
import OneClickExportImage from "./one-click-export-from-google-docs-to-contentful.png";
import QuicklyNavigateImage from "./quickly-navigate-to-exported-content-in-contentful.png";
import RichTextOrLongTextImage from "./supports-contentful-rich-text-or-long-text.png";
import ContentModelImage from "./works-with-your-content-model.png";
import ExportCustomRichTextImage from "./export-custom-rich-text.png";
import ExportCustomMarkdownImage from "./export-custom-markdown.png";
import IntegrationCta from "../../../../components/integration-cta";
import IntegrationHeroSection from "../../../../components/integration-hero-section";
import FeatureBlockWithImage from "../../../../components/feature-block-with-image";
import FeatureList from "../../../../components/feature-list";
import IntegrationGettingStartedSection from "../../../../components/integration-getting-started-section";
import { ConnectionIcon, ExportIcon } from "../../../../components/icons";
import { PencilIcon } from "@heroicons/react/24/solid";
import { LinkButton } from "../../../../components/buttons";
import { BookOpenIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import { mergeSeo } from "../../../../lib/merge-seo";

export const metadata: Metadata = mergeSeo({
  title: "Export Google Docs to Contentful | Integrations",
  description:
    "Export from Google Docs to Contentful with our Google Docs Add-on or automate it with our Zapier and Make.com integration.",
  openGraph: {
    type: "website",
    images: [
      {
        url: "https://www.usecloudpress.com/images/social/export-google-docs-to-contentful.png",
      },
    ],
  },
});

export default function Page() {
  const source = "google-docs";
  const destination = "contentful";

  return (
    <>
      <IntegrationHeroSection
        source={source}
        destination={destination}
        imageCompare1={imageCompare1}
        imageCompare2={imageCompare2}
      />
      <IntegrationGettingStartedSection
        source={source}
        destination={destination}
        steps={[
          {
            description:
              "Connect the Contentful account you wish to export your content to.",
            icon: ConnectionIcon,
          },
          {
            description:
              "Write and collaborate on your content in Google Docs.",
            icon: PencilIcon,
          },
          {
            description:
              "Export your content with one click using the Google Docs Add-on.",
            icon: ExportIcon,
          },
        ]}
      />
      <FeatureBlockWithImage
        title="Export with one click"
        content={
          <>
            <p>
              With our Google Docs Add-on, you can export your content from the
              comfort of the Google Docs editor. No need to navigate to an
              external application - simply open the Cloudpress Google Docs
              Add-on and click the export button.
            </p>
            <FeatureList
              features={[
                "Save time by not leaving the Google Docs editor",
                "Get updates on the export progress from inside the Google Docs editor",
                "Navigate directly to your content in Contentful when the export is done",
              ]}
            />
          </>
        }
        image={OneClickExportImage}
        imageAlt="One-click export from Google Docs to Contentful"
        imageAlignment="right"
      />
      <FeatureBlockWithImage
        title="Preserve all your formatting"
        content={
          <>
            <p>
              Cloudpress does a great job of preserving your formatting and
              handles all common formatting styles, such as headings, bold,
              italic, and underlined text, lists, tables, code blocks, and more…
            </p>
            <FeatureList
              features={[
                "Supports all the common formatting styles",
                "Supports tables with headers, text formatting, and images inside the table",
                "Supports advanced formatting like code blocks - ideal for programmers that share source code on their blogs",
              ]}
            />
          </>
        }
        image={ConvertFormattingImage}
        imageAlt="Preserves formatting from Google Docs to Contentful"
        imageAlignment="left"
      />
      <FeatureBlockWithImage
        title="Export your images"
        content={
          <>
            <p>
              Cloudpress uploads all the images in your document as assets to
              Contentful and will link those assets correctly in the exported
              content.
            </p>
            <FeatureList
              features={[
                "Uploads images as assets in Contentful",
                "Preserves your image name for SEO purposes",
                "Supports alt text for SEO purposes",
              ]}
            />
          </>
        }
        image={ExportsImagesImage}
        imageAlt="Export images from Google Docs as assets to Contentful"
        imageAlignment="right"
      />
      <FeatureBlockWithImage
        title="Export to your own content model"
        content={
          <>
            <p>
              Cloudpress works with your own content models that you create in
              Contentful. Tell Cloudpress which fields to use for the content,
              author, slug, or whichever other fields your choose to export.
            </p>
            <FeatureList
              features={[
                "Works with your custom content model",
                "Allows you to map content to any rich text or long text field",
              ]}
            />
          </>
        }
        image={ContentModelImage}
        imageAlt="Works with your Contentful content model"
        imageAlignment="left"
      />
      <FeatureBlockWithImage
        title="Supports rich text and long text"
        content={
          <>
            <p>
              Whether you store your content in rich text or long text fields,
              Cloudpress has you covered and will format the content correctly
              for the field type
            </p>
            <FeatureList
              features={[
                "Supports both rich text and long text",
                "Converts your content to the correct rich text format",
                "Converts your content to markdown for long text fields",
              ]}
            />
          </>
        }
        image={RichTextOrLongTextImage}
        imageAlt="Supports Contentful rich text and long text"
        imageAlignment="right"
      />
      <FeatureBlockWithImage
        title="Automatically create embeds"
        content={
          <>
            <p>
              Cloudpress can detect links to content on sites like Twitter,
              TikTok and YouTube in your document and create the correct embed
              block for Contentful (only supported in markdown - i.e. long text
              fields)
            </p>
            <FeatureList
              features={[
                "Supports common embeds like Twitter, TikTok, YouTube, Spotify, and many more",
                "Creates the correct embed code for your content",
              ]}
            />
          </>
        }
        image={EmbedsImage}
        imageAlt="Automatically creates embeds from links in your document"
        imageAlignment="left"
      />
      <FeatureBlockWithImage
        title="Update additional fields"
        content={
          <>
            <p>
              Cloudpress handles more than just your content. It can also update
              additional fields in Contentful, such as the post category,
              author, featured image, etc.
            </p>
            <FeatureList
              features={[
                "Supports simple fields like text, dates, and numbers",
                "Supports Contentful reference fields and can look up the correct entry based on the title",
                "Supports fields that allow for multiple values",
                "Supports image fields",
              ]}
            />
          </>
        }
        image={AdditionalFieldsImage}
        imageAlt="Updates additional fields in Contentful"
        imageAlignment="right"
      />
      <FeatureBlockWithImage
        title="Export custom Rich Text"
        content={
          <>
            <p>
              Sometimes, you want to add custom Rich Text blocks. For these
              occasions, our Raw Content Block feature will save the day.
            </p>
            <FeatureList
              features={[
                "Allows you to export any valid custom Rich Text",
                "Ideal for adding embedded entries and assets to your content",
              ]}
            />
            <div className="flex gap-x-4">
              <LinkButton
                href="https://www.youtube.com/watch?v=ztroFNWP2w8"
                rel="noopener noreferrer"
                target="_blank"
                variant="default"
                size="xl"
              >
                <div className="flex gap-x-2">
                  <PlayCircleIcon className="w-6 h-6" />
                  See it in action
                </div>
              </LinkButton>
              <LinkButton
                href="https://www.usecloudpress.com/docs/integrations/contentful/export-custom-rich-text"
                target="_blank"
                variant="default"
                size="xl"
              >
                <div className="flex gap-x-2">
                  <BookOpenIcon className="w-6 h-6" />
                  Read the docs
                </div>
              </LinkButton>
            </div>
          </>
        }
        image={ExportCustomRichTextImage}
        imageAlt="Export custom Rich Text"
        imageAlignment="left"
      />
      <FeatureBlockWithImage
        title="Export custom markdown, HTML, or JSX"
        content={
          <>
            <p>
              Sometimes, you want to add a custom markdown to your Long Text
              fields for content not supported by Cloudpress. For these
              occasions, our Raw Content Block feature will save the day.
            </p>
            <FeatureList
              features={[
                "Allows you to export any custom markdown/HTML/JSX with your content",
                "Ideal for embedding things like calls to action, email signup forms, and notices",
                "Perfect when using MDX and custom JSX components",
              ]}
            />
            <div className="flex gap-x-4">
              <LinkButton
                href="https://www.youtube.com/watch?v=sWH8jaMlXLE"
                rel="noopener noreferrer"
                target="_blank"
                variant="default"
                size="xl"
              >
                <div className="flex gap-x-2">
                  <PlayCircleIcon className="w-6 h-6" />
                  See it in action
                </div>
              </LinkButton>
              <LinkButton
                href="https://www.usecloudpress.com/docs/integrations/contentful/export-custom-markdown"
                target="_blank"
                variant="default"
                size="xl"
              >
                <div className="flex gap-x-2">
                  <BookOpenIcon className="w-6 h-6" />
                  Read the docs
                </div>
              </LinkButton>
            </div>
          </>
        }
        image={ExportCustomMarkdownImage}
        imageAlt="Export custom markdown, HTML, or JSX"
        imageAlignment="right"
      />
      <FeatureBlockWithImage
        title="Bulk export documents"
        content={
          <>
            <p>
              If you have a lot of documents you want to export or update, you
              can use our bulk export feature in the Cloudpress web application.
            </p>
            <FeatureList
              features={[
                "Export multiple documents at once",
                "Specify how each document should be processed",
              ]}
            />
          </>
        }
        image={BulkExportImage}
        imageAlt="Bulk export documents from Google Docs to Contentful"
        imageAlignment="left"
      />
      <FeatureBlockWithImage
        title="Automate exports with Zapier and Make.com"
        content={
          <>
            <p>
              Using the Cloudpress API and no-code tools like Zapier or
              Make.com, you can create automated workflows that export your
              content without you having to lift a finger.
            </p>
            <FeatureList
              features={[
                "Cloudpress REST API allows integration from any programming language",
                "Cloudpress actions allow quick integration with Zapier",
                "Cloudpress modules allow quick integration with Make.com",
              ]}
            />
          </>
        }
        image={AutomateExportsImage}
        imageAlt="Automate exports from Google Docs to Contentful"
        imageAlignment="right"
      />
      <FeatureBlockWithImage
        title="Draft or published, your choice"
        content={
          <>
            <p>
              Cloudpress can export your content as drafts or publish the
              content. In the case of content that is re-exported, Cloudpress
              can preserve the current publication status of your content.
            </p>
            <FeatureList
              features={[
                "Exports new content as drafts or publish it",
                "Preserve the state of existing content or explicitly set it to draft or published",
              ]}
            />
          </>
        }
        image={DraftOrPublishedImage}
        imageAlt="Export content as draft or published"
        imageAlignment="left"
      />
      <FeatureBlockWithImage
        title="Quickly navigate to exported content"
        content={
          <>
            <p>
              Once your export has been completed, you can easily navigate to
              the exported content in Contentful to review and publish the
              content.
            </p>
            <FeatureList
              features={[
                "Navigate directly to the exported content in Contentful",
                "Navigate directly to Cloudpress to review the export logs",
              ]}
            />
          </>
        }
        image={QuicklyNavigateImage}
        imageAlt="Quickly navigate to exported content in Contentful from Google Docs"
        imageAlignment="right"
      />
      <IntegrationCta destination={destination} />
    </>
  );
}
