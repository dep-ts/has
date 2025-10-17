/** Checks if string is a valid international phone number */
export const phone = (value: string): boolean => {
  const digitsOnly = value.replace(/[^\d]/g, '');
  if (digitsOnly.length < 9 || digitsOnly.length > 15) return false;
  return /^\+?[\d\s\-()]{10,17}$/.test(value);
};
