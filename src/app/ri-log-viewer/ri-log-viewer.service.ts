import { Injectable } from '@angular/core';

export enum ELogLevel {
  DEBUG = 1,
  INFO,
  WARN,
  ERROR
}

export interface IRiLogItem {
  message: string;
  level: ELogLevel;
  timestamp: Date;
}


@Injectable()
export class RiLogViewerService {
  logItems: IRiLogItem[] = [];

  constructor() { }

  getLogItems(): Promise<IRiLogItem[]> {
    return Promise.resolve(this.logItems);
  }

  deleteLogItems(){
    this.logItems = [];
  }

  debug(message) {
    this.logItems.push({message: message, level: ELogLevel.DEBUG, timestamp: new Date()})
    console.debug(message);
  }

  info(message) {
    this.logItems.push({message: message, level: ELogLevel.INFO, timestamp: new Date()})
    console.info(message);
  }

  warn(message) {
    this.logItems.push({message: message, level: ELogLevel.WARN, timestamp: new Date()})
    console.warn(message);
  }

  error(message) {
    this.logItems.push({message: message, level: ELogLevel.ERROR, timestamp: new Date()})
    console.error(message);
  }
}
