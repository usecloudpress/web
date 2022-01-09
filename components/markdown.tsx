import React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeReact from "rehype-react";
import rehypeRaw from "rehype-raw";
import { inspectUrls } from "@jsdevtools/rehype-url-inspector";
import CustomLink from "./custom-link";

type Props = {
  markdown?: string;
};

const Markdown = ({ markdown }: Props) => {
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

  return <>{processor.processSync(markdown).result}</>;
};

export default Markdown;
