/** Checks if string is a valid IPv6 address */
export const ipv6 = (value: string): boolean => {
  // Remove zone identifier if present (e.g., %eth0)
  const cleanValue = value.split('%')[0];
  if (cleanValue.length > 39) return false; // Max without zone ID

  // Full IPv6 regex covering all cases (RFC 4291)
  const ipv6Regex =
    /^((?:[0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4}|(?:[0-9A-Fa-f]{1,4}:){5}(?::[0-9A-Fa-f]{1,4}){1,2}|(?:[0-9A-Fa-f]{1,4}:){4}(?::[0-9A-Fa-f]{1,4}){1,3}|(?:[0-9A-Fa-f]{1,4}:){3}(?::[0-9A-Fa-f]{1,4}){1,4}|(?:[0-9A-Fa-f]{1,4}:){2}(?::[0-9A-Fa-f]{1,4}){1,5}|[0-9A-Fa-f]{1,4}:((?::[0-9A-Fa-f]{1,4}){1,6})|:((?::[0-9A-Fa-f]{1,4}){1,7}|:)|fe80:(?::[0-9A-Fa-f]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(?:ffff(?::0{1,4}){0,1}:){0,1}((25[0-5]|(?:2[0-4]?|1?)[0-9]?[0-9])\.){3,3}(25[0-5]|(?:2[0-4]?|1?)[0-9]?[0-9])|(?:[0-9A-Fa-f]{1,4}:){1,4}:((25[0-5]|(?:2[0-4]?|1?)[0-9]?[0-9])\.){3,3}(25[0-5]|(?:2[0-4]?|1?)[0-9]?[0-9]))$/;

  return ipv6Regex.test(cleanValue);
};
