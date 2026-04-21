# Worker Threads

Use MEDHIRA Concurrency Utils with Node.js Worker Threads.

## Basic Worker Pool

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';
import { Worker } from 'worker_threads';
import * as path from 'path';

class WorkerPool {
  constructor(workerFile) {
    this.workerFile = workerFile;
    this.pool = [];
    this.index = 0;
  }

  async initialize() {
    const size = getDynamicConcurrency();
    this.pool = Array.from(
      { length: size },
      () => new Worker(this.workerFile)
    );
  }

  async execute(data) {
    const worker = this.pool[this.index];
    this.index = (this.index + 1) % this.pool.length;

    return new Promise((resolve, reject) => {
      worker.once('message', resolve);
      worker.once('error', reject);
      worker.postMessage(data);
    });
  }

  terminate() {
    this.pool.forEach(w => w.terminate());
  }
}
```

## Usage

```js
// worker.js
const { parentPort } = require('worker_threads');

parentPort.on('message', (data) => {
  const result = data * 2;
  parentPort.postMessage(result);
});

// main.js
const pool = new WorkerPool('./worker.js');
await pool.initialize();

const result = await pool.execute(5);
console.log(result); // 10
```

## Dynamic Pool Resizing

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';

function resizePool(workers, workerFile) {
  const optimal = getDynamicConcurrency();
  const current = workers.length;

  if (optimal > current) {
    // Add workers
    for (let i = current; i < optimal; i++) {
      workers.push(new Worker(workerFile));
    }
  } else if (optimal < current) {
    // Remove workers
    workers.slice(optimal).forEach(w => w.terminate());
    workers.length = optimal;
  }
}
```

## Next Section

- [Batch Processing](./batch-processing.md)