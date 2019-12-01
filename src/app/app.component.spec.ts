import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor';
import { SuiModule } from 'ng2-semantic-ui';
import { MarkdownModule } from 'ngx-markdown';
import { CompilerService } from './codecompile.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compilerService: CompilerService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule, FormsModule, HttpClientModule, HttpClientTestingModule, AceEditorModule, SuiModule, MarkdownModule.forRoot()
      ],
      providers: [
        CompilerService
      ]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    // compilerService = fixture.debugElement.injector.get(CompilerService);
    // httpMock = TestBed.get(HttpTestingController);

    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

});
