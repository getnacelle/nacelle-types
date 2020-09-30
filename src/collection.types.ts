/**
 * Nacelle collection as it is retrieved from the database.
 * The primary difference is that many pieces of information are stored
 * as JSON strings prior to being parsed in Hail Frequency
 */
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
