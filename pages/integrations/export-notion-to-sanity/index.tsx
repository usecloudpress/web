import Layout from "../../../components/layouts/Layout";
import { NextSeo } from "next-seo";
import imageCompare1 from "../../../public/images/terracotta-army-notion.png";
import imageCompare2 from "../../../public/images/terracotta-army-sanity.png";
import imageWrite from "./write.png";
import imageExport from "./export.png";
import imageModelConfiguration from "./schema-configuration.png";
import imageFormatting from "./formatting.png";
import imageImages from "./images.png";
import IntegrationLandingPageHeader from "../../../components/integration-landing-page-header";
import IntegrationCta from "../../../components/integration-cta";
import FeatureBlockWithImage from "../../../components/feature-block-with-image";
import FeatureListItem from "../../../components/feature-list-item";
import Link from "next/link";

export default function Page() {
  const source = "notion";
  const destination = "sanity";

  return (
    <Layout>
      <NextSeo title="Export content from Notion to Sanity" />
      <IntegrationLandingPageHeader
        source={source}
        destination={destination}
        imageCompare1={imageCompare1}
        imageCompare2={imageCompare2}
      />

      <div className="py-16 bg-gradient-to-b from-brand-100 to-white overflow-hidden lg:pb-24">
        {/* Write in Notion */}
        <FeatureBlockWithImage
          image={imageWrite}
          imageAlignment="left"
          title={
            <>
              Write and collaborate{" "}
              <span className="underline underline-offset-2 decoration-brand-500 decoration-4">
                in Notion
              </span>
            </>
          }
          content={
            <>
              <p>
                We understand that you love the block-based editor and
                collaboration features of Notion and may prefer it over the
                content editing experience in Sanity.
              </p>
              <p>With Cloudpress, you can keep using the tools you love ❤</p>
            </>
          }
        />

        {/* Export with one click */}
        <FeatureBlockWithImage
          image={imageExport}
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
                Using the Cloudpress web app, you can export your content with
                the click of a button.
              </p>
              <p>
                If you make changes to the Notion document you can easily export
                it again, and Cloudpress will update the content of the
                previously exported item in Sanity.
              </p>
            </>
          }
        />

        {/* Works with your Schema */}
        <FeatureBlockWithImage
          image={imageModelConfiguration}
          imageAlignment="left"
          title={
            <>
              Works with{" "}
              <span className="underline underline-offset-2 decoration-brand-500 decoration-4">
                your schema
              </span>
            </>
          }
          content={
            <>
              <p>
                Cloudpress works with your schema. Simply connect your Sanity
                account, tell Cloudpress which fields to use for the title and
                content of the exported document, and we’ll take care of the
                rest.
              </p>
              <p>
                <Link href="/docs/integrations/sanity/connect-account">
                  Learn how
                </Link>{" "}
                to configure your Sanity account.
              </p>
            </>
          }
        />

        {/* Preserve your formatting */}
        <FeatureBlockWithImage
          image={imageFormatting}
          imageAlignment="right"
          title={
            <>
              We{" "}
              <span className="underline underline-offset-2 decoration-brand-500 decoration-4">
                understand
              </span>{" "}
              Notion blocks
            </>
          }
          content={
            <>
              <p>
                Cloudpress understands how to work with Notion blocks and
                convert them to the correct format for Sanity. It handles all
                the common block types and formatting used in Notion, such as
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

        {/* Export your images too */}
        <FeatureBlockWithImage
          image={imageImages}
          imageAlignment="left"
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
                along for the ride as well. Images are exported as Assets to
                Sanity and linked correctly in the exported content.
              </p>
            </>
          }
        />
      </div>
      <IntegrationCta destination={destination} />
    </Layout>
  );
}
