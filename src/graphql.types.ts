export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
};

export type NacelleProduct = {
  id: Scalars['ID'];
  handle: Scalars['String'];
  locale: Scalars['String'];
  globalHandle: Scalars['String'];
  pimSyncSourceDomain: Scalars['String'];
  pimSyncSource?: Maybe<Scalars['String']>;
  pimSyncSourceProductId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  priceRange?: Maybe<PriceRange>;
  productType?: Maybe<Scalars['String']>;
  featuredMedia?: Maybe<Media>;
  availableForSale: Scalars['Boolean'];
  vendor?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  media?: Maybe<Array<Media>>;
  metafields?: Maybe<Array<Metafield>>;
  variants?: Maybe<Array<ProductVariant>>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  indexedAt: Scalars['Int'];
};

export type PriceRange = {
  min?: Maybe<Scalars['String']>;
  max?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type Media = {
  id?: Maybe<Scalars['ID']>;
  type: Scalars['String'];
  src: Scalars['String'];
  thumbnailSrc: Scalars['String'];
  altText?: Maybe<Scalars['String']>;
};

export type Metafield = {
  id?: Maybe<Scalars['ID']>;
  namespace?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ProductVariant = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  priceCurrency?: Maybe<Scalars['String']>;
  compareAtPrice?: Maybe<Scalars['String']>;
  compareAtPriceCurrency?: Maybe<Scalars['String']>;
  priceRules?: Maybe<Array<ProductPriceRule>>;
  swatchSrc?: Maybe<Scalars['String']>;
  selectedOptions?: Maybe<Array<SelectedProductOption>>;
  featuredMedia?: Maybe<Media>;
  sku?: Maybe<Scalars['String']>;
  availableForSale?: Maybe<Scalars['Boolean']>;
  metafields?: Maybe<Array<Metafield>>;
  weight?: Maybe<Scalars['Float']>;
  weightUnit?: Maybe<Scalars['String']>;
};

export type ProductPriceRule = {
  id?: Maybe<Scalars['ID']>;
  handle: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  priceCurrency?: Maybe<Scalars['String']>;
  comparedAtPrice?: Maybe<Scalars['String']>;
  priceBreaks?: Maybe<Array<ProductPriceBreaks>>;
  availableTo?: Maybe<Array<Scalars['String']>>;
  metafields?: Maybe<Array<Metafield>>;
};

export type ProductPriceBreaks = {
  quantityMin?: Maybe<Scalars['Int']>;
  quantityMax?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['String']>;
  metafields?: Maybe<Array<Maybe<Metafield>>>;
};

export type SelectedProductOption = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type NacelleCollection = {
  id: Scalars['ID'];
  handle: Scalars['String'];
  locale: Scalars['String'];
  globalHandle: Scalars['String'];
  pimSyncSourceDomain: Scalars['String'];
  pimSyncSource?: Maybe<Scalars['String']>;
  pimSyncSourceCollectionId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  featuredMedia?: Maybe<Media>;
  productLists?: Maybe<Array<NacelleProductList>>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  metafields?: Maybe<Array<Metafield>>;
};

export type NacelleProductList = {
  title: Scalars['String'];
  slug: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  handles?: Maybe<Array<Scalars['String']>>;
};

export type NacelleContent = {
  id: Scalars['ID'];
  handle: Scalars['String'];
  locale: Scalars['String'];
  globalHandle: Scalars['String'];
  cmsSyncSource: Scalars['String'];
  cmsSyncSourceDomain: Scalars['String'];
  cmsSyncSourceContentId?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sections?: Maybe<Scalars['JSON']>;
  tags?: Maybe<Array<Scalars['String']>>;
  fields?: Maybe<Scalars['JSON']>;
  articleLists?: Maybe<Array<ContentArticleList>>;
  relatedArticles?: Maybe<Array<ContentRelatedArticle>>;
  collectionHandle?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  contentHtml?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  blogHandle?: Maybe<Scalars['String']>;
  featuredMedia?: Maybe<Media>;
  author?: Maybe<ContentAuthor>;
  publishDate?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  indexedAt: Scalars['Int'];
};

export type ContentArticleList = {
  title: Scalars['String'];
  slug: Scalars['String'];
  locale?: Maybe<Scalars['String']>;
  handles?: Maybe<Array<Scalars['String']>>;
};

export type ContentAuthor = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type ContentRelatedArticle = {
  handle: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  blogHandle?: Maybe<Scalars['String']>;
  cmsSyncSourceContentId?: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  createdAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  excerpt?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  author?: Maybe<ContentAuthor>;
  featuredMedia?: Maybe<Media>;
  publishDate?: Maybe<Scalars['Int']>;
};

export type OptionalMetafield = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type MetafieldInput = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Checkout = {
  id: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  completed: Scalars['Boolean'];
  source?: Maybe<Scalars['String']>;
  metafields?: Maybe<Array<OptionalMetafield>>;
  note?: Maybe<Scalars['String']>;
  discountCodes?: Maybe<Array<Scalars['String']>>;
  createdAt?: Maybe<Scalars['Int']>;
  completedAt?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  cartItems?: Maybe<Array<CartItem>>;
};

export type CheckoutInput = {
  cartItems: Array<CartItemInput>;
  checkoutId?: Maybe<Scalars['String']>;
  discountCodes?: Maybe<Array<Scalars['String']>>;
  source?: Maybe<Scalars['String']>;
  metafields?: Maybe<Array<MetafieldInput>>;
  note?: Maybe<Scalars['String']>;
};

export type CartItemInput = {
  cartItemId: Scalars['String'];
  variantId?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
  metafields?: Maybe<Array<MetafieldInput>>;
};

export type CartItem = {
  cartItemId: Scalars['String'];
  variantId?: Maybe<Scalars['String']>;
  quantity: Scalars['Int'];
  metafields?: Maybe<Array<Metafield>>;
};

export type NacelleSpace = {
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  pimSyncSourceDomain: Scalars['String'];
  cmsSyncSourceDomain: Scalars['String'];
  linklists?: Maybe<Array<SpaceLinkList>>;
  affinityLinklists?: Maybe<Array<SpaceAffinityLinkList>>;
  metafields?: Maybe<Array<Metafield>>;
  checkoutDataConfig?: Maybe<CheckoutDataConfig>;
  contentDataConfig?: Maybe<ContentDataConfig>;
  productDataConfig?: Maybe<ProductDataConfig>;
  productConnectorConfig?: Maybe<ConnectorConfig>;
  contentConnectorConfig?: Maybe<ConnectorConfig>;
  users?: Maybe<Array<SpaceUser>>;
  featureFlags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ContentDataConfig = {
  dataSource?: Maybe<Scalars['String']>;
  graphqlDataToken?: Maybe<Scalars['String']>;
  graphqlEndpoint?: Maybe<Scalars['String']>;
  restEndpoint?: Maybe<Scalars['String']>;
  assetStorage?: Maybe<Scalars['String']>;
};

export type ProductDataConfig = {
  dataSource?: Maybe<Scalars['String']>;
  graphqlDataToken?: Maybe<Scalars['String']>;
  graphqlEndpoint?: Maybe<Scalars['String']>;
};

export type SpaceUser = {
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type CheckoutDataConfig = {
  dataSource: Scalars['String'];
  graphqlDataToken?: Maybe<Scalars['String']>;
  graphqlEndpoint?: Maybe<Scalars['String']>;
  restEndpoint?: Maybe<Scalars['String']>;
  shopifyUrl?: Maybe<Scalars['String']>;
  alternativeDataSource?: Maybe<Scalars['String']>;
  alternativeDataRestEndpoint?: Maybe<Scalars['String']>;
  alternativeDataToken?: Maybe<Scalars['String']>;
};

export type ConnectorConfig = {
  type: Scalars['String'];
  graphqlDataToken?: Maybe<Scalars['String']>;
  graphqlEndpoint?: Maybe<Scalars['String']>;
  restEndpoint?: Maybe<Scalars['String']>;
  webhookKey?: Maybe<Scalars['String']>;
};

export type SpaceAffinityLinkList = {
  affinityGroupSlug: Scalars['String'];
  linklists: Array<SpaceLinkList>;
};

export type SpaceLinkList = {
  handle: Scalars['String'];
  links?: Maybe<Array<Link>>;
};

export type Link = {
  title: Scalars['String'];
  to: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Link>>;
};
