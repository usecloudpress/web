import { getChangelog } from "../../../lib/ContentfulApi";
import DateFormatter from "../../../components/date-formatter";
import Markdown from "../../../components/markdown/Markdown";
import { generateContent } from "../../../components/markdown/helpers";
import PageHeaderSection from "../../../components/page-header-section";
import { mergeSeo } from "../../../lib/merge-seo";

function ChangeLogEntry({ entry }: { entry: any }) {
  const { content } = generateContent(entry.description);
  return (
    <section className="md:flex">
      <h2 className="pl-7 text-sm leading-6 text-slate-500 md:w-1/4 md:pl-0 md:pr-12 md:text-right">
        <DateFormatter dateString={entry.date} />
      </h2>
      <div className="relative pt-2 pl-7 md:w-3/4 md:pt-0 md:pl-12 pb-16">
        <div className="absolute bottom-0 left-0 w-px bg-slate-200 -top-3 md:top-2.5"></div>
        <div className="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-slate-300 bg-white md:top-[0.4375rem]"></div>
        <div className="max-w-none prose-h3:mb-4 prose-h3:text-base prose-h3:leading-6 prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
          <h3>{entry.title}</h3>
          <Markdown content={content} />
        </div>
      </div>
    </section>
  );
}

export const metadata = mergeSeo({
  title: "Cloudpress Changelog",
  description:
    "Stay up to date with all of the latest additions and improvements we've made to Cloudpress",
});

export default async function Page() {
  const entries = (await getChangelog(false)) ?? [];

  return (
    <>
      <PageHeaderSection
        heading="Latest product updates"
        subHeading="Changelog"
        supportingText="Stay up to date with all of the latest additions and improvements we've made to Cloudpress."
      />
      <div className="mx-auto max-w-7xl">
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20">
          {entries &&
            entries.map((entry: any) => (
              <ChangeLogEntry key={entry.date} entry={entry} />
            ))}
        </div>
      </div>
    </>
  );
}
