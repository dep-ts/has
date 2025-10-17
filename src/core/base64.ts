import { Buffer } from 'node:buffer';

/**
 * Checks if a string is valid Base64 (standard or URL-safe)
 *
 * Works in Node, Deno, and browsers.
 */
export const base64 = (value: string): boolean => {
  try {
    const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
    const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4);

    if (typeof Buffer !== 'undefined') {
      const decoded = Buffer.from(padded, 'base64');
      return (
        Buffer.from(decoded).toString('base64').replace(/=+$/, '') ===
        normalized.replace(/=+$/, '')
      );
    } else if (typeof atob === 'function') {
      const decoded = atob(padded);
      return btoa(decoded).replace(/=+$/, '') === normalized.replace(/=+$/, '');
    } else {
      return false;
    }
  } catch {
    return false;
  }
};
