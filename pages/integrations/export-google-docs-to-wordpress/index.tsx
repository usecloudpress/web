import Layout from "../../../components/layouts/Layout";
import { NextSeo } from "next-seo";
import imageCompare1 from "../../../public/images/terracotta-army-google-docs.png";
import imageCompare2 from "../../../public/images/terracotta-army-wordpress.png";
import AutomateExportsImage from "./automate-exports-from-google-docs-to-wordpress-with-trello.png";
import BulkExportsImage from "./bulk-export-images-from-google-docs-to-wordpress.png";
import EmbedsImage from "./convert-links-to-embeds.png";
import DraftOrPublishedImage from "./export-wordpress-posts-as-draft-or-published.png";
import ExportsImagesImage from "./exports-images-to-your-cms.png";
import OneClickExportImage from "./google-docs-add-on-1-click-export.png";
import PreservesFormattingImage from "./preserves-formatting.png";
import QuicklyNavigateImage from "./quickly-navigate-from-google-docs-to-exported-content-in-wordpress.png";
import SetsAdditionalFieldsImage from "./sets-additional-fields-in-wordpress.png";
import GutenbergOrClassicImage from "./wordpress-gutenberg-or-classic.png";
import PostOrPageImage from "./wordpress-post-or-page.png";
import ExportCustomGutenbergBlocksImage from "./export-custom-gutenberg-blocks.png";
import IntegrationCta from "../../../components/integration-cta";
import IntegrationHeroSection from "../../../components/integration-hero-section";
import FeatureBlockWithImage from "../../../components/feature-block-with-image";
import FeatureList from "../../../components/feature-list";
import React from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { ConnectionIcon, ExportIcon } from "../../../components/icons";
import IntegrationGettingStartedSection from "../../../components/integration-getting-started-section";
import { LinkButton } from "../../../components/buttons";
import { BookOpenIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

export default function Page() {
  const source = "google-docs";
  const destination = "wordpress";

  return (
    <Layout>
      <NextSeo
        title="Export Google Docs to WordPress | Integrations"
        description="Export from Google Docs to WordPress with our Google Docs Add-on or automate it with our Zapier and Make.com integration."
        openGraph={{
          type: "website",
          images: [
            {
              url: "https://www.usecloudpress.com/images/social/export-google-docs-to-wordpress.png",
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
              "Connect the WordPress account you wish to export your content to.",
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
        title="Export content with one click"
        content={
          <>
            <p>
              With the Google Docs Add-on, you can export your content from the
              comfort of the Google Docs editor. There is no need to navigate to
              an external application - simply open the Cloudpress Google Docs
              Add-on and click the export button.
            </p>
            <FeatureList
              features={[
                "Save time by not leaving the Google Docs editor",
                "Get updates on the export progress from inside the Google Docs editor",
                "Navigate directly to the exported content in WordPress",
              ]}
            />
          </>
        }
        image={OneClickExportImage}
        imageAlt="One click exports from Google Docs to WordPress"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Preserve all your formatting"
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
        image={PreservesFormattingImage}
        imageAlt="Converts Google Docs formatting to correct WordPress Gutenberg blocks"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Export your images"
        content={
          <>
            <p>
              Cloudpress uploads all the images in your document to the media
              library in WordPress and will create the correct image block in
              your content linking back to the image in the media library.
            </p>
            <FeatureList
              features={[
                "Preserves your image name for SEO purposes",
                "Supports alt text for SEO purposes",
              ]}
            />
          </>
        }
        image={ExportsImagesImage}
        imageAlt="Export images from Google Docs to WordPress media library"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Your choice of Gutenberg or Classic"
        content={
          <>
            <p>
              By default, Cloudpress will convert all your content to the
              correct Gutenberg blocks to ensure your content is rendered
              correctly. However, if you prefer to use the classic editor, we
              also support that.
            </p>
            <FeatureList
              features={[
                "Exports to Gutenberg by default",
                "Allows switching to classic blocks",
                "Full formatting support for both Gutenberg and classic blocks",
              ]}
            />
          </>
        }
        image={GutenbergOrClassicImage}
        imageAlt="Export content as Gutenberg or Classic blocks"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Automatically create embeds"
        content={
          <>
            <p>
              Cloudpress can detect links to content on sites like Twitter,
              TikTok and YouTube in your document and create the correct embed
              block for WordPress.
            </p>
            <FeatureList
              features={[
                "Supports common embeds like Twitter, TikTok, YouTube, Spotify, and many more",
                "Uses the WordPress API to create the correct Gutenberg embed blocks",
              ]}
            />
          </>
        }
        image={EmbedsImage}
        imageAlt="Automatically create embed blocks from links in Google Docs"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Supports WordPress posts and pages"
        content={
          <>
            <p>
              Cloudpress supports exporting to both WordPress posts and pages.
            </p>
            <FeatureList
              features={[
                "Export to posts",
                "Export to pages",
                "Full formatting support for both posts and pages",
              ]}
            />
          </>
        }
        image={PostOrPageImage}
        imageAlt="Export content as WordPress posts or pages"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Updates additional fields in WordPress"
        content={
          <>
            <p>
              Cloudpress handles more than just your content. It will also
              update additional fields in WordPress, such as the post category,
              author, featured image, etc.
            </p>
            <FeatureList
              features={[
                "Supports plain fields like title, slug, and excerpt",
                "Supports taxonomies like categories and tags and can look up the correct item based on the name",
                "Supports featured images",
              ]}
            />
          </>
        }
        image={SetsAdditionalFieldsImage}
        imageAlt="Update additonal fields in WordPress"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Export custom Gutenberg blocks"
        content={
          <>
            <p>
              Sometimes, you want to add a custom Gutenberg block like an email
              sign-up form, call to action, or countdown timer inside your
              content. For these occasions, our Raw Content Block feature will
              save the day.
            </p>
            <FeatureList
              features={[
                "Allows you to export any Gutenberg block with your content",
                "Ideal for things like calls to action and email signup forms",
              ]}
            />
            <div className="flex gap-x-4">
              <LinkButton
                href="https://www.youtube.com/watch?v=1zPb0-acQoU"
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
                href="https://www.usecloudpress.com/docs/integrations/wordpress/export-custom-gutenberg-blocks"
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
        image={ExportCustomGutenbergBlocksImage}
        imageAlt="Export custom Gutenberg blocks"
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
        image={BulkExportsImage}
        imageAlt="Bulk export documents from Google Docs to WordPress"
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
        imageAlt="Automate exports from Google Docs to WordPress"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Export content as draft or published"
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
        imageAlt="Export content in WordPress as drafts or published content"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Quickly navigate to exported content"
        content={
          <>
            <p>
              Once your export has been completed, you can easily navigate to
              the exported content in WordPress to review, edit, and publish the
              content. Or you can navigate to the preview or published version
              to see how the content is displayed on your website.
            </p>
            <FeatureList
              features={[
                "Navigate directly to the WordPress admin panel to edit the exported content",
                "Navigate directly to view the published or preview versions of the content",
                "Navigate directly to view the export log",
              ]}
            />
          </>
        }
        image={QuicklyNavigateImage}
        imageAlt="Quickly navigate from Google Docs to exported content in WordPress"
        imageAlignment="left"
      />

      <IntegrationCta destination={destination} />
    </Layout>
  );
}
