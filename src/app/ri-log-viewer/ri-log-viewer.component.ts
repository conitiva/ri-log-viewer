import { Component, OnInit } from '@angular/core';
import { RiLogViewerService, IRiLogItem, ELogLevel } from './ri-log-viewer.service';

@Component({
  selector: 'ri-log-viewer',
  templateUrl: './ri-log-viewer.component.html',
  styleUrls: ['./ri-log-viewer.component.css']
})
export class RiLogViewerComponent implements OnInit {
  private logItems: IRiLogItem[];
  private showDebug: boolean = true;
  private showInfo: boolean = true;
  private showWarn: boolean = true;
  private showError: boolean = true;

  constructor(private taskService: RiLogViewerService) { }

  ngOnInit() {
    this.getLogItems();
  }

  getLogItems(): void {
    this.taskService.getLogItems().
      then(logItems => this.logItems = logItems);
  }

  deleteLogItems() {
    this.taskService.deleteLogItems();
    this.getLogItems();
  }

  switchFilter(filter) {
    console.log(filter.value + ' ' + filter.checked);
    switch (filter.value) {
      case ELogLevel.DEBUG:
        this.showDebug = filter.checked;
        break;
      case ELogLevel.INFO:
        this.showInfo = filter.checked;
        break;
      case ELogLevel.WARN:
        this.showWarn = filter.checked;
        break;
      case ELogLevel.ERROR:
        this.showError = filter.checked;
        break;
    }
    this.getLogItems();
  }
}
