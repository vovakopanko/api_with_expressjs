import { Logger } from "tslog";

export class LoggerService {
  public logger: Logger;

  constructor() {
    this.logger = new Logger({
      displayInstanceName: false,
      displayLoggerName: false,
      displayFilePath: "hidden",
      displayFunctionName: false,
    });
  }

  info(...args: string[]) {
    this.logger.info(...args);
  }

  error(...args: string[]) {
    this.logger.error(...args);
  }

  warn(...args: undefined[]) {
    this.logger.warn(...args);
  }
}
