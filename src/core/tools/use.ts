import { Check } from '@/core/tools/check.ts';

/**
 * Creates a reusable string check function.
 *
 * Accepts a setup function that configures the `Check` instance
 * with one or more character rules. Returns a function that takes
 * a string and returns `true` if at least one character passes
 * any of the configured checks.
 *
 * @param setup - Function that receives a `Check` instance to configure rules.
 * @returns A function that takes a string and returns `true` if it passes the configured checks.
 *
 * @example
 * const hasDigit = useCheck(c => c.digit());
 * hasDigit("abc123"); // true
 * hasDigit("abc");    // false
 */
export const useCheck =
  (setup: (check: Check) => void) =>
  (str: string): boolean => {
    const check = new Check();
    setup(check);
    return check.test(str);
  };

/**
 * CheckFn: A function that takes a string and returns `true` if it passes
 * the configured check, `false` otherwise.
 */
export type CheckFn = (str: string) => boolean;
