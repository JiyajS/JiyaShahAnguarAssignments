import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {UserInformationComponent} from "./app/user-information/user-information.component";
import {provideRouter,Routes} from '@angular/router';
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {UserInformationListComponent} from "./app/user-information-list/user-information-list.component";



const routes: Routes = [
  // {path:'', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UserInformationComponent },
  {path: 'users/:Id', component: UserInformationListComponent },
  {path: 'modifyListItem', component: ModifyListItemComponent},
  {path: 'modifyListItem/:id', component: ModifyListItemComponent},
  {path: '**', component: PageNotFoundComponent}
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
