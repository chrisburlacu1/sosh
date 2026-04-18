export class QwenLogger {
  static getInstance(...args: any[]): any {
    return new QwenLogger();
  }
  logStartSessionEvent(...args: any[]): void {}
  logEndSessionEvent(...args: any[]): void {}
  logConversationFinishedEvent(...args: any[]): void {}
  logNewPromptEvent(...args: any[]): void {}
  logSlashCommandEvent(...args: any[]): void {}
  logModelSlashCommandEvent(...args: any[]): void {}
  logToolCallEvent(...args: any[]): void {}
  logFileOperationEvent(...args: any[]): void {}
  logSubagentExecutionEvent(...args: any[]): void {}
  logToolOutputTruncatedEvent(...args: any[]): void {}
  logApiRequestEvent(...args: any[]): void {}
  logApiResponseEvent(...args: any[]): void {}
  logApiCancelEvent(...args: any[]): void {}
  logApiErrorEvent(...args: any[]): void {}
  logInvalidChunkEvent(...args: any[]): void {}
  logContentRetryFailureEvent(...args: any[]): void {}
  logMalformedJsonResponseEvent(...args: any[]): void {}
  logLoopDetectedEvent(...args: any[]): void {}
  logKittySequenceOverflowEvent(...args: any[]): void {}
  logIdeConnectionEvent(...args: any[]): void {}
  logExtensionInstallEvent(...args: any[]): void {}
  logExtensionUninstallEvent(...args: any[]): void {}
  logExtensionUpdateEvent(...args: any[]): void {}
  logExtensionEnableEvent(...args: any[]): void {}
  logExtensionDisableEvent(...args: any[]): void {}
  logFlashFallbackEvent(...args: any[]): void {}
  logRipgrepFallbackEvent(...args: any[]): void {}
  logNextSpeakerCheck(...args: any[]): void {}
  logContentRetryEvent(...args: any[]): void {}
  logAuthEvent(...args: any[]): void {}
  logSkillLaunchEvent(...args: any[]): void {}
  logUserFeedbackEvent(...args: any[]): void {}
  logLoopDetectionDisabledEvent(...args: any[]): void {}
}
