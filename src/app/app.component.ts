import { Component } from '@angular/core';
import { RiLogViewerService, ELogLevel } from './ri-log-viewer/ri-log-viewer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RiLogViewer';

  constructor(private taskService: RiLogViewerService) { }

  createLogMessage(level: ELogLevel, message) {
    switch (level) {
      case ELogLevel.DEBUG:
        this.taskService.debug(message);
        break;

      case ELogLevel.INFO:
        this.taskService.info(message);
        break;

      case ELogLevel.WARN:
        this.taskService.warn(message);
        break;

      case ELogLevel.ERROR:
        this.taskService.error(message);
        break;

      default:
        break;
    }
  }
}
