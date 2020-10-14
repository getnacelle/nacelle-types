import { NacelleProduct, ProductVariant, Media } from '../graphql/generated';

/**
 * Nacelle product as it is retrieved from the database.
 * The primary difference is that many pieces of information are stored
 * as JSON strings prior to being parsed in Hail Frequency
 */
export interface DatabaseProduct {
  id: string;
  handle?: string;
  locale?: string;
  globalHandle?: string;
  pimSyncSourceDomain?: string;
  pimSyncSource?: string;
  pimSyncSourceProductId?: string;
  pimSyncSourceLocale?: string;
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

/**
 * An alternative to NacelleProduct that includes optional
 * variant and quantity for use within frontend applications.
 * It's common to store the currently selected variant on a
 * modified product, as well as store a selected quantity
 */
export interface NacelleShopProduct extends NacelleProduct {
  variant?: ProductVariant;
  quantity?: number;
}

/**
 * The selected variant of a product when it is in the cart
 */
export interface CartItem extends ProductVariant {
  variant: ProductVariant;
  title: string;
  handle: string;
  image: Media;
  productId: string;
  quantity: number;
  tags: string[];
  vendor: string;
  locale: string;
}
