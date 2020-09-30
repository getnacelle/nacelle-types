export interface DatabaseCollection {
  id: string;
  handle: string;
  locale: string;
  globalHandle: string;
  pimSyncSourceDomain: string;
  pimSyncSource?: string;
  pimSyncSourceCollectionId?: string;
  title?: string;
  description?: string;
  featuredMedia?: string;
  productLists?: string;
  createdAt?: number;
  updatedAt?: number;
  indexedAt?: number;
  metafields?: string;
}
