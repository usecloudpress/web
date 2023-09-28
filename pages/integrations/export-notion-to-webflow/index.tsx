import Layout from "../../../components/layouts/Layout";
import { NextSeo } from "next-seo";
import imageCompare1 from "../../../public/images/terracotta-army-notion.png";
import imageCompare2 from "../../../public/images/terracotta-army-webflow.png";
import BulkExportImage from "./bulk-export-documents-from-notion-to-webflow.png";
import CollectionSchemaImage from "./configure-your-cms-collection-schema.png";
import EmbedsImage from "./converts-notion-embeds-to-webflow.png";
import DraftOrPublishedImage from "./export-as-draft-or-published.png";
import ExportImagesImage from "./export-images-from-notion-to-webflow.png";
import MapPropertiesImage from "./map-notion-properties-to-webflow-fields.png";
import PreserveFormattingImage from "./preserves-formatting.png";
import QuicklyNavigateImage from "./quickly-navigate-to-exported-content-in-webflow.png";
import ExportCustomHtmlImage from "./export-custom-html.png";
import IntegrationCta from "../../../components/integration-cta";
import IntegrationHeroSection from "../../../components/integration-hero-section";
import FeatureBlockWithImage from "../../../components/feature-block-with-image";
import FeatureList from "../../../components/feature-list";
import IntegrationGettingStartedSection from "../../../components/integration-getting-started-section";
import { ConnectionIcon, ExportIcon } from "../../../components/icons";
import { PencilIcon } from "@heroicons/react/24/solid";
import React from "react";
import AutomateExportsImage from "../export-google-docs-to-wordpress/automate-exports-from-google-docs-to-wordpress-with-trello.png";
import { LinkButton } from "../../../components/buttons";
import { BookOpenIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

export default function Page() {
  const source = "notion";
  const destination = "webflow";

  return (
    <Layout>
      <NextSeo
        title="Export Notion to Webflow | Integrations"
        description="Export from Notion to Webflow with the click of a button or automate it with our Zapier and Make.com integration."
        openGraph={{
          type: "website",
          images: [
            {
              url: "https://www.usecloudpress.com/images/social/export-notion-to-webflow.png",
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
              "Connect your Notion account and the Webflow account you wish to export to.",
            icon: ConnectionIcon,
          },
          {
            description: "Write and collaborate on your content in Notion.",
            icon: PencilIcon,
          },
          {
            description:
              "Export your content with the click of a button, or automate the entire process.",
            icon: ExportIcon,
          },
        ]}
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
                "Supports tables with headers",
                "Supports advanced formatting like code blocks - ideal for programmers that share source code on their blogs",
              ]}
            />
          </>
        }
        image={PreserveFormattingImage}
        imageAlt="Converts formatting from Notion to Webflow"
        imageAlignment="right"
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
        imageAlt="Export images from Notion to Webflow"
        imageAlignment="left"
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
        imageAlt="Works with your Webflow CMS Collection"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Handles Notion embeds"
        content={
          <>
            <p>
              Cloudpress handles Notion embeds correctly and will create the
              correct embed block for Webflow.
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
        imageAlt="Converts Notion embeds to correct embed code in Webflow"
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
                href="https://www.youtube.com/watch?v=ALTLUtXrcYk"
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
        title="Export Notion databases"
        content={
          <>
            <p>
              Cloudpress allows you to export your entire Notion database to
              Webflow. It exports the content, and you can map properties from
              your database to fields in Webflow.
            </p>
            <FeatureList
              features={[
                "Supports the majority of Notion property types, including selects and images",
                "Supports Webflow reference fields and can look up the correct item based on the name",
                "Allows exporting a subset of pages from the database based on filter criteria",
              ]}
            />
          </>
        }
        image={MapPropertiesImage}
        imageAlt="Export Notion database to Webflow"
        imageAlignment="left"
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
        imageAlt="Bulk export documents from Notion to Webflow"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Automate exports with Zapier and Make"
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
        imageAlt="Automate exports from Notion to WordPress"
        imageAlignment="left"
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
        imageAlt="Export content in Webflow as draft or published"
        imageAlignment="right"
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
        image={QuicklyNavigateImage}
        imageAlt="Quickly navigate to exported Notion documents in Webflow"
        imageAlignment="left"
      />

      <IntegrationCta destination={destination} />
    </Layout>
  );
}
