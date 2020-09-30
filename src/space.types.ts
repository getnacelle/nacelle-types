export interface DatabaseSpace {
  id: string;
  type: string;
  name: string;
  domain: string;
  token: string;
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
