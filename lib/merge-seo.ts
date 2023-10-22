import { Metadata } from "next";
import { SEO } from "../seo-config";
import deepmerge from "deepmerge";

export function mergeSeo<T extends Omit<Metadata, "metadataBase">>(
  metadata: T
): Metadata {
  const mergedSeo = deepmerge(SEO, metadata, {
    arrayMerge: (dest, source) => [...dest, ...source],
  });

  if (metadata.openGraph?.images && mergedSeo.openGraph) {
    mergedSeo.openGraph.images = metadata.openGraph.images;
  }

  if (metadata.twitter?.images && mergedSeo.twitter) {
    mergedSeo.twitter.images = metadata.twitter.images;
  }

  mergedSeo.twitter = {
    title: mergedSeo.title ?? "",
    description: mergedSeo.description ?? "",
    ...mergedSeo.twitter,
  };
  mergedSeo.openGraph = {
    title: mergedSeo.title ?? "",
    description: mergedSeo.description ?? "",
    ...mergedSeo.openGraph,
  };

  return {
    ...mergedSeo,
    metadataBase: new URL("https://www.usecloudpress.com"),
  };
}
