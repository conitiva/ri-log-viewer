import { Pipe, PipeTransform } from '@angular/core';
import { IRiLogItem, ELogLevel } from './ri-log-viewer.service';

@Pipe({
  name: 'riLogPipe'
})
export class RiLogPipePipe implements PipeTransform {

  transform(logItems: IRiLogItem[], showDebug: boolean, showInfo: boolean, showWarn: boolean, showError: boolean): any {
    if (logItems == undefined) {
      return null;
    }
    
    console.log('Filter: ');
    console.log(logItems);
    console.log(showDebug + ' ' + showInfo + ' ' + showWarn + ' ' + showError);
    var filteredLog = logItems.filter(item => {
      var res = true;
      switch (item.level) {
        case ELogLevel.DEBUG:
          res = showDebug;
          break;
        case ELogLevel.INFO:
          res = showInfo;
          break;
        case ELogLevel.WARN:
          res = showWarn;
          break;
        case ELogLevel.ERROR:
          res = showError;
          break;
      }
      return res;
    })

    return filteredLog;
  }

}
