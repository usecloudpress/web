// Generated with https://www.graphql-code-generator.com/

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   * compliant with the 'date-time' format outlined in section 5.6 of
   * the RFC 3339 profile of the ISO 8601 standard for representation
   * of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: "Asset";
  contentType?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["Int"]>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars["Int"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: InputMaybe<ImageTransformOptions>;
};

export type AssetCollection = {
  __typename?: "AssetCollection";
  items: Array<Maybe<Asset>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type AssetLinkingCollections = {
  __typename?: "AssetLinkingCollections";
  authorCollection?: Maybe<AuthorCollection>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type AssetLinkingCollectionsAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** The author of a particular piece of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/author) */
export type Author = Entry & {
  __typename?: "Author";
  bio?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<AuthorLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  photo?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** The author of a particular piece of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/author) */
export type AuthorBioArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** The author of a particular piece of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/author) */
export type AuthorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** The author of a particular piece of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/author) */
export type AuthorNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** The author of a particular piece of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/author) */
export type AuthorPhotoArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** The author of a particular piece of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/author) */
export type AuthorTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type AuthorCollection = {
  __typename?: "AuthorCollection";
  items: Array<Maybe<Author>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type AuthorLinkingCollections = {
  __typename?: "AuthorLinkingCollections";
  blogPostCollection?: Maybe<BlogPostCollection>;
  entryCollection?: Maybe<EntryCollection>;
  genericContentCollection?: Maybe<GenericContentCollection>;
};

export type AuthorLinkingCollectionsBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AuthorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type AuthorLinkingCollectionsGenericContentCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** Blog posts [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/blogPost) */
export type BlogPost = Entry & {
  __typename?: "BlogPost";
  author?: Maybe<Author>;
  content?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  date?: Maybe<Scalars["DateTime"]>;
  excerpt?: Maybe<Scalars["String"]>;
  featuredImage?: Maybe<Asset>;
  linkedFrom?: Maybe<BlogPostLinkingCollections>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** Blog posts [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/blogPost) */
export type BlogPostAuthorArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** Blog posts [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/blogPost) */
export type BlogPostContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Blog posts [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/blogPost) */
export type BlogPostDateArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Blog posts [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/blogPost) */
export type BlogPostExcerptArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Blog posts [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/blogPost) */
export type BlogPostFeaturedImageArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** Blog posts [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/blogPost) */
export type BlogPostLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Blog posts [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/blogPost) */
export type BlogPostMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Blog posts [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/blogPost) */
export type BlogPostMetaTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Blog posts [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/blogPost) */
export type BlogPostSlugArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Blog posts [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/blogPost) */
export type BlogPostTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type BlogPostCollection = {
  __typename?: "BlogPostCollection";
  items: Array<Maybe<BlogPost>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type BlogPostLinkingCollections = {
  __typename?: "BlogPostLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type BlogPostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type ContentfulMetadata = {
  __typename?: "ContentfulMetadata";
  tags: Array<Maybe<ContentfulTag>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 * Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: "ContentfulTag";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** Documentation articles [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/documentation) */
export type Documentation = Entry & {
  __typename?: "Documentation";
  categoryCollection?: Maybe<DocumentationCategoryCollection>;
  content?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<DocumentationLinkingCollections>;
  metaDescription?: Maybe<Scalars["String"]>;
  metaTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
};

/** Documentation articles [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/documentation) */
export type DocumentationCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

/** Documentation articles [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/documentation) */
export type DocumentationContentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Documentation articles [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/documentation) */
export type DocumentationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Documentation articles [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/documentation) */
export type DocumentationMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Documentation articles [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/documentation) */
export type DocumentationMetaTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Documentation articles [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/documentation) */
export type DocumentationSlugArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Documentation articles [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/documentation) */
export type DocumentationTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** The category that a specific piece of documentation belongs to [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/documentationCategory) */
export type DocumentationCategory = Entry & {
  __typename?: "DocumentationCategory";
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<DocumentationCategoryLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  order?: Maybe<Scalars["Int"]>;
  slug?: Maybe<Scalars["String"]>;
  sys: Sys;
};

/** The category that a specific piece of documentation belongs to [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/documentationCategory) */
export type DocumentationCategoryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** The category that a specific piece of documentation belongs to [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/documentationCategory) */
export type DocumentationCategoryNameArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** The category that a specific piece of documentation belongs to [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/documentationCategory) */
export type DocumentationCategoryOrderArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** The category that a specific piece of documentation belongs to [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/documentationCategory) */
export type DocumentationCategorySlugArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type DocumentationCategoryCollection = {
  __typename?: "DocumentationCategoryCollection";
  items: Array<Maybe<DocumentationCategory>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type DocumentationCategoryLinkingCollections = {
  __typename?: "DocumentationCategoryLinkingCollections";
  documentationCollection?: Maybe<DocumentationCollection>;
  entryCollection?: Maybe<EntryCollection>;
};

export type DocumentationCategoryLinkingCollectionsDocumentationCollectionArgs =
  {
    limit?: InputMaybe<Scalars["Int"]>;
    locale?: InputMaybe<Scalars["String"]>;
    preview?: InputMaybe<Scalars["Boolean"]>;
    skip?: InputMaybe<Scalars["Int"]>;
  };

export type DocumentationCategoryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type DocumentationCollection = {
  __typename?: "DocumentationCollection";
  items: Array<Maybe<Documentation>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type DocumentationLinkingCollections = {
  __typename?: "DocumentationLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type DocumentationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type EntryCollection = {
  __typename?: "EntryCollection";
  items: Array<Maybe<Entry>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

/** Generic type for all types of contentGeneric type for all types of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/genericContent) */
export type GenericContent = Entry & {
  __typename?: "GenericContent";
  author?: Maybe<Author>;
  body?: Maybe<Scalars["String"]>;
  contentfulMetadata: ContentfulMetadata;
  googleDocument?: Maybe<Scalars["String"]>;
  linkedFrom?: Maybe<GenericContentLinkingCollections>;
  publishDate?: Maybe<Scalars["DateTime"]>;
  seoMetaDescription?: Maybe<Scalars["String"]>;
  seoTitle?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
  updateDate?: Maybe<Scalars["DateTime"]>;
};

/** Generic type for all types of contentGeneric type for all types of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/genericContent) */
export type GenericContentAuthorArgs = {
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

/** Generic type for all types of contentGeneric type for all types of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/genericContent) */
export type GenericContentBodyArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Generic type for all types of contentGeneric type for all types of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/genericContent) */
export type GenericContentGoogleDocumentArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Generic type for all types of contentGeneric type for all types of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/genericContent) */
export type GenericContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

/** Generic type for all types of contentGeneric type for all types of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/genericContent) */
export type GenericContentPublishDateArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Generic type for all types of contentGeneric type for all types of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/genericContent) */
export type GenericContentSeoMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Generic type for all types of contentGeneric type for all types of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/genericContent) */
export type GenericContentSeoTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Generic type for all types of contentGeneric type for all types of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/genericContent) */
export type GenericContentSlugArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Generic type for all types of contentGeneric type for all types of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/genericContent) */
export type GenericContentTitleArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

/** Generic type for all types of contentGeneric type for all types of content [See type definition](https://app.contentful.com/spaces/8qo8k89f0pe5/content_types/genericContent) */
export type GenericContentUpdateDateArgs = {
  locale?: InputMaybe<Scalars["String"]>;
};

export type GenericContentCollection = {
  __typename?: "GenericContentCollection";
  items: Array<Maybe<GenericContent>>;
  limit: Scalars["Int"];
  skip: Scalars["Int"];
  total: Scalars["Int"];
};

export type GenericContentLinkingCollections = {
  __typename?: "GenericContentLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type GenericContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
};

export type Query = {
  __typename?: "Query";
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  author?: Maybe<Author>;
  authorCollection?: Maybe<AuthorCollection>;
  blogPost?: Maybe<BlogPost>;
  blogPostCollection?: Maybe<BlogPostCollection>;
  documentation?: Maybe<Documentation>;
  documentationCategory?: Maybe<DocumentationCategory>;
  documentationCategoryCollection?: Maybe<DocumentationCategoryCollection>;
  documentationCollection?: Maybe<DocumentationCollection>;
  entryCollection?: Maybe<EntryCollection>;
  genericContent?: Maybe<GenericContent>;
  genericContentCollection?: Maybe<GenericContentCollection>;
};

export type QueryAssetArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AssetFilter>;
};

export type QueryAuthorArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryAuthorCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<AuthorOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AuthorFilter>;
};

export type QueryBlogPostArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryBlogPostCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<BlogPostOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<BlogPostFilter>;
};

export type QueryDocumentationArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryDocumentationCategoryArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryDocumentationCategoryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<DocumentationCategoryOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DocumentationCategoryFilter>;
};

export type QueryDocumentationCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<DocumentationOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DocumentationFilter>;
};

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<EntryFilter>;
};

export type QueryGenericContentArgs = {
  id: Scalars["String"];
  locale?: InputMaybe<Scalars["String"]>;
  preview?: InputMaybe<Scalars["Boolean"]>;
};

export type QueryGenericContentCollectionArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  locale?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Array<InputMaybe<GenericContentOrder>>>;
  preview?: InputMaybe<Scalars["Boolean"]>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<GenericContentFilter>;
};

export type Sys = {
  __typename?: "Sys";
  environmentId: Scalars["String"];
  firstPublishedAt?: Maybe<Scalars["DateTime"]>;
  id: Scalars["String"];
  publishedAt?: Maybe<Scalars["DateTime"]>;
  publishedVersion?: Maybe<Scalars["Int"]>;
  spaceId: Scalars["String"];
};

export enum AssetOrder {
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

export enum AuthorOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum BlogPostOrder {
  DateAsc = "date_ASC",
  DateDesc = "date_DESC",
  MetaTitleAsc = "metaTitle_ASC",
  MetaTitleDesc = "metaTitle_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum DocumentationCategoryOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  OrderAsc = "order_ASC",
  OrderDesc = "order_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum DocumentationOrder {
  MetaTitleAsc = "metaTitle_ASC",
  MetaTitleDesc = "metaTitle_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
}

export enum EntryOrder {
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum GenericContentOrder {
  GoogleDocumentAsc = "googleDocument_ASC",
  GoogleDocumentDesc = "googleDocument_DESC",
  PublishDateAsc = "publishDate_ASC",
  PublishDateDesc = "publishDate_DESC",
  SeoMetaDescriptionAsc = "seoMetaDescription_ASC",
  SeoMetaDescriptionDesc = "seoMetaDescription_DESC",
  SeoTitleAsc = "seoTitle_ASC",
  SeoTitleDesc = "seoTitle_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdateDateAsc = "updateDate_ASC",
  UpdateDateDesc = "updateDate_DESC",
}

export enum ImageFormat {
  Avif = "AVIF",
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   * When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   * will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   * early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   * The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   * Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars["String"]>;
  contentType_contains?: InputMaybe<Scalars["String"]>;
  contentType_exists?: InputMaybe<Scalars["Boolean"]>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentType_not?: InputMaybe<Scalars["String"]>;
  contentType_not_contains?: InputMaybe<Scalars["String"]>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_exists?: InputMaybe<Scalars["Boolean"]>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  fileName?: InputMaybe<Scalars["String"]>;
  fileName_contains?: InputMaybe<Scalars["String"]>;
  fileName_exists?: InputMaybe<Scalars["Boolean"]>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  fileName_not?: InputMaybe<Scalars["String"]>;
  fileName_not_contains?: InputMaybe<Scalars["String"]>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  height?: InputMaybe<Scalars["Int"]>;
  height_exists?: InputMaybe<Scalars["Boolean"]>;
  height_gt?: InputMaybe<Scalars["Int"]>;
  height_gte?: InputMaybe<Scalars["Int"]>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  height_lt?: InputMaybe<Scalars["Int"]>;
  height_lte?: InputMaybe<Scalars["Int"]>;
  height_not?: InputMaybe<Scalars["Int"]>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  size?: InputMaybe<Scalars["Int"]>;
  size_exists?: InputMaybe<Scalars["Boolean"]>;
  size_gt?: InputMaybe<Scalars["Int"]>;
  size_gte?: InputMaybe<Scalars["Int"]>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  size_lt?: InputMaybe<Scalars["Int"]>;
  size_lte?: InputMaybe<Scalars["Int"]>;
  size_not?: InputMaybe<Scalars["Int"]>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url?: InputMaybe<Scalars["String"]>;
  url_contains?: InputMaybe<Scalars["String"]>;
  url_exists?: InputMaybe<Scalars["Boolean"]>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  url_not?: InputMaybe<Scalars["String"]>;
  url_not_contains?: InputMaybe<Scalars["String"]>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  width?: InputMaybe<Scalars["Int"]>;
  width_exists?: InputMaybe<Scalars["Boolean"]>;
  width_gt?: InputMaybe<Scalars["Int"]>;
  width_gte?: InputMaybe<Scalars["Int"]>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  width_lt?: InputMaybe<Scalars["Int"]>;
  width_lte?: InputMaybe<Scalars["Int"]>;
  width_not?: InputMaybe<Scalars["Int"]>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
};

export type AuthorFilter = {
  AND?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AuthorFilter>>>;
  bio?: InputMaybe<Scalars["String"]>;
  bio_contains?: InputMaybe<Scalars["String"]>;
  bio_exists?: InputMaybe<Scalars["Boolean"]>;
  bio_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bio_not?: InputMaybe<Scalars["String"]>;
  bio_not_contains?: InputMaybe<Scalars["String"]>;
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  photo_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type BlogPostFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogPostFilter>>>;
  author?: InputMaybe<CfAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars["Boolean"]>;
  content?: InputMaybe<Scalars["String"]>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  date?: InputMaybe<Scalars["DateTime"]>;
  date_exists?: InputMaybe<Scalars["Boolean"]>;
  date_gt?: InputMaybe<Scalars["DateTime"]>;
  date_gte?: InputMaybe<Scalars["DateTime"]>;
  date_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  date_lt?: InputMaybe<Scalars["DateTime"]>;
  date_lte?: InputMaybe<Scalars["DateTime"]>;
  date_not?: InputMaybe<Scalars["DateTime"]>;
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  excerpt?: InputMaybe<Scalars["String"]>;
  excerpt_contains?: InputMaybe<Scalars["String"]>;
  excerpt_exists?: InputMaybe<Scalars["Boolean"]>;
  excerpt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  excerpt_not?: InputMaybe<Scalars["String"]>;
  excerpt_not_contains?: InputMaybe<Scalars["String"]>;
  excerpt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  featuredImage_exists?: InputMaybe<Scalars["Boolean"]>;
  metaDescription?: InputMaybe<Scalars["String"]>;
  metaDescription_contains?: InputMaybe<Scalars["String"]>;
  metaDescription_exists?: InputMaybe<Scalars["Boolean"]>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  metaDescription_not?: InputMaybe<Scalars["String"]>;
  metaDescription_not_contains?: InputMaybe<Scalars["String"]>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  metaTitle?: InputMaybe<Scalars["String"]>;
  metaTitle_contains?: InputMaybe<Scalars["String"]>;
  metaTitle_exists?: InputMaybe<Scalars["Boolean"]>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  metaTitle_not?: InputMaybe<Scalars["String"]>;
  metaTitle_not_contains?: InputMaybe<Scalars["String"]>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug?: InputMaybe<Scalars["String"]>;
  slug_contains?: InputMaybe<Scalars["String"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug_not?: InputMaybe<Scalars["String"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars["Boolean"]>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type DocumentationCategoryFilter = {
  AND?: InputMaybe<Array<InputMaybe<DocumentationCategoryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DocumentationCategoryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  order?: InputMaybe<Scalars["Int"]>;
  order_exists?: InputMaybe<Scalars["Boolean"]>;
  order_gt?: InputMaybe<Scalars["Int"]>;
  order_gte?: InputMaybe<Scalars["Int"]>;
  order_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  order_lt?: InputMaybe<Scalars["Int"]>;
  order_lte?: InputMaybe<Scalars["Int"]>;
  order_not?: InputMaybe<Scalars["Int"]>;
  order_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]>>>;
  slug?: InputMaybe<Scalars["String"]>;
  slug_contains?: InputMaybe<Scalars["String"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug_not?: InputMaybe<Scalars["String"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
};

export type DocumentationFilter = {
  AND?: InputMaybe<Array<InputMaybe<DocumentationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DocumentationFilter>>>;
  categoryCollection_exists?: InputMaybe<Scalars["Boolean"]>;
  content?: InputMaybe<Scalars["String"]>;
  content_contains?: InputMaybe<Scalars["String"]>;
  content_exists?: InputMaybe<Scalars["Boolean"]>;
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  content_not?: InputMaybe<Scalars["String"]>;
  content_not_contains?: InputMaybe<Scalars["String"]>;
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  metaDescription?: InputMaybe<Scalars["String"]>;
  metaDescription_contains?: InputMaybe<Scalars["String"]>;
  metaDescription_exists?: InputMaybe<Scalars["Boolean"]>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  metaDescription_not?: InputMaybe<Scalars["String"]>;
  metaDescription_not_contains?: InputMaybe<Scalars["String"]>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  metaTitle?: InputMaybe<Scalars["String"]>;
  metaTitle_contains?: InputMaybe<Scalars["String"]>;
  metaTitle_exists?: InputMaybe<Scalars["Boolean"]>;
  metaTitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  metaTitle_not?: InputMaybe<Scalars["String"]>;
  metaTitle_not_contains?: InputMaybe<Scalars["String"]>;
  metaTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug?: InputMaybe<Scalars["String"]>;
  slug_contains?: InputMaybe<Scalars["String"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug_not?: InputMaybe<Scalars["String"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type GenericContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<GenericContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GenericContentFilter>>>;
  author?: InputMaybe<CfAuthorNestedFilter>;
  author_exists?: InputMaybe<Scalars["Boolean"]>;
  body?: InputMaybe<Scalars["String"]>;
  body_contains?: InputMaybe<Scalars["String"]>;
  body_exists?: InputMaybe<Scalars["Boolean"]>;
  body_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  body_not?: InputMaybe<Scalars["String"]>;
  body_not_contains?: InputMaybe<Scalars["String"]>;
  body_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  googleDocument?: InputMaybe<Scalars["String"]>;
  googleDocument_contains?: InputMaybe<Scalars["String"]>;
  googleDocument_exists?: InputMaybe<Scalars["Boolean"]>;
  googleDocument_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  googleDocument_not?: InputMaybe<Scalars["String"]>;
  googleDocument_not_contains?: InputMaybe<Scalars["String"]>;
  googleDocument_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  publishDate?: InputMaybe<Scalars["DateTime"]>;
  publishDate_exists?: InputMaybe<Scalars["Boolean"]>;
  publishDate_gt?: InputMaybe<Scalars["DateTime"]>;
  publishDate_gte?: InputMaybe<Scalars["DateTime"]>;
  publishDate_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishDate_lt?: InputMaybe<Scalars["DateTime"]>;
  publishDate_lte?: InputMaybe<Scalars["DateTime"]>;
  publishDate_not?: InputMaybe<Scalars["DateTime"]>;
  publishDate_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  seoMetaDescription?: InputMaybe<Scalars["String"]>;
  seoMetaDescription_contains?: InputMaybe<Scalars["String"]>;
  seoMetaDescription_exists?: InputMaybe<Scalars["Boolean"]>;
  seoMetaDescription_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  seoMetaDescription_not?: InputMaybe<Scalars["String"]>;
  seoMetaDescription_not_contains?: InputMaybe<Scalars["String"]>;
  seoMetaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  seoTitle?: InputMaybe<Scalars["String"]>;
  seoTitle_contains?: InputMaybe<Scalars["String"]>;
  seoTitle_exists?: InputMaybe<Scalars["Boolean"]>;
  seoTitle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  seoTitle_not?: InputMaybe<Scalars["String"]>;
  seoTitle_not_contains?: InputMaybe<Scalars["String"]>;
  seoTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug?: InputMaybe<Scalars["String"]>;
  slug_contains?: InputMaybe<Scalars["String"]>;
  slug_exists?: InputMaybe<Scalars["Boolean"]>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  slug_not?: InputMaybe<Scalars["String"]>;
  slug_not_contains?: InputMaybe<Scalars["String"]>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  updateDate?: InputMaybe<Scalars["DateTime"]>;
  updateDate_exists?: InputMaybe<Scalars["Boolean"]>;
  updateDate_gt?: InputMaybe<Scalars["DateTime"]>;
  updateDate_gte?: InputMaybe<Scalars["DateTime"]>;
  updateDate_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  updateDate_lt?: InputMaybe<Scalars["DateTime"]>;
  updateDate_lte?: InputMaybe<Scalars["DateTime"]>;
  updateDate_not?: InputMaybe<Scalars["DateTime"]>;
  updateDate_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
};

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   * Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars["HexColor"]>;
  /**
   * Desired corner radius in pixels.
   * Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   * Defaults to `0`. Uses desired background color as padding color,
   * unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars["Int"]>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars["Dimension"]>;
  /**
   * Desired quality of the image in percents.
   * Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars["Quality"]>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars["Dimension"]>;
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_exists?: InputMaybe<Scalars["Boolean"]>;
  firstPublishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  id?: InputMaybe<Scalars["String"]>;
  id_contains?: InputMaybe<Scalars["String"]>;
  id_exists?: InputMaybe<Scalars["Boolean"]>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  id_not?: InputMaybe<Scalars["String"]>;
  id_not_contains?: InputMaybe<Scalars["String"]>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_exists?: InputMaybe<Scalars["Boolean"]>;
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_not?: InputMaybe<Scalars["DateTime"]>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]>>>;
  publishedVersion?: InputMaybe<Scalars["Float"]>;
  publishedVersion_exists?: InputMaybe<Scalars["Boolean"]>;
  publishedVersion_gt?: InputMaybe<Scalars["Float"]>;
  publishedVersion_gte?: InputMaybe<Scalars["Float"]>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
  publishedVersion_lt?: InputMaybe<Scalars["Float"]>;
  publishedVersion_lte?: InputMaybe<Scalars["Float"]>;
  publishedVersion_not?: InputMaybe<Scalars["Float"]>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]>>>;
};

export type CfAuthorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAuthorNestedFilter>>>;
  bio?: InputMaybe<Scalars["String"]>;
  bio_contains?: InputMaybe<Scalars["String"]>;
  bio_exists?: InputMaybe<Scalars["Boolean"]>;
  bio_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  bio_not?: InputMaybe<Scalars["String"]>;
  bio_not_contains?: InputMaybe<Scalars["String"]>;
  bio_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_exists?: InputMaybe<Scalars["Boolean"]>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  photo_exists?: InputMaybe<Scalars["Boolean"]>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars["String"]>;
  title_contains?: InputMaybe<Scalars["String"]>;
  title_exists?: InputMaybe<Scalars["Boolean"]>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
  title_not?: InputMaybe<Scalars["String"]>;
  title_not_contains?: InputMaybe<Scalars["String"]>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>;
};
