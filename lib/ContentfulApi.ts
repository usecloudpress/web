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
            date
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
                        author {
                            name
                            bio
                            photo {
                                url
                            }
                        }
                    }
                }
            }
        `,
    preview
  );
  return extractBlogPost(entries);
}

export async function getChangelog(preview: boolean) {
  const entries = await fetchGraphQL(
    /* GraphQL */
    `
      query {
        changelogCollection(order: date_DESC) {
          items {
            title
            description
            date
          }
        }
      }
    `,
    preview
  );
  return extractChangelogEntries(entries);
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

function extractChangelogEntries(fetchResponse: any) {
  return fetchResponse?.data?.changelogCollection?.items;
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
