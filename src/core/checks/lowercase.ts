import { useCheck, type CheckFn } from '@/core/tools/use.ts';

/**
 * Checks if the input string contains at least one lowercase letter (a-z).
 * @param str The input string to check.
 * @returns True if the string contains at least one lowercase letter; false otherwise.
 */
export const lowerCase: CheckFn = useCheck((c) => c.lowerCase());
