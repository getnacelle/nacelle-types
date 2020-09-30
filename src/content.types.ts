export interface DatabaseContent {
  id: string;
  type: string;
  handle?: string;
  locale?: string;
  globalHandle?: string;
  cmsSyncSourceDomain?: string;
  cmsSyncSource?: string;
  cmsSyncSourceContentId?: string;
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
