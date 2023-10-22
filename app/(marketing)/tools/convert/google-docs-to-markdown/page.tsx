import Header from "./header";
import HowTo from "./how-to";
import Why from "./why";
import Faq from "./faq";
import ExportComponent from "./export-component";
import { headers } from "next/headers";
import { mergeSeo } from "../../../../../lib/merge-seo";

export const metadata = mergeSeo({
  title: "Export Google Docs to Markdown",
  description:
    "Export a Google Doc to markdown with support for images, code blocks, embeds, and more",
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
