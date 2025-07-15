# Unicode Encode 👋

[![npm badge][2]][1]
[![CI Status](https://github.com/Accelery/unicode-encode/workflows/CI/badge.svg)](https://github.com/Accelery/unicode-encode/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

In most browsers, calling `btoa()` on a Unicode string or Emojis will cause an `InvalidCharacterError` or `DOMException` exception.

This small package provides a simple solution by making available `utoa` and `atou`, **U**nicode to and from base64 encoding.

## Install

```shell
npm i --save unicode-encode
```

## Usage

### JavaScript

```js
// Import the needed functions.
const { utoa, atou } = require("unicode-encode");

// Examples:
utoa("à bientôt ☮"); // w6AgYmllbnTDdHQg4piu
atou("w6AgYmllbnTDdHQg4piu"); // "à bientôt ☮"

utoa("👋 Unicode!"); // 8J+RiyBVbmljb2RlIQ==
atou("8J+RiyBVbmljb2RlIQ=="); // "👋 Unicode!"
```

### TypeScript

```typescript
// Import with full type support
import { utoa, atou } from "unicode-encode";

// Functions are fully typed
const encoded: string = utoa("Hello 🌍");
const decoded: string = atou(encoded);
```

## API

### `utoa(str: string): string`

Encodes a Unicode string to base64.

- **str**: The Unicode string to encode
- **Returns**: Base64 encoded string

### `atou(base64: string): string`

Decodes a base64 encoded string back to Unicode.

- **base64**: The base64 string to decode
- **Returns**: Decoded Unicode string

## Development

This project is written in TypeScript and requires Node.js 18+ for development.

### Setup

```shell
# Clone the repository
git clone https://github.com/Accelery/unicode-encode.git
cd unicode-encode

# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test
```

### Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run clean` - Remove compiled output
- `npm run rebuild` - Clean and build
- `npm test` - Run tests on compiled code
- `npm run test:ts` - Run tests directly on TypeScript files
- `npm run test:watch` - Run tests in watch mode
- `npm run coverage` - Generate test coverage report
- `npm run lint` - Check code formatting
- `npm run lint:fix` - Fix code formatting
- `npm run typecheck` - Check TypeScript types without emitting

### Publishing

This package uses automated publishing via GitHub Actions. To publish a new version:

1. Update the version in `package.json`
2. Update the `CHANGELOG.md` with your changes
3. Create a new GitHub release with a tag matching the version
4. The package will be automatically published to NPM

### Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass and code is properly formatted
6. Submit a pull request

## License

MIT

[1]: https://npmjs.org/package/unicode-encode
[2]: https://nodei.co/npm/unicode-encode.png?compact=true
