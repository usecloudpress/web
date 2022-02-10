import Layout from "../../../components/layout";
import { NextSeo } from "next-seo";
import imageCompare1 from "./compare-1.png";
import imageCompare2 from "./compare-2.png";
import Link from "next/link";
import imageWrite from "./write.png";
import imageAddOn from "./add-on.png";
import imageFormatting from "./formatting.png";
import imageReexport from "./reexport.png";
import IntegrationLandingPageHeader from "../../../components/integration-landing-page-header";
import IntegrationCta from "../../../components/integration-cta";
import ExportFeatureBlockWithImage from "../../../components/feature-block-with-image";
import FeatureListItem from "../../../components/feature-listitem";

export default function WebflowPage() {
  const source = "google-docs";
  const destination = "webflow";

  return (
    <Layout>
      <NextSeo title="Export from Google Docs to Webflow" />
      <IntegrationLandingPageHeader
        source={source}
        destination={destination}
        imageCompare1={imageCompare1}
        imageCompare2={imageCompare2}
      />

      <div className="py-16 bg-gradient-to-b from-brand-100 to-white overflow-hidden lg:pb-24">
        {/* Write in Google Docs */}
        <ExportFeatureBlockWithImage
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
                  <a>Read more</a>
                </Link>{" "}
                about why we think Google Docs is a great choice for writing
                content.
              </p>
            </>
          }
        />

        {/* Export with one click */}
        <ExportFeatureBlockWithImage
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
                exported content in Webflow to edit any additional fields or
                publish the content.
              </p>
              <p>
                <Link href="/docs/introduction-to-the-google-docs-add-on">
                  <a>Learn more</a>
                </Link>{" "}
                about our Google Docs Add-on.
              </p>
            </>
          }
        />

        {/* Preserve your formatting */}
        <ExportFeatureBlockWithImage
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

        {/* Re-export content */}
        <ExportFeatureBlockWithImage
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
                you may have updated in Webflow.
              </p>
            </>
          }
        />
      </div>
      <IntegrationCta destination={destination} />
    </Layout>
  );
}
