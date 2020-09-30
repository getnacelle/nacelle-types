export default `#graphql
  scalar JSON

  type NacelleProduct {
    id: ID!
    handle: String!
    locale: String!
    globalHandle: String!
    pimSyncSourceDomain: String!
    pimSyncSource: String
    pimSyncSourceProductId: String
    title: String
    description: String
    priceRange: PriceRange
    productType: String
    featuredMedia: Media
    availableForSale: Boolean!
    vendor: String
    tags: [String!]
    media: [Media!]
    metafields: [Metafield!]
    variants: [ProductVariant!]
    createdAt: Int
    updatedAt: Int
    indexedAt: Int!
  }

  type PriceRange {
    min: String
    max: String
    currencyCode: String
  }

  type Media {
    id: ID
    type: String!
    src: String!
    thumbnailSrc: String!
    altText: String
  }

  type Metafield {
    id: ID
    namespace: String
    key: String!
    value: String!
  }

  type ProductVariant {
    id: ID!
    title: String
    price: String
    priceCurrency: String
    compareAtPrice: String
    compareAtPriceCurrency: String
    priceRules: [ProductPriceRule!]
    swatchSrc: String
    selectedOptions: [SelectedProductOption!]
    featuredMedia: Media
    sku: String
    availableForSale: Boolean
    metafields: [Metafield!]
    weight: Float
    weightUnit: String
  }

  type ProductPriceRule {
    id: ID
    handle: String!
    title: String
    price: String
    priceCurrency: String
    comparedAtPrice: String
    priceBreaks: [ProductPriceBreaks!]
    availableTo: [String!]
    metafields: [Metafield!]
  }

  type ProductPriceBreaks {
    quantityMin: Int
    quantityMax: Int
    price: String
    metafields: [Metafield]
  }

  type SelectedProductOption {
    name: String!
    value: String!
  }

  type NacelleCollection {
    id: ID!
    handle: String!
    locale: String!
    globalHandle: String!
    pimSyncSourceDomain: String!
    pimSyncSource: String
    pimSyncSourceCollectionId: String
    title: String
    description: String
    featuredMedia: Media
    productLists: [NacelleProductList!]
    createdAt: Int
    updatedAt: Int
    metafields: [Metafield!]
  }

  type NacelleProductList {
    title: String!
    slug: String!
    locale: String
    handles: [String!]
  }

  type NacelleContent {
    id: ID!
    handle: String!
    locale: String!
    globalHandle: String!
    cmsSyncSource: String!
    cmsSyncSourceDomain: String!
    cmsSyncSourceContentId: String
    type: String!
    title: String
    description: String
    sections: JSON
    tags: [String!]
    fields: JSON
    articleLists: [ContentArticleList!]
    relatedArticles: [ContentRelatedArticle!]
    collectionHandle: String
    content: String
    contentHtml: String
    excerpt: String
    blogHandle: String
    featuredMedia: Media
    author: ContentAuthor
    publishDate: Int
    createdAt: Int
    updatedAt: Int
    indexedAt: Int!
  }

  type ContentArticleList {
    title: String!
    slug: String!
    locale: String
    handles: [String!]
  }

  type ContentAuthor {
    firstName: String
    lastName: String
    bio: String
    email: String
  }

  type ContentRelatedArticle {
    handle: String!
    title: String
    blogHandle: String
    cmsSyncSourceContentId: String
    locale: String!
    createdAt: Int
    updatedAt: Int
    description: String
    excerpt: String
    tags: [String!]
    author: ContentAuthor
    featuredMedia: Media
    publishDate: Int
  }

  type OptionalMetafield {
    key: String
    value: String
  }

  input MetafieldInput {
    key: String
    value: String
  }

  type Checkout {
    id: String!
    url: String
    completed: Boolean!
    source: String
    metafields: [OptionalMetafield!]
    note: String
    discountCodes: [String!]
    createdAt: Int
    completedAt: Int
    updatedAt: Int
    cartItems: [CartItem!]
  }

  input CheckoutInput {
    cartItems: [CartItemInput!]!
    checkoutId: String
    discountCodes: [String!]
    source: String
    metafields: [MetafieldInput!]
    note: String
  }

  input CartItemInput {
    cartItemId: String!
    variantId: String
    quantity: Int!
    metafields: [MetafieldInput!]
  }

  type CartItem {
    cartItemId: String!
    variantId: String
    quantity: Int!
    metafields: [Metafield!]
  }

  type NacelleSpace {
    id: ID!
    type: String
    name: String
    domain: String
    token: String
    pimSyncSourceDomain: String!
    cmsSyncSourceDomain: String!
    linklists: [SpaceLinkList!]
    affinityLinklists: [SpaceAffinityLinkList!]
    metafields: [Metafield!]
    checkoutDataConfig: CheckoutDataConfig
    contentDataConfig: ContentDataConfig
    productDataConfig: ProductDataConfig
    productConnectorConfig: ConnectorConfig
    contentConnectorConfig: ConnectorConfig
    users: [SpaceUser!]
    featureFlags: [String]
  }

  type ContentDataConfig {
    dataSource: String
    graphqlDataToken: String
    graphqlEndpoint: String
    restEndpoint: String
    assetStorage: String
  }

  type ProductDataConfig {
    dataSource: String
    graphqlDataToken: String
    graphqlEndpoint: String
  }

  type SpaceUser {
    id: ID!
    email: String
    role: String
  }

  type CheckoutDataConfig {
    dataSource: String!
    graphqlDataToken: String
    graphqlEndpoint: String
    restEndpoint: String
    shopifyUrl: String
    alternativeDataSource: String
    alternativeDataRestEndpoint: String
    alternativeDataToken: String
  }

  type ConnectorConfig {
    type: String!
    graphqlDataToken: String
    graphqlEndpoint: String
    restEndpoint: String
    webhookKey: String
  }

  type SpaceAffinityLinkList {
    affinityGroupSlug: String!
    linklists: [SpaceLinkList!]!
  }

  type SpaceLinkList {
    handle: String!
    links: [Link!]
  }

  type Link {
    title: String!
    to: String!
    type: String
    links: [Link!]
  }
`;
