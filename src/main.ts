import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {UserInformationComponent} from "./app/user-information/user-information.component";
import {provideRouter,Routes} from '@angular/router';
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";



const routes: Routes = [
  { path: 'user', component: UserInformationComponent },
  { path: 'users/:Id', component: UserInformationComponent },
  {path: 'modifyListItem', component: ModifyListItemComponent},
  {path: 'pageNotFound', component: PageNotFoundComponent}
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
