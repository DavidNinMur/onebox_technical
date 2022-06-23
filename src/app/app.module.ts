import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppService } from "./app.service";

import { CatalogListingComponent } from "./catalog-listing/catalog-listing.component";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogListingComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
