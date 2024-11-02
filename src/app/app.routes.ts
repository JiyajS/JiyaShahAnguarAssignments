import {provideRouter, RouterModule, Routes} from '@angular/router';
import {ModifyListItemComponent} from "./modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app.component";


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'modify', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
