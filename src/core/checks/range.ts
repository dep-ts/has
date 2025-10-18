import { useCheck, type CheckFn } from '@/core/tools/use.ts';

/**
 * Checks if the input string contains at least one character within the given range.
 * @param start - Start character of the range.
 * @param end - End character of the range.
 * @returns A function that takes a string and returns true if it contains at least one character in the range; false otherwise.
 */
export const range = (start: string, end: string): CheckFn =>
  useCheck((c) => c.range(start, end));
