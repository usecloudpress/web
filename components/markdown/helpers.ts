import Markdoc, {
  nodes as defaultNodes,
  RenderableTreeNode,
  Tag,
} from "@markdoc/markdoc";
import { slugifyWithCounter } from "@sindresorhus/slugify";
import { Parser } from "htmlparser2";

export function generateContent(markdown?: string): {
  content: RenderableTreeNode;
  tableOfContents: TocItem[];
} {
  const tokenizer = new Markdoc.Tokenizer({ html: true });
  const tokens = tokenizer.tokenize(markdown ?? "");
  const processed = processTokens(tokens);
  // const doc = Markdoc.parse(processed);
  const ast = Markdoc.parse(processed);
  const content = Markdoc.transform(ast, {
    nodes: {
      heading: {
        ...defaultNodes.heading,
        attributes: {
          id: { type: String },
          level: { type: Number, required: true, default: 1 },
          className: { type: String },
        },
        transform(node, config) {
          const attributes = node.transformAttributes(config);
          const children = node.transformChildren(config);
          const id = generateID(children, attributes);

          return new Tag(
            `h${node.attributes["level"]}`,
            { ...attributes, id },
            children
          );
        },
      },
      link: {
        ...defaultNodes.link,
        render: "CustomLink",
      },
    },
    tags: {
      "html-tag": {
        attributes: {
          name: { type: String, required: true },
          attrs: { type: Object },
        },
        transform(node, config) {
          const { name, attrs } = node.attributes;
          const children = node.transformChildren(config);
          return new Markdoc.Tag(name, attrs, children);
        },
      },
    },
  });

  const tableOfContents = collectHeadings(content);
  return { content, tableOfContents };
}

export interface TocItem {
  id: string;
  title: string;
  level: number;
  children: TocItem[];
}

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

function isTag(item: RenderableTreeNode): item is Tag {
  return (item as Tag).$$mdtype !== undefined;
}

function generateID(
  children: RenderableTreeNode[],
  attributes: Record<string, any>
) {
  if (attributes.id && typeof attributes.id === "string") {
    return attributes.id;
  }
  const slugify = slugifyWithCounter();
  const nodeText = children
    .filter((child) => typeof child === "string")
    .join(" ");
  return slugify(nodeText);
}

function processTokens(tokens: any) {
  const output = [];

  const parser = new Parser({
    onopentag(name: any, attrs: any) {
      output.push({
        type: "tag_open",
        nesting: 1,
        meta: {
          tag: "html-tag",
          attributes: [
            { type: "attribute", name: "name", value: name },
            { type: "attribute", name: "attrs", value: attrs },
          ],
        },
      });
    },

    ontext(content: any) {
      if (typeof content === "string" && content.trim().length > 0)
        output.push({ type: "text", content });
    },

    onclosetag() {
      output.push({
        type: "tag_close",
        nesting: -1,
        meta: { tag: "html_close" },
      });
    },
  });

  for (const token of tokens) {
    if (token.type.startsWith("html")) {
      parser.write(token.content);
      continue;
    }

    if (token.type === "inline") token.children = processTokens(token.children);

    output.push(token);
  }

  return output;
}
