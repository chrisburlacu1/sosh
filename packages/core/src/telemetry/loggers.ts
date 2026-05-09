/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { uiTelemetryService } from './uiTelemetry.js';
import {
  EVENT_TOOL_CALL,
  EVENT_API_ERROR,
  EVENT_API_CANCEL,
  EVENT_API_RESPONSE,
} from './constants.js';
import { isInternalPromptId } from '../utils/internalPromptIds.js';
import type { Config } from '../config/config.js';
import type {
  ToolCallEvent,
  ApiErrorEvent,
  ApiCancelEvent,
  ApiResponseEvent,
} from './types.js';

export function logStartSession(...args: any[]): void {}
export function logUserPrompt(...args: any[]): void {}
export function logToolCall(config: Config, event: ToolCallEvent): void {
  const uiEvent = {
    ...event,
    'event.name': EVENT_TOOL_CALL,
    'event.timestamp': new Date().toISOString(),
  } as any;
  uiTelemetryService.addEvent(uiEvent);
  if (!isInternalPromptId(event.prompt_id)) {
    config.getChatRecordingService()?.recordUiTelemetryEvent(uiEvent);
  }
}
export function logToolOutputTruncated(...args: any[]): void {}
export function logFileOperation(...args: any[]): void {}
export function logApiRequest(...args: any[]): void {}
export function logFlashFallback(...args: any[]): void {}
export function logRipgrepFallback(...args: any[]): void {}
export function logApiError(config: Config, event: ApiErrorEvent): void {
  const uiEvent = {
    ...event,
    'event.name': EVENT_API_ERROR,
    'event.timestamp': new Date().toISOString(),
  } as any;
  uiTelemetryService.addEvent(uiEvent);
  if (!isInternalPromptId(event.prompt_id)) {
    config.getChatRecordingService()?.recordUiTelemetryEvent(uiEvent);
  }
}
export function logApiCancel(config: Config, event: ApiCancelEvent): void {
  const uiEvent = {
    ...event,
    'event.name': EVENT_API_CANCEL,
    'event.timestamp': new Date().toISOString(),
  } as any;
  uiTelemetryService.addEvent(uiEvent);
}
export function logApiResponse(config: Config, event: ApiResponseEvent): void {
  const uiEvent = {
    ...event,
    'event.name': EVENT_API_RESPONSE,
    'event.timestamp': new Date().toISOString(),
  } as any;
  uiTelemetryService.addEvent(uiEvent);
  if (!isInternalPromptId(event.prompt_id)) {
    config.getChatRecordingService()?.recordUiTelemetryEvent(uiEvent);
  }
}
export function logLoopDetected(...args: any[]): void {}
export function logLoopDetectionDisabled(...args: any[]): void {}
export function logNextSpeakerCheck(...args: any[]): void {}
export function logSlashCommand(...args: any[]): void {}
export function logIdeConnection(...args: any[]): void {}
export function logConversationFinishedEvent(...args: any[]): void {}
export function logChatCompression(...args: any[]): void {}
export function logKittySequenceOverflow(...args: any[]): void {}
export function logMalformedJsonResponse(...args: any[]): void {}
export function logInvalidChunk(...args: any[]): void {}
export function logContentRetry(...args: any[]): void {}
export function logContentRetryFailure(...args: any[]): void {}
export function logSubagentExecution(...args: any[]): void {}
export function logModelSlashCommand(...args: any[]): void {}
export function logExtensionInstallEvent(...args: any[]): void {}
export function logExtensionUninstall(...args: any[]): void {}
export function logExtensionUpdateEvent(...args: any[]): void {}
export function logExtensionEnable(...args: any[]): void {}
export function logExtensionDisable(...args: any[]): void {}
export function logAuth(...args: any[]): void {}
export function logSkillLaunch(...args: any[]): void {}
export function logUserFeedback(...args: any[]): void {}
export function logUserRetry(...args: any[]): void {}
export function logArenaSessionStarted(...args: any[]): void {}
export function logArenaAgentCompleted(...args: any[]): void {}
export function logArenaSessionEnded(...args: any[]): void {}
export function logHookCall(...args: any[]): void {}
export function logPromptSuggestion(...args: any[]): void {}
export function logSpeculation(...args: any[]): void {}
export function logMemoryExtract(...args: any[]): void {}
export function logMemoryDream(...args: any[]): void {}
export function logMemoryRecall(...args: any[]): void {}
export function recordMemoryExtractMetrics(...args: any[]): void {}
export function recordMemoryDreamMetrics(...args: any[]): void {}
export function recordMemoryRecallMetrics(...args: any[]): void {}
