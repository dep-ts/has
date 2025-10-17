/**
 * Creates a custom pattern validator
 * @param regexp - The regular expression to test against
 * @returns A function that validates against the given pattern
 */
export const custom = (regexp: RegExp) => (value: string): boolean =>
  regexp.test(value);
