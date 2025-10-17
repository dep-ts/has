/** Checks if string is a valid URL format */
export const url = (value: string): boolean => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};
