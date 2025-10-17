# @dep/has 🧠

> Lightweight validation toolkit for checking formats like email, UUID, IP,
> JSON, and more.

## [![JSR version](https://jsr.io/badges/@dep/has)](https://jsr.io/@dep/has)

## Features ✨

- 🧩 Modular and tree-shakeable
- ⚡ Zero dependencies
- 🧠 TypeScript ready
- 🌐 Works with Deno, Node, and browsers
- 🧪 Simple and predictable API

---

## Installation 📦

- **Deno**:
  ```typescript
  import { has } from "jsr:@dep/has";
  ```

* **Node.js (18+) or Browsers**:

  ```bash
  npx jsr add @dep/has
  ```

  Then import as an ES module:

  ```typescript
  import { has } from "@dep/has";
  ```

---

## Usage 🎯

### API 🧩

```typescript
import { has } from "@dep/has";

has.email("test@example.com"); // true
has.uuid("123e4567-e89b-12d3-a456-426614174000"); // true

const customEmail = has.custom(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
customEmail("test@domain.com"); // true
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
