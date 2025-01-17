import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: '404-not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '404-not-found'}
];
