# Installation

This guide will help you install MEDHIRA Concurrency Utils.

## Requirements

- **Node.js** 18+

## Install the Package

```bash
# NPM
npm install --save medhira-concurrency-utils

# Yarn
yarn add medhira-concurrency-utils
```

## Verify Installation

To verify the installation was successful:

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';

const concurrency = getDynamicConcurrency();
console.log('Concurrency:', concurrency);
```

## Next Steps

- [Quick Start](quick-start.md) - Get up and running
- [API Reference](../api/getdynamicconcurrency.md) - Full API docs
- [Use Cases](../use-cases/parallel-processing.md) - Practical examples