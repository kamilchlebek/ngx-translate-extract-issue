import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { TestPipe } from './test.pipe';
import { TestComponent } from './test/test.component'

@NgModule({
  declarations: [
    AppComponent,
    TestPipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
