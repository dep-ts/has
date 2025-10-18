import { useCheck, type CheckFn } from '@/core/tools/use.ts';

/**
 * Checks if the input string contains at least one digit (0-9).
 * @param str The input string to check.
 * @returns True if the string contains at least one digit; false otherwise.
 */
export const digit: CheckFn = useCheck((c) => c.digit());
