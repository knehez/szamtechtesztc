import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CompilerService } from './codecompile.service';
import { HttpModule } from '@angular/http';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, AceEditorModule
  ],
  providers: [CompilerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
