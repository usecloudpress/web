import Link from "next/link";
import Layout from "../../../components/layouts/Layout";
import { NextSeo } from "next-seo";
import imageCompare1 from "../../../public/images/terracotta-army-google-docs.png";
import imageCompare2 from "../../../public/images/terracotta-army-wordpress.png";
import imageWrite from "./write.png";
import imageAddOn from "./add-on.png";
import imageFormatting from "./formatting.png";
import imageImages from "./images.png";
import imageGutenberg from "./gutenberg.png";
import imageReexport from "./reexport.png";
import imageAutoEmbed from "./auto-embed.png";
import imageExportFields from "./export-fields.png";
import IntegrationLandingPageHeader from "../../../components/integration-landing-page-header";
import IntegrationCta from "../../../components/integration-cta";
import FeatureBlockWithImage from "../../../components/feature-block-with-image";
import FeatureListItem from "../../../components/feature-list-item";

export default function Page() {
  const source = "google-docs";
  const destination = "wordpress";

  return (
    <Layout>
      <NextSeo title="Export content from Google Docs to WordPress" />
      <IntegrationLandingPageHeader
        source={source}
        destination={destination}
        imageCompare1={imageCompare1}
        imageCompare2={imageCompare2}
      />

      <div className="py-16 bg-gradient-to-b from-brand-100 to-white overflow-hidden lg:pb-24">
        {/* Write in Google Docs */}
        <FeatureBlockWithImage
          image={imageWrite}
          imageAlignment="left"
          title={
            <>
              Write in{" "}
              <span className="underline underline-offset-2 decoration-brand-500 decoration-4">
                Google Docs
              </span>
            </>
          }
          content={
            <>
              <p>
                Keep using the powerful editing and collaboration features that
                makes Google Docs such a great writing tool.
              </p>
              <p>
                <Link href="/blog/write-your-next-blog-post-in-google-docs/">
                  Read more
                </Link>{" "}
                about why we think Google Docs is a great choice for writing
                content.
              </p>
            </>
          }
        />

        {/* Export with one click */}
        <FeatureBlockWithImage
          image={imageAddOn}
          imageAlignment="right"
          title={
            <>
              Export with{" "}
              <span className="underline underline-offset-2 decoration-brand-500 decoration-4">
                one click
              </span>
            </>
          }
          content={
            <>
              <p>
                Using our Google Docs Add-On, you can export your content
                without ever leaving Google Docs. Just click the export button
                and wait for the export to finish.
              </p>
              <p>
                Once your export has completed, you can easily navigate to the
                exported content in WordPress to edit any additional fields or
                publish the content.
              </p>
              <p>
                <Link href="/docs/integrations/google-docs/introduction">
                  Learn more
                </Link>{" "}
                about our Google Docs Add-on.
              </p>
            </>
          }
        />

        {/* Exports additional post settings */}
        <FeatureBlockWithImage
          image={imageExportFields}
          imageAlignment="bottom"
          title={
            <>
              Exports{" "}
              <span className="underline underline-offset-2 decoration-brand-500 decoration-4">
                additional
              </span>{" "}
              post settings
            </>
          }
          content={
            <>
              <p>
                Add values for additional post settings like the category,
                featured image, etc., to the top of your document in a property
                table, and Cloudpress will automatically update the related
                fields in WordPress.
              </p>
            </>
          }
        />

        {/* Preserve your formatting */}
        <FeatureBlockWithImage
          image={imageFormatting}
          imageAlignment="left"
          title={
            <>
              <span className="underline underline-offset-2 decoration-brand-500 decoration-4">
                Preserve
              </span>{" "}
              your formatting
            </>
          }
          content={
            <>
              <p>
                Cloudpress does a great job of preserving your formatting and
                handles all the common formatting styles used in Google Docs,
                such as
              </p>
              <ul className="space-y-4 mt-5">
                <FeatureListItem text="Headings" />
                <FeatureListItem text="Bold text" />
                <FeatureListItem text="Italic text" />
                <FeatureListItem text="Tables" />
                <FeatureListItem text="Lists" />
                <FeatureListItem text="And more..." />
              </ul>
            </>
          }
        />

        {/* Works for your images too */}
        <FeatureBlockWithImage
          image={imageImages}
          imageAlignment="right"
          title={
            <>
              Export your{" "}
              <span className="underline underline-offset-2 decoration-brand-500 decoration-4">
                images
              </span>{" "}
              too
            </>
          }
          content={
            <>
              <p>
                Cloudpress does not just work with text - your images are taken
                along for the ride as well. Images are exported to your
                WordPress image library and added to your post on WordPress. It
                will even preserve Alt Text added to the images in your document
                to improve your SEO.
              </p>
            </>
          }
        />

        {/* Works with Gutenberg */}
        <FeatureBlockWithImage
          image={imageGutenberg}
          imageAlignment="left"
          title={
            <>
              Works with{" "}
              <span className="underline underline-offset-2 decoration-brand-500 decoration-4">
                Gutenberg
              </span>
            </>
          }
          content={
            <>
              <p>
                When exporting your content to WordPress, Cloudpress will
                automatically convert the content to the corresponding Gutenberg
                blocks, ensuring that your content renders correctly in
                WordPress.
              </p>
            </>
          }
        />

        {/* Auto-detects embeds */}
        <FeatureBlockWithImage
          image={imageAutoEmbed}
          imageAlignment="bottom"
          title={
            <>
              Auto-detects{" "}
              <span className="underline underline-offset-2 decoration-brand-500 decoration-4">
                embeds
              </span>
            </>
          }
          content={
            <>
              <p>
                Cloudpress can auto-detect links to content on sites like
                Twitter, Instagram, TikTok, YouTube, and more, and converts them
                to the correct embed blocks in WordPress.
              </p>
            </>
          }
        />

        {/* Re-export content */}
        <FeatureBlockWithImage
          image={imageReexport}
          imageAlignment="right"
          title={
            <>
              <span className="underline underline-offset-2 decoration-brand-500 decoration-4">
                Re-export
              </span>{" "}
              content
            </>
          }
          content={
            <>
              <p>
                Made changes and want to re-export your content from Google
                Docs?
              </p>
              <p>
                No worries. Cloudpress will update the content of the previously
                exported content without messing up any of the other properties
                you may have edited in WordPress.
              </p>
            </>
          }
        />
      </div>

      <IntegrationCta destination={destination} />
    </Layout>
  );
}
