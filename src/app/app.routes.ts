import {RouterModule, Routes} from '@angular/router';
import {ModifyListItemComponent} from "./modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'modify', component: ModifyListItemComponent },
  { path: '**', component: PageNotFoundComponent } // Handle 404s
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
