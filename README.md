# @dep/has 🔍

> Tiny character presence detector for strings

## [![JSR version](https://jsr.io/badges/@dep/has)](https://jsr.io/@dep/has)

## Features ✨

- 🔤 **Letters** - Detects a-z, A-Z (lowercase, uppercase)
- 🔢 **Digits** - Finds 0-9 anywhere in strings
- ✨ **Symbols** - Spots !@#$%^&\*() special chars
- 😊 **Emojis** - Catches non-ASCII (emojis, accents)
- 📝 **Punctuation** - Detects .,?!:;"'- marks

---

## Installation 📦

- **Deno**:
  ```typescript
  import { digit, letter, symbol, has } from 'jsr:@dep/has';
  ```
- **Node.js (18+) or Browsers**:
  ```bash
  npx jsr add @dep/has
  ```
  Then import as an ES module:
  ```typescript
  import { digit, letter, symbol, has } from '@dep/has';
  ```

---

## Usage 🎯

### API 🧩

```typescript
import { digit, letter, symbol, any, has } from '@dep/has';

// Simple checks
console.log(digit('hello123')); // true - has digit
console.log(letter('123')); // false - no letters
console.log(symbol('pass!word')); // true - has !

// Custom characters
console.log(any('a', 'b')('abc')); // true - has a or b
console.log(has.any('@$')('email@')); // true

// Chainable builder
import { check } from '@dep/has';
const hasComplex = check().letter().digit().symbol().test('P@ssw0rd'); // true


// Create reusable check functions
import { useCheck } from '@dep/has';
como que falta * const hasDigit = useCheck(c => c.digit());
hasDigit("abc123"); // true
hasDigit("abc"); // false
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.
**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
