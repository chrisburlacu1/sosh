/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
export const SUBAGENT_EXECUTION_COUNT = `qwen-code.subagent.execution.count`;

export enum FileOperation {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
}
export enum PerformanceMetricType {
  STARTUP = 'startup',
  MEMORY = 'memory',
  CPU = 'cpu',
  TOOL_EXECUTION = 'tool_execution',
  API_REQUEST = 'api_request',
  TOKEN_EFFICIENCY = 'token_efficiency',
}
export enum MemoryMetricType {
  HEAP_USED = 'heap_used',
  HEAP_TOTAL = 'heap_total',
  EXTERNAL = 'external',
  RSS = 'rss',
}
export enum ToolExecutionPhase {
  VALIDATION = 'validation',
  PREPARATION = 'preparation',
  EXECUTION = 'execution',
  RESULT_PROCESSING = 'result_processing',
}
export enum ApiRequestPhase {
  REQUEST_PREPARATION = 'request_preparation',
  NETWORK_LATENCY = 'network_latency',
  RESPONSE_PROCESSING = 'response_processing',
  TOKEN_PROCESSING = 'token_processing',
}

export function getMeter() {
  return undefined;
}
export function initializeMetrics(...args: any[]) {}
export function recordChatCompressionMetrics(...args: any[]) {}
export function recordToolCallMetrics(...args: any[]) {}
export function recordTokenUsageMetrics(...args: any[]) {}
export function recordApiResponseMetrics(...args: any[]) {}
export function recordApiErrorMetrics(...args: any[]) {}
export function recordFileOperationMetric(...args: any[]) {}
export function recordInvalidChunk(...args: any[]) {}
export function recordContentRetry(...args: any[]) {}
export function recordContentRetryFailure(...args: any[]) {}
export function recordModelSlashCommand(...args: any[]) {}
export function initializePerformanceMonitoring(...args: any[]) {}
export function recordStartupPerformance(...args: any[]) {}
export function recordMemoryUsage(...args: any[]) {}
export function recordCpuUsage(...args: any[]) {}
export function recordToolQueueDepth(...args: any[]) {}
export function recordToolExecutionBreakdown(...args: any[]) {}
export function recordTokenEfficiency(...args: any[]) {}
export function recordApiRequestBreakdown(...args: any[]) {}
export function recordPerformanceScore(...args: any[]) {}
export function recordPerformanceRegression(...args: any[]) {}
export function recordBaselineComparison(...args: any[]) {}
export function isPerformanceMonitoringActive(): boolean {
  return false;
}
export function recordSubagentExecutionMetrics(...args: any[]) {}
export function recordArenaSessionStartedMetrics(...args: any[]) {}
export function recordArenaAgentCompletedMetrics(...args: any[]) {}
export function recordArenaSessionEndedMetrics(...args: any[]) {}

export function recordMemoryExtractMetrics(...args: any[]) {}
export function recordMemoryDreamMetrics(...args: any[]) {}
export function recordMemoryRecallMetrics(...args: any[]) {}
