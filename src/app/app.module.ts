import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FileInputComponent } from './file-upload/file-input.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FileInputComponent,
    MainPageComponent,
    CheckStatusComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
