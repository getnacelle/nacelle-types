/**
 * Nacelle space as it is retrieved from the database.
 * The primary difference is that many pieces of information are stored
 * as JSON strings prior to being parsed in Hail Frequency
 */
export interface DatabaseSpace {
  id: string;
  type: string;
  name: string;
  domain: string;
  token: string;
  privateToken?: string;
  publicToken?: string;
  pimSyncSourceDomain: string;
  cmsSyncSourceDomain: string;
  linklists: string;
  affinityLinklists: string;
  metafields: string;
  checkoutDataConfig: string;
  contentDataConfig: string;
  productDataConfig: string;
  productConnectorConfig: string;
  contentConnectorConfig: string;
  users: string;
  featureFlags: string;
}
