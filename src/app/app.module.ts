import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CompilerService } from "./codecompile.service";
import { AceEditorModule } from "ng2-ace-editor";
import { MarkdownModule } from "ngx-markdown";
import { HttpClientModule } from "@angular/common/http";
import { ButtonModule } from "primeng/button";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AceEditorModule,
    ButtonModule,
    ConfirmDialogModule,
    InputTextModule,
    MarkdownModule.forRoot(),
  ],
  providers: [CompilerService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
