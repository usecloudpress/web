import React from "react";
import CustomLink from "./CustomLink";
import Markdoc, { RenderableTreeNode } from "@markdoc/markdoc";

type Props = {
  content: RenderableTreeNode;
};

const Markdown = ({ content }: Props) => {
  const components = {
    CustomLink,
  };

  return <>{Markdoc.renderers.react(content, React, { components })}</>;
};

export default Markdown;
