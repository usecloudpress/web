export async function getAllBlogPosts(preview: boolean) {
  const entries = await fetchGraphQL(
    /* GraphQL */
    `
      query {
        blogPostCollection(order: date_DESC) {
          items {
            title
            slug
            excerpt
          }
        }
      }
    `,
    preview
  );
  return extractBlogPostEntries(entries);
}

export async function getBlogPost(slug: string, preview: boolean) {
  const entries = await fetchGraphQL(
    /* GraphQL */
    `
            query {
                blogPostCollection(where: { slug: "${slug}" },order: date_DESC) {
                    items {
                        title
                        content
                        slug
                        date
                        metaTitle
                        metaDescription
                        featuredImage {
                            url
                        }
                    }
                }
            }
        `,
    preview
  );
  return extractBlogPost(entries);
}

export async function getAllDocumentation(preview: boolean) {
  const entries = await fetchGraphQL(
    /* GraphQL */
    `
      query {
        documentationCollection {
          items {
            title
            slug
            content
          }
        }
      }
    `,
    preview
  );
  return extractDocumentationEntries(entries);
}

export async function getDocumentation(slug: string, preview: boolean) {
  const entries = await fetchGraphQL(
    /* GraphQL */
    `query {
            documentationCollection(where: { slug: "${slug}" }) {
                items {
                    title
                    content
                    slug
                    metaTitle
                    metaDescription
                }
            }
        }
        `,
    preview
  );
  return extractDocumentation(entries);
}

export async function getDocumentationIndex(preview: boolean) {
  const entries = await fetchGraphQL(
    /* GraphQL */
    `
      query {
        documentationCategoryCollection(order: order_ASC) {
          items {
            name
            slug
            linkedFrom {
              documentationCollection {
                items {
                  title
                  slug
                }
              }
            }
          }
        }
      }
    `,
    preview
  );
  return extractDocumentationCategoryEntries(entries);
}

export async function getRecentBlogPosts(preview: boolean) {
  const entries = await fetchGraphQL(
    /* GraphQL */
    `
      query {
        blogPostCollection(order: date_DESC, limit: 10) {
          items {
            title
            slug
            excerpt
            date
          }
        }
      }
    `,
    preview
  );
  return extractBlogPostEntries(entries);
}

function extractBlogPost(fetchResponse: any) {
  const collection = extractBlogPostEntries(fetchResponse);

  return collection?.[0];
}

function extractBlogPostEntries(fetchResponse: any) {
  return fetchResponse?.data?.blogPostCollection?.items;
}

function extractDocumentation(fetchResponse: any) {
  const collection = extractDocumentationEntries(fetchResponse);

  return collection?.[0];
}

function extractDocumentationEntries(fetchResponse: any) {
  return fetchResponse?.data?.documentationCollection?.items;
}

function extractDocumentationCategoryEntries(fetchResponse: any) {
  return fetchResponse?.data?.documentationCategoryCollection?.items;
}

async function fetchGraphQL(query: string, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}
