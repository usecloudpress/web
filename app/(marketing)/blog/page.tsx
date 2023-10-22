import Link from "next/link";
import { getAllBlogPosts } from "../../../lib/ContentfulApi";
import DateFormatter from "../../../components/date-formatter";
import PageHeaderSection from "../../../components/page-header-section";
import { Metadata } from "next";
import { mergeSeo } from "../../../lib/merge-seo";

export const metadata: Metadata = mergeSeo({
  title: "Latest blog posts",
  description:
    "All the latest Cloudpress and industry news, straight from the team",
});

export default async function Page() {
  const posts = (await getAllBlogPosts(false)) ?? [];

  return (
    <>
      <PageHeaderSection
        heading="Resources and insights"
        subHeading="Our blog"
        supportingText="The latest from the Cloudpress product team, as well as other industry news and insights"
      />
      <div className="mx-auto max-w-7xl">
        <div className="pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
          <div className="divide-y-2 divide-gray-200">
            <div className="mt-6 pt-10 grid gap-x-8 gap-y-16 lg:grid-cols-3">
              {posts &&
                posts.map((post: any) => (
                  <div key={post.slug}>
                    <p className="text-xs text-gray-500">
                      <DateFormatter dateString={post.date} />
                    </p>
                    <Link href={`/blog/${post.slug}`} className="mt-2 block">
                      <div>
                        <p className="text-xl font-semibold text-gray-900">
                          {post.title}
                        </p>
                        <p className="mt-3 text-sm text-gray-600">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                    <div className="mt-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-semibold text-brand-600 hover:text-brand-500"
                      >
                        Read full story
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
