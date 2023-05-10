import Layout from "../../../components/layouts/Layout";
import { NextSeo } from "next-seo";
import imageCompare1 from "../../../public/images/terracotta-army-notion.png";
import imageCompare2 from "../../../public/images/terracotta-army-sanity.png";
import BulkExportImage from "./bulk-export.png";
import ExportsImagesImage from "./exports-images.png";
import PreservesFormattingImage from "./preserves-formatting.png";
import SanitySchemaImage from "./sanity-schema.png";
import IntegrationCta from "../../../components/integration-cta";
import IntegrationHeroSection from "../../../components/integration-hero-section";
import FeatureList from "../../../components/feature-list";
import FeatureBlockWithImage from "../../../components/feature-block-with-image";

export default function Page() {
  const source = "notion";
  const destination = "sanity";

  return (
    <Layout>
      <NextSeo title="Export content from Notion to Sanity" />
      <IntegrationHeroSection
        source={source}
        destination={destination}
        imageCompare1={imageCompare1}
        imageCompare2={imageCompare2}
      />

      <FeatureBlockWithImage
        title="Preserves your formatting"
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
        imageAlt="Convert Notion formatting to Sanity.io Portable Text"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Exports your images"
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
        imageAlt="Export images from Notion to Sanity.io assets"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Works with your schema"
        content={
          <>
            <p>Cloudpress works with the schemas you create in Sanity.</p>
            <FeatureList
              features={[
                "Works with your custom document types",
                "Allows you to map content to any Portable Text field",
              ]}
            />
          </>
        }
        image={SanitySchemaImage}
        imageAlt="Works with your Santiy.ion schema and document types"
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
        imageAlt="Bulk export documents from Notion to Sanity.io"
        imageAlignment="left"
      />

      <IntegrationCta destination={destination} />
    </Layout>
  );
}
