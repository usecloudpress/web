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
      <DocumentationLayout title={doc.title}>
        <Markdown content={content} />
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
