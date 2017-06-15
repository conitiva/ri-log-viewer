import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiLogViewerService } from './ri-log-viewer.service'
import { RiLogViewerComponent } from './ri-log-viewer.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RiLogViewerComponent],
  exports: [RiLogViewerService, RiLogViewerComponent]
})
export class RiLogViewerModule { }
