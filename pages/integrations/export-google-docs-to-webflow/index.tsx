import Layout from "../../../components/layouts/Layout";
import { NextSeo } from "next-seo";
import imageCompare1 from "../../../public/images/terracotta-army-google-docs.png";
import imageCompare2 from "../../../public/images/terracotta-army-webflow.png";
import AutomateExportsImage from "./automate-exports-from-google-docs-to-wordpress-with-trello.png";
import AutomaticEmbedsImage from "./automatically-creates-embeds-in-webflow.png";
import BulkExportImage from "./bulk-export-from-google-docs-to-webflow.png";
import CollectionSchemaImage from "./configure-your-cms-collection-schema.png";
import DraftOrPublishedImage from "./export-draft-or-published.png";
import AdditionalFieldsImage from "./exports-additional-fields.png";
import ExportImagesImage from "./exports-images-from-google-docs-to-webflow.png";
import NavigateToWebflowImage from "./navigate-from-google-docs-to-webflow.png";
import OneClickExportImage from "./one-click-export-from-google-docs-to-webflow.png";
import PreserveFormattingImage from "./preserves-formatting.png";
import ExportCustomHtmlImage from "./export-custom-html.png";
import IntegrationCta from "../../../components/integration-cta";
import IntegrationHeroSection from "../../../components/integration-hero-section";
import FeatureBlockWithImage from "../../../components/feature-block-with-image";
import FeatureList from "../../../components/feature-list";
import IntegrationGettingStartedSection from "../../../components/integration-getting-started-section";
import { ConnectionIcon, ExportIcon } from "../../../components/icons";
import { PencilIcon } from "@heroicons/react/24/solid";
import React from "react";
import { LinkButton } from "../../../components/buttons";
import { BookOpenIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

export default function Page() {
  const source = "google-docs";
  const destination = "webflow";

  return (
    <Layout>
      <NextSeo
        title="Export Google Docs to Webflow | Integrations"
        description="Export from Google Docs to Webflow with our Google Docs Add-on or automate it with our Zapier and Make.com integration."
        openGraph={{
          type: "website",
          images: [
            {
              url: "https://www.usecloudpress.com/images/social/export-google-docs-to-webflow.png",
            },
          ],
        }}
      />

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
              "Connect the Webflow account you wish to export your content to.",
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
                "Navigate directly to the Webflow designer when the export is done",
              ]}
            />
          </>
        }
        image={OneClickExportImage}
        imageAlt="One click exports from Google Docs to Webflow"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Preserve your formatting"
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
        image={PreserveFormattingImage}
        imageAlt="Converts Google Docs content to correct format in Webflow"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Export your images"
        content={
          <>
            <p>
              Cloudpress uploads all the images in your document to Webflow and
              will link the uploaded images correctly in the exported content.
            </p>
            <FeatureList
              features={[
                "Preserves your image name for SEO purposes",
                "Supports alt text for SEO purposes",
              ]}
            />
          </>
        }
        image={ExportImagesImage}
        imageAlt="Export images from Google Docs to Webflow"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Works with your CMS collection"
        content={
          <>
            <p>
              Cloudpress works with your CMS collection schema. Connect your
              Webflow account, tell Cloudpress which CMS collection and field to
              use for the content of the exported document, and we’ll take care
              of the rest
            </p>
            <FeatureList
              features={[
                "Works with any of your CMS collections",
                "Cloudpress exports the content to any rich text field in your CMS collection",
              ]}
            />
          </>
        }
        image={CollectionSchemaImage}
        imageAlt="Works with your Webflow CMS Collections"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Automatically creates embeds"
        content={
          <>
            <p>
              Cloudpress can detect links to content on sites like Twitter,
              TikTok and YouTube in your document and create the correct embed
              block for Webflow.
            </p>
            <FeatureList
              features={[
                "Supports common embeds like Twitter, TikTok, YouTube, Spotify, and many more",
                "Creates the correct embed code for your content",
              ]}
            />
          </>
        }
        image={AutomaticEmbedsImage}
        imageAlt="Automatically creates embeds in Webflow from links in Google Docs"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Update additional fields"
        content={
          <>
            <p>
              Cloudpress handles more than just your content. It can also update
              additional fields in Webflow, such as the post category, author,
              featured image, etc.
            </p>
            <FeatureList
              features={[
                "Supports simple fields like text, dates, and numbers",
                "Supports lookup and reference fields",
                "Supports fields that allow for multiple values",
                "Supports image fields",
              ]}
            />
          </>
        }
        image={AdditionalFieldsImage}
        imageAlt="Update additional fields from Google Docs to Webflow"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Export custom HTML"
        content={
          <>
            <p>
              Sometimes, you want to add a custom HTML for content not supported
              by Cloudpress. For these occasions, our Raw Content Block feature
              will save the day.
            </p>
            <FeatureList
              features={[
                "Allows you to export any custom HTML with your content",
                "Ideal for embedding things like calls to action, email signup forms, and notices",
              ]}
            />
            <div className="flex gap-x-4">
              <LinkButton
                href="https://www.youtube.com/watch?v=wcehapJJBog"
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
                href="https://www.usecloudpress.com/docs/integrations/webflow/export-custom-html"
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
        image={ExportCustomHtmlImage}
        imageAlt="Export custom Gutenberg blocks"
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
        imageAlt="Bulk export documents from Google Docs to Webflow"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Automate exports with Zapier and Make.com"
        content={
          <>
            <p>
              Using the Cloudpress API and no-code tools like Zapier and
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
        imageAlt="Automate exports from Google Docs to Webflow"
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
        imageAlt="Export your content as draft or published in Webflow"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Quickly navigate to exported content"
        content={
          <>
            <p>
              Once your export has been completed, you can easily navigate to
              the exported content in your CMS to review and publish the
              content.
            </p>
            <FeatureList
              features={[
                "Navigate directly to your Webflow designer",
                "Navigate directly to view the export log",
              ]}
            />
          </>
        }
        image={NavigateToWebflowImage}
        imageAlt="Quickly navigate from Google Docs to exported content in Webflow"
        imageAlignment="right"
      />

      <IntegrationCta destination={destination} />
    </Layout>
  );
}
