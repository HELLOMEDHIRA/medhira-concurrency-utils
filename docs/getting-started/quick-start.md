# Quick Start

Get started with MEDHIRA Concurrency Utils in 5 minutes.

## Basic Usage

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';

// Get optimal concurrency based on current system load
const concurrency = getDynamicConcurrency();

console.log('Optimal concurrency:', concurrency);
```

## With Custom Options

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';

// Adjust memory threshold (0 to 1)
const concurrency = getDynamicConcurrency({
  memoryLimitThreshold: 0.7
});

console.log('Adjusted concurrency:', concurrency);
```

## Complete Example

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';

async function processItems(items) {
  const concurrency = getDynamicConcurrency({
    memoryLimitThreshold: 0.8
  });

  console.log(`Processing ${items.length} items with ${concurrency} workers`);

  const results = await Promise.all(
    items.slice(0, concurrency).map(async (item) => {
      return await processItem(item);
    })
  );

  return results;
}

async function processItem(item) {
  // Your processing logic here
  return item * 2;
}

const items = [1, 2, 3, 4, 5, 6, 7, 8];
processItems(items).then(console.log);
```

## How It Works

1. Gets total CPU count from `os.cpus()`
2. Checks system load average with `os.loadavg()`
3. Calculates memory usage ratio
4. Returns adjusted concurrency based on system state

## Next Section

- [API Reference](../api/getdynamicconcurrency.md)