/** Checks if string contains HTML markup */
export const html = (value: string): boolean => /<[^>]+>/.test(value);
