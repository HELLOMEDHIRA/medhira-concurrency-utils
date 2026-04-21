---
title: MEDHIRA Concurrency Utils
---

<p align="center">
  <img src="https://raw.githubusercontent.com/HELLOMEDHIRA/medhira/main/assets/medhira-logo.png" alt="MEDHIRA Logo" width="150"/>
</p>

<p align="center">
  <strong>Engineering Intelligence Across Everything</strong>
</p>

---

Hardware Concurrency Optimizer helps developers efficiently determine the number of available hardware concurrencies on a system, even when other software or hardware resources are already in use.

!!! note
    This package requires **Node.js** and uses no external dependencies.

## Why MEDHIRA?

In modern applications, especially those dealing with heavy computation or data processing, **MEDHIRA Concurrency Utils** provides:

- **Dynamic Concurrency** - Automatically adjusts based on system load
- **Memory-Aware** - Considers memory usage when calculating concurrency
- **CPU-Optimized** - Leverages available CPU cores efficiently
- **Zero Dependencies** - Lightweight and fast

## Key Features

- :material-cpu-64-bit: **Hardware-Aware** - Uses system CPU count
- :material-memory: **Memory-Conscious** - Considers available memory
- :material-chart-line: **Load-Based** - Adjusts for system load average
- :material-tune: **Configurable** - Customizable thresholds

## Quick Example

```js
import { getDynamicConcurrency } from 'medhira-concurrency-utils';

// Get optimal concurrency
const concurrency = getDynamicConcurrency();
console.log('Optimal concurrency:', concurrency);

// With custom options
const custom = getDynamicConcurrency({ memoryLimitThreshold: 0.7 });
```

## Sponsor & Support

To keep this library maintained and up-to-date, please consider sponsoring it on GitHub.

Or, if you're looking for private support or help in customizing the experience, reach out to us at **hello@medhira.io**

---

**MEDHIRA** - Engineering Intelligence Across Everything