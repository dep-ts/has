import { useCheck, type CheckFn } from '@/core/tools/use.ts';

/**
 * Checks if the input string contains at least one **non-ASCII character** (code > 127).
 * **Note**: Includes emojis, accented letters (é, ñ), and other Unicode characters.
 * @param str The input string to check.
 * @returns True if the string contains at least one non-ASCII character; false otherwise.
 */

export const emoji: CheckFn = useCheck((c) => c.emoji());
