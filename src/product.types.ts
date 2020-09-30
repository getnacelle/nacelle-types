export interface DatabaseProduct {
  id: string;
  handle?: string;
  locale?: string;
  globalHandle?: string;
  pimSyncSourceDomain?: string;
  pimSyncSource?: string;
  pimSyncSourceProductId?: string;
  title?: string;
  description?: string;
  priceRange?: string;
  productType?: string;
  featuredMedia?: string;
  availableForSale?: boolean;
  vendor?: string;
  tags?: string;
  media?: string;
  metafields?: string;
  variants?: string;
  createdAt?: number;
  updatedAt?: number;
  indexedAt?: number;
}
