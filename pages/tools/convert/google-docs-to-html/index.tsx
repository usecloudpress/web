import React from "react";
import Layout from "../../../../components/layouts/Layout";
import Faq from "../../../../components/google-docs-to-html/faq";
import Header from "../../../../components/google-docs-to-html/header";
import HowTo from "../../../../components/google-docs-to-html/how-to";
import Why from "../../../../components/google-docs-to-html/why";
import ExportComponent from "../../../../components/google-docs-to-html/export-component";
import { NextSeo } from "next-seo";

export default function Index(): JSX.Element {
  return (
    <>
      <Layout>
        <NextSeo
          title="Export Google Docs to HTML"
          description="Export a Google Doc to clean HTML without unnecessary HTML markup and CSS"
        />
        <Header />
        <ExportComponent />
        <HowTo />
        <Why />
        <Faq />
      </Layout>
    </>
  );
}
