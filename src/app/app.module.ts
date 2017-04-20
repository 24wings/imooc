import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { KeywordDirective } from './keyword.directive';
import { KeywordPipe } from './keyword.pipe';

@NgModule({
  declarations: [
    AppComponent,
    KeywordDirective,
    KeywordPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
