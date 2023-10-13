import React from "react";
import Layout from "../../../../components/layouts/Layout";
import Faq from "./faq";
import Header from "./header";
import HowTo from "./how-to";
import Why from "./why";
import ExportComponent from "./export-component";

export default function Index(): JSX.Element {
  return (
    <>
      <Layout>
        <Header />
        <ExportComponent />
        <HowTo />
        <Why />
        <Faq />
      </Layout>
    </>
  );
}
