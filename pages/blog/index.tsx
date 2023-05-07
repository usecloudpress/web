import Layout from "../../components/layouts/Layout";
import Link from "next/link";
import { getAllBlogPosts } from "../../lib/ContentfulApi";
import DateFormatter from "../../components/date-formatter";
import { NextSeo } from "next-seo";
import PageHeaderSection from "../../components/page-header-section";

type Props = {
  posts: any;
  preview?: boolean;
};

export default function Index({ posts }: Props) {
  return (
    <>
      <NextSeo
        title="Cloudpress blog"
        description="All the latest Cloudpress and industry news, straight from the team"
      />
      <Layout>
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
                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-2 block"
                        legacyBehavior
                      >
                        <>
                          <p className="text-xl font-semibold text-gray-900">
                            {post.title}
                          </p>
                          <p className="mt-3 text-sm text-gray-600">
                            {post.excerpt}
                          </p>
                        </>
                      </Link>
                      <div className="mt-3">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-sm font-semibold text-brand-600
                                                   hover:text-brand-500"
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
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const recentPosts = (await getAllBlogPosts(preview)) ?? [];
  return {
    props: { preview, posts: recentPosts },
  };
}
