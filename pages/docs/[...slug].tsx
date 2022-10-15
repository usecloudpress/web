import { getAllDocumentation, getDocumentation } from "../../lib/ContentfulApi";
import Markdown from "../../components/markdown/markdown";
import { NextSeo } from "next-seo";
import DocumentationLayout from "../../components/layouts/documentationLayout";
import { generateContent } from "../../components/markdown/helpers";

type Props = {
  doc: any;
  preview?: boolean;
};

export default function Documentation({ doc }: Props) {
  const { content } = generateContent(doc.content);
  // console.log(content);
  // const headings = collectHeadings(content);
  // console.log("Headings", headings);

  return (
    <>
      <NextSeo
        title={doc.metaTitle || doc.title}
        description={doc.metaDescription}
      />
      <DocumentationLayout>
        <div className="bg-white pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-20 lg:px-8">
          <div className="mx-auto lg:max-w-7xl">
            <article>
              <header className="pt-6 pb-10 md:pb-16">
                <div className="space-y-1 text-center">
                  <div>
                    <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                      {doc.title}
                    </h1>
                  </div>
                </div>
              </header>
              <div className="prose mx-auto max-w-4xl">
                <Markdown content={content} />
              </div>
            </article>
          </div>
        </div>
      </DocumentationLayout>
    </>
  );
}

type Params = {
  params: {
    slug: string[];
  };
  preview: boolean;
};

export async function getStaticProps({ params, preview = false }: Params) {
  const fullSlug = params.slug.join("/");
  const doc = await getDocumentation(fullSlug, true);

  return {
    props: {
      preview,
      doc,
    },
  };
}

export async function getStaticPaths() {
  const allDocs = await getAllDocumentation(false);

  return {
    paths: allDocs?.map(({ slug }: { slug: string }) => `/docs/${slug}`) ?? [],
    fallback: false,
  };
}
