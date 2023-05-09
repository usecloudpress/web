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
import IntegrationCta from "../../../components/integration-cta";
import IntegrationHeroSection from "../../../components/integration-hero-section";
import FeatureBlockWithImage from "../../../components/feature-block-with-image";
import FeatureList from "../../../components/feature-list";

export default function Page() {
  const source = "notion";
  const destination = "webflow";

  return (
    <Layout>
      <NextSeo
        title="Export perfectly formatted content from Notion to Webflow"
        description="Automate the export of perfectly formatted content from Notion to Webflow, so you have more time for doing work that matters"
      />
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
                "Supports all the common formatting styles",
                "Supports tables with headers",
                "Supports advanced formatting like code blocks - ideal for programmers that share source code on their blogs",
              ]}
            />
          </>
        }
        image={PreserveFormattingImage}
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Exports your images"
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
        imageAlignment="left"
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
        imageAlignment="left"
      />

      <IntegrationCta destination={destination} />
    </Layout>
  );
}
