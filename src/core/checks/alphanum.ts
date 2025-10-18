import { useCheck, type CheckFn } from '@/core/tools/use.ts';

/**
 * Checks if the input string contains at least one alphanumeric character (A-Z, a-z, 0-9).
 * @param str The input string to check.
 * @returns True if the string contains at least one alphanumeric character; false otherwise.
 */
export const alphaNum: CheckFn = useCheck((c) => c.alphaNum());
