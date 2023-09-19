// See https://nextjs.org/learn/basics/dynamic-routes/render-markdown
// and https://claritydev.net/blog/nextjs-blog-remark-interactive-table-of-contents

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import rehypeRaw from "rehype-raw";
import { inspectUrls } from "@jsdevtools/rehype-url-inspector";
import CustomLink from "./CustomLink";
import React from "react";

export function generateContent(markdown?: string): {
  content: JSX.Element;
  tableOfContents: TocItem[];
} {
  const domainRegex = /https:\/\/www\.usecloudpress\.com\//;

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(inspectUrls, {
      selectors: ["a[href]"],
      inspectEach({ url, node, propertyName }) {
        if (node.properties && propertyName) {
          // Make URLs that start with https://www.usecloudpress.com/ relative (/)
          if (domainRegex.test(url)) {
            node.properties[propertyName] = url.replace(domainRegex, "/");
          }
        }
      },
    })
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        a: CustomLink,
      },
    });

  // const tableOfContents = collectHeadings(content);

  return {
    content: processor.processSync(markdown).result,
    tableOfContents: [],
  };
}

export interface TocItem {
  id: string;
  title: string;
  level: number;
  children: TocItem[];
}

/*
export function collectHeadings(
  node: RenderableTreeNode,
  sections: TocItem[] = []
): TocItem[] {
  if (isTag(node)) {
    if (node.name === "h2" || node.name === "h3") {
      const title = node.children[0];

      if (typeof title === "string") {
        const item: TocItem = {
          id: node.attributes["id"],
          level: node.attributes["level"],
          title,
          children: [],
        };

        if (node.name === "h3") {
          if (!sections[sections.length - 1]) {
            throw new Error(
              "Cannot add `h3` to table of contents without a preceding `h2`"
            );
          }
          sections[sections.length - 1].children.push(item);
        } else {
          sections.push(item);
        }
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child as Tag, sections);
      }
    }
  }

  return sections;
}
*/
