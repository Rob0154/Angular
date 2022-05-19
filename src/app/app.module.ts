import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HederComponent } from './comp/heder/heder.component';
import { SideNavComponent } from './comp/side-nav/side-nav.component';
import { DivComponent } from './comp/div/div.component';

@NgModule({
  declarations: [
    AppComponent,
    HederComponent,
    SideNavComponent,
    DivComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
