// date.ts
/** Checks if string is a valid date in common formats */
export const date = (value: string): boolean => {
  const timestamp = new Date(value).getTime();
  return !isNaN(timestamp) && isNaN(Number(value)) && value.trim().length > 0;
};

/** Checks if string is strictly ISO 8601 format (YYYY-MM-DD) */
export const isoDate = (value: string): boolean =>
  /^\d{4}-\d{2}-\d{2}$/.test(value) && !isNaN(new Date(value).getTime());
