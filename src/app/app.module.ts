import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FileInputComponent } from './file-upload/file-input.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GetFetchComponent } from './get-fetch/get-fetch.component';
import { CheckStatusComponent } from './check-status/check-status.component';

@NgModule({
  declarations: [
    AppComponent,
    FileInputComponent,
    MainPageComponent,
    GetFetchComponent,
    CheckStatusComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
