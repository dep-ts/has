import { useCheck, type CheckFn } from '@/core/tools/use.ts';

/**
 * Checks if the input string contains at least one of the given characters.
 * @param chars - The characters to check for.
 * @returns A function that takes a string and returns true if it contains at least one of the given characters; false otherwise.
 */
export const any = (...chars: string[]): CheckFn =>
  useCheck((c) => c.any(...chars));
