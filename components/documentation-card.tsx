import React from "react";
import Link from "next/link";

type Props = {
  category: any;
};

const DocumentationCard = ({ category }: Props) => {
  return (
    <div className="border px-6 py-4 space-y-2">
      <h3 className="font-semibold mb-3">{category.name}</h3>
      {category.linkedFrom.documentationCollection.items.map((node: any) => {
        return (
          <div key={node.slug}>
            <Link href={`/docs/${node.slug}`}>
              <a className="text-brand-600 hover:text-brand-500">
                {node.title}
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default DocumentationCard;
