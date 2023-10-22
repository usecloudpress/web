import React from "react";
import Faq from "./faq";
import Header from "./header";
import HowTo from "./how-to";
import Why from "./why";
import ExportComponent from "./export-component";
import { headers } from "next/headers";
import { mergeSeo } from "../../../../../lib/merge-seo";

export const metadata = mergeSeo({
  title: "Export Google Docs to HTML",
  description:
    "Export a Google Doc to clean HTML without unnecessary HTML markup and CSS",
});

export default function Page() {
  const csrfToken = headers().get("X-CSRF-Token") || "missing";

  return (
    <>
      <Header />
      <ExportComponent csrfToken={csrfToken} />
      <HowTo />
      <Why />
      <Faq />
    </>
  );
}
