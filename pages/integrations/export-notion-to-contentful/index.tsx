import Layout from "../../../components/layouts/Layout";
import { NextSeo } from "next-seo";
import imageCompare1 from "../../../public/images/terracotta-army-notion.png";
import imageCompare2 from "../../../public/images/terracotta-army-contentful.png";
import BulkExportImage from "./bulk-export-documents.png";
import ConvertsFormattingImage from "./converts-notion-formatting-to-contentful.png";
import DraftOrPublishedImage from "./draft-or-published.png";
import NotionDatabaseImage from "./export-notion-databases.png";
import ExportsImagesImage from "./exports-images.png";
import NotionEmbedsImage from "./handles-notion-embeds.png";
import QuicklyNavigateImage from "./quickly-navigate.png";
import RichTextOrLongTextImage from "./supports-contentful-rich-text-or-long-text.png";
import ContentModelImage from "./works-with-your-content-model.png";
import IntegrationCta from "../../../components/integration-cta";
import IntegrationHeroSection from "../../../components/integration-hero-section";
import FeatureList from "../../../components/feature-list";
import FeatureBlockWithImage from "../../../components/feature-block-with-image";

export default function Page() {
  const source = "notion";
  const destination = "contentful";

  return (
    <Layout>
      <NextSeo
        title="Export perfectly formatted content from Notion to Contentful"
        description="Automate the export of perfectly formatted content from Notion to Contentful, so you have more time for doing work that matters"
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
        image={ConvertsFormattingImage}
        imageAlt="Converts formatting from Notion to Contentful Rich Text or markdown"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Exports your images"
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
        imageAlt="Export images from Notion to Contentful assets"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Works with your content model"
        content={
          <>
            <p>
              Cloudpress works with the content models you create in Contentful.
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
        imageAlignment="right"
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
        imageAlt="Supports Contentful rich text and long text (markdown)"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Handles Notion embeds"
        content={
          <>
            <p>
              Cloudpress handles Notion embeds correctly and will create the
              correct embed block for Contentful (only supported in markdown -
              i.e. long text fields)
            </p>
            <FeatureList
              features={[
                "Supports common embeds like Twitter, TikTok, YouTube, Spotify, and many more",
                "Creates the correct embed code for your content",
              ]}
            />
          </>
        }
        image={NotionEmbedsImage}
        imageAlt="Convert Notion embeds to correct embed code in Contentful"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Export Notion databases"
        content={
          <>
            <p>
              Cloudpress allows you to export your entire Notion database to
              Contentful. It exports the content, and you can map properties
              from your database to fields in Contentful.
            </p>
            <FeatureList
              features={[
                "Supports the majority of Notion property types, including selects and images",
                "Supports Contentful reference fields and can look up the correct entry based on the title",
                "Allows exporting a subset of pages from the database based on filter criteria",
              ]}
            />
          </>
        }
        image={NotionDatabaseImage}
        imageAlt="Export Notion database to Contentful"
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
        imageAlt="Bulk export documents from Notion to Contentful"
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
        imageAlt="Export content in Contentful as draft or published"
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
        imageAlt="Quickly navigate to exported Notion content in Contentful"
        imageAlignment="right"
      />

      <IntegrationCta destination={destination} />
    </Layout>
  );
}
