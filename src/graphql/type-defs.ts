/**
 * Type definitions for Nacelle GraphQL Lambdas. These types
 * are merged with local type definitions in each of the lambdas.
 *
 * These definitions are also used to programmatically generate
 * TypeScript interfaces, which can be found in ./graphql.types.ts
 */
export default `#graphql
  scalar JSON

  "A product that has been indexed by Nacelle"
  type NacelleProduct {
    id: ID!
    handle: String!
    locale: String!
    globalHandle: String!
    pimSyncSourceDomain: String!
    pimSyncSource: String
    pimSyncSourceProductId: String
    pimSyncSourceLocale: String
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

  "The price range and currency of a product"
  type PriceRange {
    min: String
    max: String
    currencyCode: String
  }

  "Details for different media types associated with content & products"
  type Media {
    id: ID
    type: String!
    src: String!
    thumbnailSrc: String!
    altText: String
  }

  "A flexible key / value store that can be associated with many other pieces of Nacelle data"
  type Metafield {
    id: ID
    namespace: String
    key: String!
    value: String!
  }

  "A product option that differs from the base product"
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
    quantityAvailable: Int
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

  "Available options for a product variant (i.e. color, size, etc)"
  type SelectedProductOption {
    name: String!
    value: String!
  }

  "A collection of products that has been indexed by Nacelle"
  type NacelleCollection {
    id: ID!
    handle: String!
    locale: String!
    globalHandle: String!
    pimSyncSourceDomain: String!
    pimSyncSource: String
    pimSyncSourceCollectionId: String
    pimSyncSourceLocale: String
    title: String
    description: String
    featuredMedia: Media
    productLists: [NacelleProductList!]
    createdAt: Int
    updatedAt: Int
    metafields: [NacelleCollectionMetafield!]
  }

  type NacelleCollectionMetafield {
    id: ID
    namespace: String
    key: String!
    value: String!
    source: String
  }

  "A list of products by handle"
  type NacelleProductList {
    title: String!
    slug: String!
    locale: String
    handles: [String!]
  }

  "Content from a CMS that has been indexed by Nacelle"
  type NacelleContent {
    id: ID!
    handle: String!
    locale: String!
    globalHandle: String!
    cmsSyncSource: String!
    cmsSyncSourceDomain: String!
    cmsSyncSourceContentId: String
    cmsSyncSourceLocale: String
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

  "A list of articles by handle"
  type ContentArticleList {
    title: String!
    slug: String!
    locale: String
    handles: [String!]
  }

  "The author of the content"
  type ContentAuthor {
    firstName: String
    lastName: String
    bio: String
    email: String
  }

  "An article that is related to the current article"
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
    namespace: String
    key: String
    value: String
    source: String
  }

  "Information about a processed checkout"
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
    cartItems: [CheckoutItem!]
  }

  "Information required to process a checkout"
  input CheckoutInput {
    cartItems: [CheckoutItemInput!]!
    checkoutId: String
    discountCodes: [String!]
    source: String
    metafields: [MetafieldInput!]
    note: String
  }

  input CheckoutItemInput {
    cartItemId: String!
    variantId: String
    quantity: Int!
    metafields: [MetafieldInput!]
  }

  "Item details required to proecess checkout"
  type CheckoutItem {
    cartItemId: String!
    variantId: String
    quantity: Int!
    metafields: [Metafield!]
  }

  "A sapce that has been created in the Nacelle dashboard"
  type NacelleSpace {
    id: ID!
    type: String
    name: String
    domain: String
    token: String
    buildHook: String
      @deprecated(
        reason: "Features for this field were never implemented; it is currently a no-op"
      )
    privateToken: String
    publicToken: String
    pimSyncSourceDomain: String!
    cmsSyncSourceDomain: String
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

  input SpaceInput {
    id: String!
    domain: String
    name: String
    token: String
    privateToken: String
    publicToken: String
    type: String
    buildHook: String
    pimSyncSourceDomain: String
    cmsSyncSourceDomain: String
    checkoutDataConfig: CheckoutDataConfigInput
    productConnectorConfig: ConnectorConfigInput
    contentConnectorConfig: ConnectorConfigInput
  }

  type NacelleShopSpace {
    id: ID!
    type: String
    name: String
    domain: String
    pimSyncSourceDomain: String!
    cmsSyncSourceDomain: String!
    linklists: [SpaceLinkList!]
    affinityLinklists: [SpaceAffinityLinkList!]
    metafields: [Metafield!]
  }

  "Configuration settings for retrieving content from a CMS"
  type ContentDataConfig {
    dataSource: String
    graphqlDataToken: String
    graphqlEndpoint: String
    restEndpoint: String
    assetStorage: String
  }

  "Configuration settings for retrieving producting information from a PIM"
  type ProductDataConfig {
    dataSource: String
    graphqlDataToken: String
    graphqlEndpoint: String
  }

  "A user who has access to a space"
  type SpaceUser {
    id: ID!
    email: String
    role: String
  }

  "Configuration used to process checkouts"
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
    entryDepth: Int
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

  "A list of links that can be used to generate pages & routes in a headless app"
  type SpaceLinkList {
    handle: String!
    links: [Link!]
  }

  "A link used to generate pages & routes in a headless app"
  type Link {
    title: String!
    to: String!
    type: String
    links: [Link!]
  }

  type MerchandisingRule {
    inputs: [String!]!
    outputs: [String!]!
    type: String!
  }

  input MerchandisingRuleInput {
    inputs: [String!]!
    outputs: [String!]!
    type: String!
  }

  type NacelleUser {
    id: String
    email: String
    spaces: [UserSpace]
  }

  type UserSpace {
    id: String!
    role: String
  }

  input ConnectorConfigInput {
    entryDepth: Int
    type: String!
    autoSync: Boolean
    graphqlDataToken: String
    graphqlEndpoint: String
    restEndpoint: String
    webhookKey: String
  }

  input CheckoutDataConfigInput {
    dataSource: String
    graphqlDataToken: String
    graphqlEndpoint: String
    restEndpoint: String
    alternativeDataSource: String
    alternativeDataToken: String
    alternativeDataRestEndpoint: String
    shopifyUrl: String
  }
`;
