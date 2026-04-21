<p align="center">
  <img src="https://raw.githubusercontent.com/HELLOMEDHIRA/medhira/main/assets/medhira-logo.png" alt="MEDHIRA Logo" width="200"/>
</p>

<p align="center">
  <strong>Engineering Intelligence Across Everything</strong>
</p>

---

# medhira-concurrency-utils

Hardware Concurrency Optimizer helps developers efficiently determine the number of available hardware concurrencies on a system, even when other software or hardware resources are already in use. This package is ideal for optimizing multi-threaded or parallelized applications, ensuring that your processes can be executed without overloading the system.

## Why MEDHIRA?

In modern applications, especially those dealing with heavy computation or data processing, **MEDHIRA Concurrency Utils** provides:

- **Dynamic Concurrency** - Automatically adjusts based on system load
- **Memory-Aware** - Considers memory usage when calculating concurrency
- **CPU-Optimized** - Leverages available CPU cores efficiently
- **Zero Dependencies** - Lightweight and fast
- **TypeScript Support** - Full type definitions included

## Installation

```bash
# NPM
npm install --save medhira-concurrency-utils

# Yarn
yarn add medhira-concurrency-utils
```

## Parameters

| Parameter | Type | Optional | Default | Description |
|-----------|------|----------|---------|-------------|
| `memoryLimitThreshold` | number | Yes | 0.8 | Value Range from 0 to 1 |

## Usage

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';

console.log(getDynamicConcurrency()); // Output depends on hardware and threshold

// With custom options
console.log(getDynamicConcurrency({ memoryLimitThreshold: 0.7 }));
```

## How It Works

The function calculates optimal concurrency by:

1. Getting total CPU count from `os.cpus()`
2. Checking system load average with `os.loadavg()`
3. Calculating memory usage: `(totalmem - freemem) / totalmem`
4. Adjusting concurrency based on:
   - If system is under high load: reduces to `cpuCount / 2`
   - If system has available resources: increases up to `cpuCount * 2`

## Use Cases

### Parallel Processing

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';

const concurrency = getDynamicConcurrency();

// Process items in parallel with optimal concurrency
const results = await Promise.all(
  items.slice(0, concurrency).map(item => processItem(item))
);
```

### Worker Threads

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';
import { Worker } from 'worker_threads';

const optimalConcurrency = getDynamicConcurrency();

const workers = Array.from(
  { length: optimalConcurrency },
  () => new Worker('./worker.js')
);
```

### Batch Processing

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';

async function processBatch(items) {
  const concurrency = getDynamicConcurrency({ memoryLimitThreshold: 0.6 });
  const chunks = chunkArray(items, concurrency);

  for (const chunk of chunks) {
    await Promise.all(chunk.map(processItem));
  }
}
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## Sponsor & Support

To keep this library maintained and up-to-date, please consider sponsoring it on GitHub.

Or, if you're looking for private support or help in customizing the experience, reach out to us at **hello.medhira@gmail.com**

## About MEDHIRA

**MEDHIRA** - Engineering Intelligence Across Everything

- Website: [https://medhira.readthedocs.io/en/latest/](https://medhira.readthedocs.io/en/latest/)
- GitHub: [https://github.com/HELLOMEDHIRA](https://github.com/HELLOMEDHIRA)
- Email: hello.medhira@gmail.com

---

## License

Apache-2.0

---

Made with passion by MEDHIRA