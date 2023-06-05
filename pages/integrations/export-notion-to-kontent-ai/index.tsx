import Layout from "../../../components/layouts/Layout";
import { NextSeo } from "next-seo";
import imageCompare1 from "../../../public/images/terracotta-army-notion.png";
import imageCompare2 from "../../../public/images/terracotta-army-kontent-ai.png";
import BulkExportImage from "./bulk-export.png";
import ContentModelImage from "./content-model.png";
import PreservesFormattingImage from "./converts-google-docs-formatting-to-contentful.png";
import DraftOrPublishedImage from "./draft-or-published.png";
import ExportsImagesImage from "./exports-images.png";
import QuicklyNavigateImage from "./quickly-navigate.png";
import IntegrationCta from "../../../components/integration-cta";
import IntegrationHeroSection from "../../../components/integration-hero-section";
import FeatureBlockWithImage from "../../../components/feature-block-with-image";
import FeatureList from "../../../components/feature-list";
import IntegrationGettingStartedSection from "../../../components/integration-getting-started-section";
import { ConnectionIcon, ExportIcon } from "../../../components/icons";
import { PencilIcon } from "@heroicons/react/24/solid";
import React from "react";
import AutomateExportsImage from "../export-google-docs-to-wordpress/automate-exports-from-google-docs-to-wordpress-with-trello.png";

export default function Page() {
  const source = "notion";
  const destination = "kontent-ai";

  return (
    <Layout>
      <NextSeo
        title="Export Notion to Kontent.ai | Integrations"
        description="Automate the export of perfectly formatted content from Notion to Kontent.ai, so you have more time for doing work that matters"
        openGraph={{
          type: "website",
          images: [
            {
              url: "https://www.usecloudpress.com/images/social/export-notion-to-kontent.png",
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
              "Connect your Notion account and the Kontent.ai account you wish to export to.",
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
                "Supports tables with headers and text formatting",
              ]}
            />
          </>
        }
        image={PreservesFormattingImage}
        imageAlt="Convert formatting from Notion to Kontent.ai"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Export your images"
        content={
          <>
            <p>
              Cloudpress uploads all the images in your document as assets to
              Kontent.ai and will link those assets correctly in the exported
              content.
            </p>
            <FeatureList
              features={[
                "Uploads images as assets in Kontent.ai",
                "Preserves your image name for SEO purposes",
                "Supports alt text for SEO purposes",
              ]}
            />
          </>
        }
        image={ExportsImagesImage}
        imageAlt="Export images from Notion to asstes in Kontent.ai"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Works with your content model"
        content={
          <>
            <p>
              Cloudpress works with the content models you create in Kontent.ai.
            </p>
            <FeatureList
              features={[
                "Works with your custom content model",
                "Allows you to map content to any rich text field",
              ]}
            />
          </>
        }
        image={ContentModelImage}
        imageAlt="Works with your content model in Kontent.ai"
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
        imageAlt="Bulk export documents from Notion to Kontent.ai"
        imageAlignment="left"
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
        imageAlt="Automate exports from Notion to Kontent.ai"
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
        imageAlt="Export your content in Kontent.ai as draft or published"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Quickly navigate to exported content"
        content={
          <>
            <p>
              Once your export has been completed, you can easily navigate to
              the exported content in Kontent.ai to review and publish the
              content.
            </p>
            <FeatureList
              features={[
                "Navigate directly to the exported content in Kontent.ai",
                "Navigate directly to Cloudpress to review the export logs",
              ]}
            />
          </>
        }
        image={QuicklyNavigateImage}
        imageAlt="Quickly navigate to exported Notion content in Kontent.ai"
        imageAlignment="right"
      />

      <IntegrationCta destination={destination} />
    </Layout>
  );
}
