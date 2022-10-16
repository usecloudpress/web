import { getDocumentationIndex } from "../../lib/ContentfulApi";
import DocumentationCard from "../../components/documentation-card";
import { NextSeo } from "next-seo";
import DocumentationLayout from "../../components/layouts/DocumentationLayout";

type Props = {
  categories: any;
  preview?: boolean;
};

export default function Index({ categories }: Props) {
  return (
    <>
      <NextSeo
        title="Cloudpress documentation"
        description="Find documentation to help you use Cloudpress"
      />
      <DocumentationLayout title="Documentation" tableOfContents={[]}>
        <div className="mx-auto max-w-7xl">
          <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="divide-y-2 divide-gray-200">
              <div>
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                  Documentation
                </h2>
                <div className="mt-3 sm:mt-4">
                  <p className="text-xl text-gray-500">
                    Find documentation to help you use Cloudpress.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                {categories &&
                  categories.map((category: any) => (
                    <DocumentationCard
                      category={category}
                      key={category.slug}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </DocumentationLayout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const categories = (await getDocumentationIndex(preview)) ?? [];
  return {
    props: { preview, categories },
  };
}
