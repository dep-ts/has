/** Checks if string is in HH:MM time format */
export const time = (value: string): boolean =>
  /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
