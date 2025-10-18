import { useCheck, type CheckFn } from '@/core/tools/use.ts';

/**
 * Checks if the input string contains at least one special character.
 * **ASCII ranges**: 33-47 (`!"#$%&'()*+,-./`), 58-64 (`:;<=>?@`), 91-96 (`[\]^_\``), 123-126 (`{|}~`)
 * @param str The input string to check.
 * @returns True if the string contains at least one special character; false otherwise.
 */
export const symbol: CheckFn = useCheck((c) => c.symbol());
