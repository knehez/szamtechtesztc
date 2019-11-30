import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CompilerService } from './codecompile.service';
import { HttpModule } from '@angular/http';
import { AceEditorModule } from 'ng2-ace-editor';
import { SuiModule } from 'ng2-semantic-ui';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, AceEditorModule, SuiModule, MarkdownModule.forRoot(),
  ],
  providers: [CompilerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
