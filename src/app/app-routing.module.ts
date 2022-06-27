import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CatalogListingComponent } from "./catalog-listing/catalog-listing.component";
import { SessionListingComponent } from "./session-listing/session-listing.component";

const routes: Routes = [
  { path: "", component: CatalogListingComponent },
  { path: "session", component: SessionListingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
