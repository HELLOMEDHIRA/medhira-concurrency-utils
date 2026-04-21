"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const os = __importStar(require("os"));
const getDynamicConcurrency = (options) => {
    const memoryLimitThreshold = (options === null || options === void 0 ? void 0 : options.memoryLimitThreshold) || 0.8;
    const cpuCount = os.cpus().length;
    const loadAverage = os.loadavg()[0];
    const memoryUsage = os.totalmem() - os.freemem();
    const memoryLimit = os.totalmem() * memoryLimitThreshold;
    // Example logic: Adjust concurrency based on load average and memory usage
    if (loadAverage > cpuCount * memoryLimitThreshold || memoryUsage > memoryLimit) {
        const result = Math.max(1, Math.floor(cpuCount / 2));
        return result === 0 ? 1 : result; // Reduce concurrency
    }
    else {
        const result = Math.min(cpuCount * 2, Math.floor(memoryLimit / (512 * 1024 * 1024))); // Increase concurrency
        return result === 0 ? 1 : result; // Reduce concurrency
    }
};
exports.default = getDynamicConcurrency;
