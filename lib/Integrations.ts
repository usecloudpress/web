const allIntegrations: Integration[] = [
  {
    slug: "google-docs",
    name: "Google Docs",
    logo: "google-docs.png",
    kind: "source",
  },
  {
    slug: "notion",
    name: "Notion",
    logo: "notion.png",
    kind: "source",
  },
  {
    slug: "contentful",
    name: "Contentful",
    logo: "contentful.png",
    kind: "destination",
  },
  {
    slug: "kontent-ai",
    name: "Kontent.ai",
    logo: "kontent.png",
    kind: "destination",
  },
  {
    slug: "sanity",
    name: "Sanity",
    logo: "sanity.png",
    kind: "destination",
  },
  {
    slug: "webflow",
    name: "Webflow",
    logo: "webflow.svg",
    kind: "destination",
  },
  {
    slug: "wordpress",
    name: "WordPress",
    logo: "wordpress.png",
    kind: "destination",
  },
];

export type IntegrationKind = "source" | "destination";
export type Integration = {
  slug: string;
  name: string;
  logo: string;
  kind: IntegrationKind;
};

export const thisIntegration = (
  kind: IntegrationKind,
  source: string,
  destination: string
): Integration => {
  const comparisonSlug = kind === "source" ? source : destination;
  return allIntegrations.filter((i) => i.slug === comparisonSlug)[0];
};

export const otherIntegrations = (
  kind: IntegrationKind,
  source: string,
  destination: string
): Integration[] => {
  const comparisonSlug = kind === "source" ? source : destination;
  return allIntegrations.filter(
    (i) => i.kind === kind && i.slug !== comparisonSlug
  );
};
