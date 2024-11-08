import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {UserInformationComponent} from "./app/user-information/user-information.component";
import {provideRouter,Routes} from '@angular/router';
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {UserInformationListComponent} from "./app/user-information-list/user-information-list.component";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataServiceService} from "./app/in-memory-data-service.service";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {delay} from "rxjs";


const routes: Routes = [
  // {path:'', redirectTo: '/users', pathMatch: 'full'},
  {path: 'users', component: UserInformationComponent },
  {path: 'users/:Id', component: UserInformationListComponent },
  {path: 'modifyListItem', component: ModifyListItemComponent},
  {path: 'modifyListItem/:id', component: ModifyListItemComponent},
  {path: '**', component: PageNotFoundComponent},
  { path: '', redirectTo: '/users', pathMatch: 'full' }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataServiceService, {delay:1000}))
  ],
}).catch((err) => console.error(err))
