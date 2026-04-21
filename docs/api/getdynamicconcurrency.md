# getDynamicConcurrency

Calculates optimal concurrency based on system resources.

## Import

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';
```

## Syntax

```js
const concurrency = getDynamicConcurrency(options);
```

## Parameters

| Parameter | Type | Optional | Default | Description |
|-----------|------|----------|---------|-------------|
| `options` | object | Yes | - | Configuration options |
| `options.memoryLimitThreshold` | number | Yes | 0.8 | Memory threshold (0-1) |

## Returns

`number` - The optimal number of concurrent operations

## Example

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';

// Basic usage
const basic = getDynamicConcurrency();
console.log(basic); // Output depends on hardware

// With custom threshold
const custom = getDynamicConcurrency({
  memoryLimitThreshold: 0.6
});
console.log(custom); // More conservative
```

## Algorithm

The function uses the following logic:

1. **CPU Count**: Gets total CPU cores via `os.cpus().length`
2. **Load Average**: Gets 1-minute load average via `os.loadavg()[0]`
3. **Memory Usage**: Calculates `(totalmem - freemem) / totalmem`

### Under High Load

If system load > threshold OR memory usage > threshold:
- Returns `max(1, floor(cpuCount / 2))`

### Under Normal Load

If system has resources available:
- Returns `min(cpuCount * 2, floor(memoryLimit / 512MB))`

## TypeScript

```ts
interface GetDynamicConcurrencyOptions {
  memoryLimitThreshold?: number;
}

function getDynamicConcurrency(options?: GetDynamicConcurrencyOptions): number;
```

## Next Section

- [Parallel Processing](../use-cases/parallel-processing.md)