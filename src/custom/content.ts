/**
 * Nacelle content as it is retrieved from the database.
 * The primary difference is that many pieces of information are stored
 * as JSON strings prior to being parsed in Hail Frequency
 */
export interface DatabaseContent {
  id: string;
  type: string;
  handle?: string;
  locale?: string;
  globalHandle?: string;
  cmsSyncSourceDomain?: string;
  cmsSyncSource?: string;
  cmsSyncSourceContentId?: string;
  cmsSyncSourceLocale?: string;
  title?: string;
  description?: string;
  sections?: string;
  tags?: string;
  fields?: string;
  articleLists?: string;
  relatedArticles?: string;
  collectionHandle?: string;
  content?: string;
  contentHtml?: string;
  excerpt?: string;
  blogHandle?: string;
  featuredMedia?: string;
  author?: string;
  publishDate?: number;
  createdAt?: number;
  updatedAt?: number;
  indexedAt?: number;
}
