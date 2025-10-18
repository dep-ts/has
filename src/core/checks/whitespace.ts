import { useCheck, type CheckFn } from '@/core/tools/use.ts';

/**
 * Checks if the input string contains at least one whitespace character (e.g., space, tab, newline).
 * @param str The input string to check.
 * @returns True if the string contains at least one whitespace; false otherwise.
 */
export const whitespace: CheckFn = useCheck((c) => c.whitespace());
