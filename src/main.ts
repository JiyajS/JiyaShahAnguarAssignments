import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {UserInformationComponent} from "./app/user-information/user-information.component";
import {provideRouter,Routes} from '@angular/router';
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {UserInformationListComponent} from "./app/user-information-list/user-information-list.component";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataServiceService} from "./app/services/in-memory-data-service.service";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom, isDevMode} from "@angular/core";
import {delay} from "rxjs";
import { provideServiceWorker } from '@angular/service-worker';


const routes: Routes = [
  {path: 'users', component: UserInformationComponent },
  {path: 'users/:Id',loadComponent:() =>
      import('./app/user-information/user-information.component').then(m=> m.UserInformationComponent)},
  {path: 'modifyListItem', loadComponent:() =>
      import('./app/modify-list-item/modify-list-item.component').then(m=> m.ModifyListItemComponent)},
  {path: 'modifyListItem/:id', loadComponent:() =>
      import('./app/modify-list-item/modify-list-item.component').then(m=> m.ModifyListItemComponent)},
  {path: '**', component: PageNotFoundComponent},
  { path: '', redirectTo: '/users', pathMatch: 'full' }
]

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataServiceService, {delay:1000
    })), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ],
}).catch((err) => console.error(err))
