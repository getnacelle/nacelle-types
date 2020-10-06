/**
 * A user with optional properties that can
 * be captured for Nacelle events
 */
export interface User {
  id?: string;
  anonymousId?: string;
  device?: string;
  ip?: string;
  email?: string;
  phone?: string;
}
