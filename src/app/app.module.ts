import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FileInputComponent } from './file-upload/file-input.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { FileFetchComponent } from './file-fetch/file-fetch.component';

@NgModule({
  declarations: [
    AppComponent,
    FileInputComponent,
    MainPageComponent,
    CheckStatusComponent,
    FileFetchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
