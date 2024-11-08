import {Routes} from '@angular/router';
import {EducationComponent} from './pages/education/education.component';
import {HomeComponent} from "./pages/home/home.component";
import {HighSchoolComponent} from "./pages/education/high-school/high-school.component";
import {UniversityComponent} from "./pages/education/university/university.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'education', component: EducationComponent},
  {path: 'education/high-school', component: HighSchoolComponent},
  {path: 'education/university', component: UniversityComponent},
  {path: '**', redirectTo: 'home'}
];
