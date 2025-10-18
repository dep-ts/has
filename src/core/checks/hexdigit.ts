import { useCheck, type CheckFn } from '@/core/tools/use.ts';

/**
 * Checks if the input string contains at least one hexadecimal digit (0-9, a-f, A-F).
 * @param str The input string to check.
 * @returns True if the string contains at least one hex digit; false otherwise.
 */
export const hexDigit: CheckFn = useCheck((c) => c.hexDigit());
