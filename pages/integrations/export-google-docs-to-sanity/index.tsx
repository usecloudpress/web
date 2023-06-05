import Layout from "../../../components/layouts/Layout";
import { NextSeo } from "next-seo";
import imageCompare1 from "../../../public/images/terracotta-army-google-docs.png";
import imageCompare2 from "../../../public/images/terracotta-army-sanity.png";
import AutomateExportsImage from "./automate-exports.png";
import BulkExportImage from "./bulk-export.png";
import AdditionalFieldsImage from "./exports-additional-fields.png";
import ExportsImagesImage from "./exports-images.png";
import OneClickExportImage from "./one-click-export.png";
import PreservesFormattingImage from "./preserves-formatting.png";
import SanitySchemaImage from "./sanity-schema.png";
import IntegrationCta from "../../../components/integration-cta";
import IntegrationHeroSection from "../../../components/integration-hero-section";
import FeatureList from "../../../components/feature-list";
import FeatureBlockWithImage from "../../../components/feature-block-with-image";
import IntegrationGettingStartedSection from "../../../components/integration-getting-started-section";
import { ConnectionIcon, ExportIcon } from "../../../components/icons";
import { PencilIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Page() {
  const source = "google-docs";
  const destination = "sanity";

  return (
    <Layout>
      <NextSeo
        title="Export from Google Docs to Sanity | Integrations"
        description="Automate the export of perfectly formatted content from Google Docs to Sanity, so you have more time for doing work that matters"
        openGraph={{
          type: "website",
          images: [
            {
              url: "https://www.usecloudpress.com/images/social/export-google-docs-to-sanity.png",
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
              "Connect the Sanity account you wish to export your content to.",
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
              ]}
            />
          </>
        }
        image={OneClickExportImage}
        imageAlt="One click exports from Google Docs to Sanity.io"
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
                "Supports Sanity’s Portable Text fields",
                "Supports all the common formatting styles",
                "Supports advanced formatting like code blocks - ideal for programmers that share source code on their blogs",
              ]}
            />
          </>
        }
        image={PreservesFormattingImage}
        imageAlt="Converts Google Docs formatting to Sanity.io Portable Text"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Export your images"
        content={
          <>
            <p>
              Cloudpress uploads all the images in your document as assets to
              Sanity and will link those assets correctly in the exported
              content.
            </p>
            <FeatureList
              features={[
                "Uploads images as assets in Sanity",
                "Preserves your image name for SEO purposes",
                "Supports alt text for SEO purposes",
              ]}
            />
          </>
        }
        image={ExportsImagesImage}
        imageAlt="Exports images from Google Docs as assets in Sanity.io"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Works with your schema"
        content={
          <>
            <p>
              Cloudpress works with the schemas you create in Sanity. Tell
              Cloudpress which fields to use for the title, content, author,
              slug, or whichever other fields your choose to export.
            </p>
            <FeatureList
              features={[
                "Works with your custom document types",
                "Allows you to map content to any Portable Text field",
              ]}
            />
          </>
        }
        image={SanitySchemaImage}
        imageAlt="Works with your Sanity.io schema and document types"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Update additional fields"
        content={
          <>
            <p>
              When the power of the Cloudpress API, you can also update
              additional fields in Sanity. This is useful when you want
              Cloudpress to updates fields like the slug, author, or category
              when exporting content.
            </p>
            <FeatureList
              features={[
                "Supports any of the Sanity fields",
                "Supports updating arrays of values",
              ]}
            />
          </>
        }
        image={AdditionalFieldsImage}
        imageAlt="Update additional fields from Google Docs to Sanity.io"
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
        imageAlt="Bulk export content from Google Docs to Sanity"
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
                "Allows updating additional advanced field types",
              ]}
            />
          </>
        }
        image={AutomateExportsImage}
        imageAlt="Automate exports from Google Docs to Sanity.io"
        imageAlignment="right"
      />

      <IntegrationCta destination={destination} />
    </Layout>
  );
}
