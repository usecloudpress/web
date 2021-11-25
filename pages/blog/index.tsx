import Layout from "../../components/layout";
import Link from "next/link";
import { getRecentBlogPosts } from "../../lib/ContentfulApi";
import DateFormatter from "../../components/date-formatter";
import { NextSeo } from "next-seo";

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
        <div className="mx-auto max-w-7xl">
          <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="divide-y-2 divide-gray-200">
              <div>
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                  Recent blog posts
                </h2>
                <div className="mt-3 sm:mt-4">
                  <p className="text-xl text-gray-500">
                    All the latest Cloudpress and industry news, straight from
                    the team.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                {posts &&
                  posts.map((post: any) => (
                    <div key={post.slug}>
                      <p className="text-sm text-gray-500">
                        <DateFormatter dateString={post.date} />
                      </p>
                      <Link href={`/blog/${post.slug}`}>
                        <a className="mt-2 block">
                          <p className="text-xl font-semibold text-gray-900">
                            {post.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {post.excerpt}
                          </p>
                        </a>
                      </Link>
                      <div className="mt-3">
                        <Link href={`/blog/${post.slug}`}>
                          <a
                            className="text-base font-semibold text-brand-600
                                                       hover:text-brand-500"
                          >
                            Read full story
                          </a>
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
  const recentPosts = (await getRecentBlogPosts(preview)) ?? [];
  return {
    props: { preview, posts: recentPosts },
  };
}
