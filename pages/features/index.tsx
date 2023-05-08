import Layout from "../../components/layouts/Layout";
import Integrations from "../../components/integrations";
import GenericCta from "../../components/generic-cta";
import PageHeaderSection from "../../components/page-header-section";
import FeatureBlockWithImage from "../../components/feature-block-with-image";
import ImageOneClickExport from "./google-docs-add-on-1-click-export.png";
import ImagePreservesFormatting from "./preserves-formatting.png";
import ImageExportsImages from "./exports-images-to-your-cms.png";
import ImageAutoEmbeds from "./convert-links-to-embeds.png";
import ImageSetsAdditionalFields from "./sets-additional-fields-in-your-cms.png";
import ImageBulkExport from "./bulk-export-images-from-google-docs-to-your-cms.png";
import ImageAutomateExports from "./automate-exports-with-cloudpress-and-make.png";
import ImageExportDraftOrPublished from "./export-documents-as-draft-or-published.png";
import ImageQuicklyNavigate from "./quickly-navigate-to-exported-content.png";
import { NextSeo } from "next-seo";
import FeatureList from "../../components/feature-list";

export default function Page() {
  return (
    <>
      <Layout>
        <NextSeo
          title="Cloudpress has lots of time-saving features"
          description="Cloudpress will help you export perfectly formatted content faster, giving you more time to do the work that matters"
        />

        {/* Heading */}
        <PageHeaderSection
          heading="Overflowing with time-saving features"
          subHeading="Features"
          supportingText="Cloudpress will help you export perfectly formatted content faster, giving you more time to do the work that matters"
        />

        {/* 1 click exports */}
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
                  "Navigate directly to the exported content in your CMS",
                ]}
              />
            </>
          }
          image={ImageOneClickExport}
          imageAlignment="right"
        />

        {/* Preserves formatting */}
        <FeatureBlockWithImage
          title="Preserves formatting"
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
                  "Supports tables",
                  "Supports advanced formatting like code blocks - ideal for programmers that share source code on their blogs",
                ]}
              />
            </>
          }
          image={ImagePreservesFormatting}
          imageAlignment="left"
        />

        {/* Exports your images */}
        <FeatureBlockWithImage
          title="Exports your images"
          content={
            <>
              <p>
                Cloudpress extracts and uploads all the images in your document
                to your CMS and links the uploaded images correctly to the
                exported content.
              </p>
              <FeatureList
                features={[
                  "Preserves your image name for SEO purposes",
                  "Supports alt text for SEO purposes",
                ]}
              />
            </>
          }
          image={ImageExportsImages}
          imageAlignment="right"
        />

        {/* Automatically creates embeds */}
        <FeatureBlockWithImage
          title="Automatically creates embeds"
          content={
            <>
              <p>
                Cloudpress can detect links to content on sites like Twitter,
                TikTok and YouTube and create correctly formatted embed codes
                for that content in your CMS.
              </p>
              <FeatureList
                features={[
                  "Supports common embeds like Twitter, TikTok, YouTube, Spotify, and many more",
                  "Creates the correct embed codes depending on your CMS",
                ]}
              />
            </>
          }
          image={ImageAutoEmbeds}
          imageAlignment="left"
        />

        {/* Updates additional fields */}
        <FeatureBlockWithImage
          title="Updates additional fields"
          content={
            <>
              <p>
                Cloudpress handles more than just your content. It will also
                update additional fields in your CMS, such as the post category,
                author, featured image, etc.
              </p>
              <FeatureList
                features={[
                  "Works with the custom schema of your CMS",
                  "Supports simple fields like text, dates, and numbers",
                  "Supports lookup and reference fields",
                  "Supports fields that allow for multiple values",
                  "Supports image fields",
                ]}
              />
            </>
          }
          image={ImageSetsAdditionalFields}
          imageAlignment="right"
        />

        {/* Bulk export documents */}
        <FeatureBlockWithImage
          title="Bulk export documents"
          content={
            <>
              <p>
                Export multiple files at the same time or, if you use Notion,
                export an entire Notion database and update additional fields in
                your CMS based on the properties from the Notion database.
              </p>
              <FeatureList
                features={[
                  "Export multiple documents at once",
                  "Specifies how each document should be processed",
                  "Supports mapping of properties in Notion to fields in your CMS",
                ]}
              />
            </>
          }
          image={ImageBulkExport}
          imageAlignment="left"
        />

        {/* Automate exports */}
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
          image={ImageAutomateExports}
          imageAlignment="right"
        />

        {/* Draft or published, your choice */}
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
          image={ImageExportDraftOrPublished}
          imageAlignment="left"
        />

        {/* Quick navigation to exported content */}
        <FeatureBlockWithImage
          title="Quick navigation to exported content"
          content={
            <>
              <p>
                Once your export has been completed, you can easily navigate to
                the exported content in your CMS to review and publish the
                content.
              </p>
              <FeatureList
                features={[
                  "Navigate directly to the exported content, or preview it in your CMS",
                  "Navigate directly to the export log to track down any issues",
                ]}
              />
            </>
          }
          image={ImageQuicklyNavigate}
          imageAlignment="right"
        />

        {/* secure */}
        <div className="bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-20 lg:px-8">
          <section className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
            <div className="relative">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2 gap-y-3 prose-base sm:prose-lg">
                  <h4 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight leading-tight sm:leading-tight">
                    Secure
                  </h4>
                  <p className="text-gray-700">
                    We take the privacy of your content seriously. Cloudpress
                    only has access to the documents you explicitly give it
                    access to.
                  </p>
                  <p className="text-gray-700">
                    Cloudpress does not require access to your entire Google
                    Drive and does not keep any of the exported documents on our
                    servers beyond the time it takes to complete the export.
                  </p>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1 flex justify-center text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-64 w-64"
                    fill="currentColor"
                  >
                    <path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zm-47.2 114.2l-184 184c-6.2 6.2-16.4 6.2-22.6 0l-104-104c-6.2-6.2-6.2-16.4 0-22.6l22.6-22.6c6.2-6.2 16.4-6.2 22.6 0l70.1 70.1 150.1-150.1c6.2-6.2 16.4-6.2 22.6 0l22.6 22.6c6.3 6.3 6.3 16.4 0 22.6z" />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Integrations */}
        <Integrations />

        <GenericCta />
      </Layout>
    </>
  );
}
