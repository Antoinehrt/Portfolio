import {Routes} from '@angular/router';
import {EducationComponent} from './pages/education/education.component';
import {HomeComponent} from "./pages/home/home.component";
import {educationResolver} from "./core/resolvers/education.resolver";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'home'}
];
