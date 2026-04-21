# Parallel Processing

Use MEDHIRA Concurrency Utils for parallel processing.

## Parallel Map

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';

async function parallelMap(items, processor) {
  const concurrency = getDynamicConcurrency();
  const results = [];

  for (let i = 0; i < items.length; i += concurrency) {
    const chunk = items.slice(i, i + concurrency);
    const chunkResults = await Promise.all(chunk.map(processor));
    results.push(...chunkResults);
  }

  return results;
}

// Usage
const items = Array.from({ length: 100 }, (_, i) => i);
const doubled = await parallelMap(items, x => x * 2);
```

## Worker Pool

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';
import { Worker } from 'worker_threads';

class WorkerPool {
  constructor(workerPath) {
    this.workerPath = workerPath;
    this.workers = [];
    this.activeWorkers = 0;
  }

  async initialize() {
    const concurrency = getDynamicConcurrency();
    this.workers = Array.from(
      { length: concurrency },
      () => new Worker(this.workerPath)
    );
  }

  async runTask(data) {
    const worker = this.workers[this.activeWorkers];
    this.activeWorkers = (this.activeWorkers + 1) % this.workers.length;
    return worker.postMessage(data);
  }
}
```

## Batch Processing

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';

async function processInBatches(items, processFn) {
  const batchSize = getDynamicConcurrency();
  const results = [];

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(processFn));
    results.push(...batchResults);
  }

  return results;
}
```

## Next Section

- [Worker Threads](./worker-threads.md)