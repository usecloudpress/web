import { getAllBlogPosts, getBlogPost } from "../../../../lib/ContentfulApi";
import Markdown from "../../../../components/markdown/Markdown";
import DateFormatter from "../../../../components/date-formatter";
import { generateContent } from "../../../../components/markdown/helpers";
import { Metadata } from "next";
import { mergeSeo } from "../../../../lib/merge-seo";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug, true);

  return mergeSeo({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    openGraph: { images: [{ url: post.featuredImage.url }] },
  });
}

export async function generateStaticParams() {
  const allPosts = await getAllBlogPosts(false);

  return allPosts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: Props) {
  const post = await getBlogPost(params.slug, true);
  const { content } = generateContent(post.content);

  return (
    <>
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
            <div className="mx-auto max-w-4xl">
              <div className="prose max-w-none">
                <Markdown content={content} />
              </div>
              <hr className="my-8" />
              <div className="flex gap-8">
                <img
                  className="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  src={post.author.photo.url}
                  alt=""
                />
                <div className="flex flex-col gap-2">
                  <h5 className="font-semibold">{post.author.name}</h5>
                  <div className="text-gray-500">{post.author.bio}</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
