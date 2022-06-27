import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppService } from "./app.service";

import { AppComponent } from './app.component';
import { CatalogListingComponent } from "./catalog-listing/catalog-listing.component";
import { SessionListingComponent } from "./session-listing/session-listing.component";

@NgModule({
  declarations: [
    AppComponent,
    CatalogListingComponent,
    SessionListingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
