import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CssHighlighterComponent } from './shared/components/css-highlighter/css-highlighter.component';
import { CssBasicsDirective } from './shared/directives/css-basics.directive';
import { CssRendrerDirective } from './shared/directives/css-rendrer.directive';
import { ToLowerCaseDirective } from './shared/directives/to-lower-case.directive';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DropDownDirective } from './shared/directives/drop-down.directive';

@NgModule({
  declarations: [
    AppComponent,
    CssHighlighterComponent,
    CssBasicsDirective,
    CssRendrerDirective,
    ToLowerCaseDirective,
    NavbarComponent,
    DropDownDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }