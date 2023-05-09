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
import IntegrationCta from "../../../components/integration-cta";
import IntegrationHeroSection from "../../../components/integration-hero-section";
import FeatureBlockWithImage from "../../../components/feature-block-with-image";
import FeatureList from "../../../components/feature-list";

export default function Page() {
  const source = "google-docs";
  const destination = "webflow";

  return (
    <Layout>
      <NextSeo
        title="Export perfectly formatted content from Google Docs to Webflow"
        description="Automate the export of perfectly formatted content from Google Docs to Webflow, so you have more time for doing work that matters"
      />
      <IntegrationHeroSection
        source={source}
        destination={destination}
        imageCompare1={imageCompare1}
        imageCompare2={imageCompare2}
      />

      <FeatureBlockWithImage
        title="One-click exports"
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
        imageAlignment="right"
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
                "Supports tables with headers, text formatting, and images inside the table",
                "Supports advanced formatting like code blocks - ideal for programmers that share source code on their blogs",
              ]}
            />
          </>
        }
        image={PreserveFormattingImage}
        imageAlignment="left"
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
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Automate exports"
        content={
          <>
            <p>
              Using the Cloudpress API and no-code tools like Make.com, you can
              create automated workflows that export your content without you
              having to lift a finger.
            </p>
            <FeatureList
              features={[
                "Cloudpress REST API allows integration from any programming language",
                "Cloudpress modules allow quick integration with Make.com",
              ]}
            />
          </>
        }
        image={AutomateExportsImage}
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
        image={NavigateToWebflowImage}
        imageAlignment="left"
      />

      <IntegrationCta destination={destination} />
    </Layout>
  );
}
