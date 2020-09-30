import { Metafield } from './graphql.types';

/**
 * Information needed to process ReCharge checkouts
 */
export interface RechargeCheckout {
  token: string;
  completed_at: string | boolean;
}

/**
 * Information needed to process Shopify checkouts
 */
export interface ShopifyCheckout {
  id: string;
  webUrl: string;
  completedAt: string;
  note: string;
  customAttributes: Metafield[];
}

/**
 * Product line item information for ReCharge checkouts
 */
export interface RechargeCheckoutLineItem {
  variant_id: string;
  quantity: number;
  properties: {
    [prop: string]: string;
  };
  charge_interval_frequency?: string;
  order_interval_frequency?: string;
  order_interval_unit?: string;
  cutoff_day_of_month?: string;
  cutoff_day_of_week?: string;
  expire_after_specific_number_of_charges?: string;
  order_day_of_month?: string;
  order_day_of_week?: string;
}

/**
 * Product line item information for Shopify checkouts
 */
export interface ShopifyCheckoutLineItem {
  variantId: string;
  quantity: number;
  customAttributes?: Metafield[] | null;
}
