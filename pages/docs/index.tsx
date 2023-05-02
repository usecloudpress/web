import { NextSeo } from "next-seo";
import DocumentationLayout from "../../components/layouts/DocumentationLayout";
import { Prose } from "../../components/Prose";
import { QuickLink, QuickLinks } from "../../components/docs/QuickLinks";
import { IntegrationsIcon } from "../../components/icons";
import { BookOpenIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <NextSeo
        title="Cloudpress documentation"
        description="Find documentation to help you use Cloudpress"
      />
      <DocumentationLayout
        title="Cloudpress Documentation"
        tableOfContents={[
          {
            title: "Introduction",
            id: "introduction",
            level: 2,
            children: [],
          },
          {
            title: "Quick starts",
            id: "quick-starts",
            level: 2,
            children: [],
          },
          {
            title: "Reference",
            id: "reference",
            level: 2,
            children: [],
          },
          {
            title: "Integrations",
            id: "integrations",
            level: 2,
            children: [],
          },
        ]}
      >
        <Prose>
          <h2 id="introduction">Introduction</h2>
          <p>
            Welcome to the Cloudpress documentation. The documentation is
            divided into the following three main sections.
          </p>
          <QuickLinks>
            <QuickLink
              title="Quick starts"
              description="Step-by-step guides to get you started with Cloudpress."
              href="/docs/quick-start"
              icon={<RocketLaunchIcon className="w-8 h-8 text-slate-600" />}
            />
            <QuickLink
              title="Reference"
              description="Get more in-depth information on how to get the most out of Cloudpress."
              href="/docs/reference"
              icon={<BookOpenIcon className="w-8 h-8 text-slate-600" />}
            />
            <QuickLink
              title="Integrations"
              description="Learn about the products that Cloudpress integrate with."
              href="/docs/integrations"
              icon={<IntegrationsIcon className="w-8 h-8 text-slate-600" />}
            />
          </QuickLinks>
          <p>
            You will find links to these sections in the navigation sidebar on
            the left, allowing you to quickly jump between these sections,
            depending on the information you&apos;re after.
          </p>
          <p>
            Let&apos;s look at what you can expect to find in each of these
            sections in more detail.
          </p>
          <h2 id="quick-start">Quick starts</h2>
          <p>
            If you&apos;re new around here, the best place to get started would
            be to refer to the <Link href="/docs/quick-start">Quick start</Link>{" "}
            section. This will walk you through the process of creating an
            account with Cloudpress, linking your Content Management System
            (CMS) account, and exporting your first document.
          </p>
          <h2 id="reference">Reference</h2>
          <p>
            The <Link href="/docs/reference">Reference section</Link> will take
            you beyond the basics and help you to get the most out of
            Cloudpress. You will learn about all features in Cloudpress that
            allows you to completely automate your content publishing workflow.
          </p>
          <h2 id="integrations">Integrations</h2>
          <p>
            The <Link href="/docs/integrations">Integrations section</Link> is
            where you can find in-depth information about how to integrate your
            CMS with Cloudpress. You will also find information on installing
            and using the Cloudpress Google Docs Add-on, as well as connecting
            your Notion account.
          </p>
        </Prose>
      </DocumentationLayout>
    </>
  );
}
