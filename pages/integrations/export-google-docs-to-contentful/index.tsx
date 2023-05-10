import { NextSeo } from "next-seo";
import Layout from "../../../components/layouts/Layout";
import imageCompare1 from "../../../public/images/terracotta-army-google-docs.png";
import imageCompare2 from "../../../public/images/terracotta-army-contentful.png";
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
import IntegrationCta from "../../../components/integration-cta";
import IntegrationHeroSection from "../../../components/integration-hero-section";
import FeatureBlockWithImage from "../../../components/feature-block-with-image";
import FeatureList from "../../../components/feature-list";

export default function Page() {
  const source = "google-docs";
  const destination = "contentful";

  return (
    <>
      <NextSeo title="Export content from Google Docs to Contentful" />
      <Layout>
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
                With our Google Docs Add-on, you can export your content from
                the comfort of the Google Docs editor. No need to navigate to an
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
          imageAlignment="right"
        />

        <FeatureBlockWithImage
          title="Preserves your formatting"
          content={
            <>
              <p>
                Cloudpress does a great job of preserving your formatting and
                handles all common formatting styles, such as headings, bold,
                italic, and underlined text, lists, tables, code blocks, and
                more…
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
          imageAlignment="left"
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
          imageAlignment="right"
        />

        <FeatureBlockWithImage
          title="Works with your content model"
          content={
            <>
              <p>
                Cloudpress works with the content models you create in
                Contentful.
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
          imageAlignment="right"
        />

        <FeatureBlockWithImage
          title="Automatically creates embeds"
          content={
            <>
              <p>
                Cloudpress can detect links to content on sites like Twitter,
                TikTok and YouTube in your document and create the correct embed
                block for Contentful (only supported in markdown - i.e. long
                text fields)
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
          title="Update additional fields"
          content={
            <>
              <p>
                Cloudpress handles more than just your content. It can also
                update additional fields in Contentful, such as the post
                category, author, featured image, etc.
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
          imageAlignment="right"
        />

        <FeatureBlockWithImage
          title="Bulk export documents"
          content={
            <>
              <p>
                If you have a lot of documents you want to export or update, you
                can use our bulk export feature in the Cloudpress web
                application.
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
          title="Automate exports"
          content={
            <>
              <p>
                Using the Cloudpress API and no-code tools like Make.com, you
                can create automated workflows that export your content without
                you having to lift a finger.
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
          imageAlignment="right"
        />

        <IntegrationCta destination={destination} />
      </Layout>
    </>
  );
}
