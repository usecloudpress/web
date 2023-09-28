import Layout from "../../../components/layouts/Layout";
import { NextSeo } from "next-seo";
import imageCompare1 from "../../../public/images/terracotta-army-notion.png";
import imageCompare2 from "../../../public/images/terracotta-army-wordpress.png";
import BulkExportImage from "./bulk-export-content-from-notion-to-wordpress.png";
import ConvertEmbedsImage from "./convert-notion-blocks-to-wordpress-embeds.png";
import CorrectFormattingImage from "./converts-notion-formatting-to-correct-gutenberg-blocks.png";
import GutenbergOrClassicImage from "./export-as-gutenberg-or-classic.png";
import PostOrPageImage from "./export-as-wordpress-post-or-page.png";
import ExportImagesImage from "./export-images-from-notion-to-wordpress.png";
import DraftOrPublishedImage from "./export-wordpress-posts-as-draft-or-published.png";
import MapPropertiesImage from "./map-notion-database-properties-to-wordpress-fields.png";
import QuicklyNavigateImage from "./quickly-navigate-to-exported-content-in-wordpress.png";
import ExportCustomGutenbergBlocksImage from "./export-custom-gutenberg-blocks.png";
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
  const destination = "wordpress";

  return (
    <Layout>
      <NextSeo
        title="Export Notion to WordPress | Integrations"
        description="Export from Notion to WordPress with the click of a button or automate it with our Zapier and Make.com integration."
        openGraph={{
          type: "website",
          images: [
            {
              url: "https://www.usecloudpress.com/images/social/export-notion-to-wordpress.png",
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
              "Connect your Notion account and the WordPress account you wish to export to.",
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
        title="Preserves formatting"
        content={
          <>
            <p>
              Cloudpress understands Notion blocks and does a great job of
              preserving your formatting. It handles all common formatting
              styles, such as headings, bold, italic, and underlined text,
              lists, tables, code blocks, and more…
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
        image={CorrectFormattingImage}
        imageAlt="Convert formatting from Notion to WordPress Gutenberg blocks"
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Exports your images"
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
        image={ExportImagesImage}
        imageAlt="Export images from Notion to WordPress media library"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Gutenberg or Classic, your choice"
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
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Handles Notion embeds"
        content={
          <>
            <p>
              Cloudpress handles Notion embeds correctly and ensures that they
              are converted to the correct Gutenberg embed blocks in WordPress
            </p>
            <FeatureList
              features={[
                "Supports common embeds like Twitter, TikTok, YouTube, Spotify, and many more",
                "Uses the WordPress API to create the correct Gutenberg embed blocks",
              ]}
            />
          </>
        }
        image={ConvertEmbedsImage}
        imageAlt="Convert Notion embeds to correct Gutenberg embed blocks"
        imageAlignment="left"
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
                href="https://www.youtube.com/watch?v=wRKfUtsp0iM"
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
        imageAlignment="right"
      />

      <FeatureBlockWithImage
        title="Supports posts and pages"
        content={
          <>
            <p>
              Cloudpress supports exporting content from Notion to both
              WordPress posts and pages.
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
        imageAlt="Exports content in WordPress as posts or pages"
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
        imageAlt="Bulk export documents from Notion to WordPress"
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
        imageAlt="Automate exports Notion to WordPress"
        imageAlignment="left"
      />

      <FeatureBlockWithImage
        title="Export Notion databases"
        content={
          <>
            <p>
              Cloudpress allows you to export your entire Notion database to
              WordPress. It exports the content, and you can map properties from
              your database to fields in WordPress.
            </p>
            <FeatureList
              features={[
                "Supports the majority of Notion property types, including selects and images",
                "Supports taxonomies like categories and tags and can look up the correct item based on the name",
                "Allows exporting a subset of pages from the database based on filter criteria",
              ]}
            />
          </>
        }
        image={MapPropertiesImage}
        imageAlt="Export Notion database to WordPress"
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
        imageAlt="Export content as draft or published in WordPress"
        imageAlignment="left"
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
                "Navigate directly to edit the document in WordPress",
                "Navigate directly to view the published or preview versions of the content",
                "Navigate directly to view the export log",
              ]}
            />
          </>
        }
        image={QuicklyNavigateImage}
        imageAlt="Quickly navigate to exported Notion content in WordPress"
        imageAlignment="right"
      />

      <IntegrationCta destination={destination} />
    </Layout>
  );
}
