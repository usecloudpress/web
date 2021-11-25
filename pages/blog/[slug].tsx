import { getAllBlogPosts, getBlogPost } from "../../lib/ContentfulApi";
import Layout from "../../components/layout";
import Markdown from "../../components/markdown";
import DateFormatter from "../../components/date-formatter";
import { NextSeo } from "next-seo";

type Props = {
  post: any;
  preview?: boolean;
};

export default function BlogPost({ post }: Props) {
  return (
    <>
      <NextSeo
        title={post.metaTitle || post.title}
        description={post.metaDescription || post.excerpt}
        openGraph={{ images: [{ url: post.featuredImage.url }] }}
      />
      <Layout>
        <div className="bg-white pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-20 lg:px-8">
          <div className="mx-auto lg:max-w-7xl">
            <article>
              <header className="pt-6 pb-10 md:pb-16">
                <div className="space-y-1 text-center">
                  <dl className="space-y-10">
                    <div>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500">
                        <DateFormatter dateString={post.date} />
                      </dd>
                    </div>
                  </dl>
                  <div>
                    <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                      {post.title}
                    </h1>
                  </div>
                </div>
              </header>
              <div className="prose mx-auto max-w-4xl">
                <Markdown markdown={post.content} />
              </div>
            </article>
          </div>
        </div>
      </Layout>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
  preview: boolean;
};

export async function getStaticProps({ params, preview = false }: Params) {
  const post = await getBlogPost(params.slug, true);

  return {
    props: {
      preview,
      post,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllBlogPosts(false);

  return {
    paths: allPosts?.map(({ slug }: { slug: string }) => `/blog/${slug}`) ?? [],
    fallback: true,
  };
}
