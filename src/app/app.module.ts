import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { RiLogViewerComponent } from './ri-log-viewer/ri-log-viewer.component';

import { RiLogViewerService } from './ri-log-viewer/ri-log-viewer.service';
import { RiLogPipePipe } from './ri-log-viewer/ri-log-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RiLogViewerComponent,
    RiLogPipePipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [RiLogViewerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
