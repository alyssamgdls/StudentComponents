import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { PrintEntryComponent } from './print-entry/print-entry.component';
import { DisplayEntryComponent } from './display-entry/display-entry.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    AddEntryComponent,
    PrintEntryComponent,
    DisplayEntryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }