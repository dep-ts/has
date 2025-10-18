import { useCheck, type CheckFn } from '@/core/tools/use.ts';

/**
 * Checks if the input string contains the specified character.
 * @param char - The character to check for.
 * @returns A function that takes a string and returns true if it contains the specified character; false otherwise.
 */
export const char = (char: string): CheckFn => useCheck((c) => c.char(char));
