/**
 * Check: Chainable builder for validating characters in strings.
 * Allows adding multiple rules and testing if at least one character
 * satisfies any of the added rules.
 *
 * Each method adds an internal check based on the character code.
 * Then `test(str)` evaluates whether any character matches at least one rule.
 *
 * @example
 * const result = new Check()
 *   .lowerCase()
 *   .digit()
 *   .test("abc123"); // true
 */
export class Check {
  #checks: ((code: number) => boolean)[] = [];

  /**
   * Adds checks for any letter (a-z, A-Z).
   */
  letter(): this {
    this.lowerCase();
    this.upperCase();
    return this;
  }

  /**
   * Adds a check for lowercase letters (a-z).
   */
  lowerCase(): this {
    this.addCheck((code) => code >= 97 && code <= 122);
    return this;
  }

  /**
   * Adds a check for uppercase letters (A-Z).
   */
  upperCase(): this {
    this.addCheck((code) => code >= 65 && code <= 90);
    return this;
  }

  /**
   * Adds checks for letters and digits (a-z, A-Z, 0-9).
   */
  alphaNum(): this {
    this.digit();
    this.letter();
    return this;
  }

  /**
   * Adds a check for digits (0-9).
   */
  digit(): this {
    this.addCheck((code) => code >= 48 && code <= 57);
    return this;
  }

  /**
   * Adds a check for common symbols (e.g., !@#$%…).
   */
  symbol(): this {
    this.addCheck(
      (code) =>
        (code >= 33 && code <= 47) ||
        (code >= 58 && code <= 64) ||
        (code >= 91 && code <= 96) ||
        (code >= 123 && code <= 126)
    );
    return this;
  }

  /**
   * Adds a check for whitespace characters (space, tab, newline, etc.).
   */
  whitespace(): this {
    this.addCheck(
      (code) => code === 32 || code === 9 || code === 10 || code === 13
    );
    return this;
  }

  /**
   * Adds a check for emoji or non-ASCII characters.
   */
  emoji(): this {
    this.addCheck((code) => code > 127);
    return this;
  }

  /**
   * Adds a check for punctuation marks (.,?!:;'"()-).
   */
  punctuation(): this {
    this.addCheck(
      (code) =>
        code === 33 ||
        code === 34 ||
        code === 39 ||
        code === 40 ||
        code === 41 ||
        code === 44 ||
        code === 45 ||
        code === 46 ||
        code === 63 ||
        code === 58 ||
        code === 59
    );
    return this;
  }

  /**
   * Adds a check for hexadecimal digits (0-9, a-f, A-F).
   */
  hexDigit(): this {
    this.addCheck(
      (code) =>
        (code >= 48 && code <= 57) ||
        (code >= 65 && code <= 70) ||
        (code >= 97 && code <= 102)
    );
    return this;
  }

  /**
   * Adds a check for a specific character.
   * @param char - The character to match.
   */
  char(char: string): this {
    this.addCheck((code) => code === char.charCodeAt(0));
    return this;
  }

  /**
   * Adds a check for any of the provided characters.
   * @param chars - Characters to match.
   */
  any(...chars: string[]): this {
    const codes = chars.map((c) => c.charCodeAt(0));
    this.addCheck((code) => codes.includes(code));
    return this;
  }

  /**
   * Adds a range check between two characters.
   * @param start - Start of range.
   * @param end - End of range.
   */
  range(start: string, end: string): this {
    const startCode = start.charCodeAt(0);
    const endCode = end.charCodeAt(0);
    this.addCheck((code) => code >= startCode && code <= endCode);
    return this;
  }

  /**
   * Adds a custom check function to the check.
   * @param fn - A function receiving a character code and returning true if it passes the check.
   */
  addCheck(fn: (value: number) => boolean): this {
    this.#checks.push(fn);
    return this;
  }

  /**
   * Tests if at least one character in the string matches any added checks.
   * @param str - The string to test.
   * @returns True if any character passes a check.
   */
  test(str: string): boolean {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }

    return [...str].some((char) => {
      const code = char.charCodeAt(0);
      return this.#checks.some((fn) => fn(code));
    });
  }
}

/**
 * Factory to create a new Check instance.
 * @returns A fresh Check ready for chainable character checks.
 */
export const check = (): Check => new Check();
