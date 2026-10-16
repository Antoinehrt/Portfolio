import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {PrivacyComponent} from "./pages/privacy/privacy.component";

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: '404-not-found', component: NotFoundComponent},
    {path: '**', redirectTo: '404-not-found'}
];
