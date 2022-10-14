import React from "react";
import CustomLink from "./custom-link";
import Markdoc, { nodes as defaultNodes } from "@markdoc/markdoc";

type Props = {
  markdown?: string;
};

const Markdown = ({ markdown }: Props) => {
  const ast = Markdoc.parse(markdown ?? "");
  const content = Markdoc.transform(ast, {
    nodes: {
      link: {
        ...defaultNodes.link,
        render: "CustomLink",
      },
    },
  });
  const components = {
    CustomLink,
  };

  return <>{Markdoc.renderers.react(content, React, { components })}</>;
};

export default Markdown;
