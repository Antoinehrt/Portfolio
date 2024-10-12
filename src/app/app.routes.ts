import {Routes} from '@angular/router';
import {EducationComponent} from './pages/education/education.component';
import {HighSchoolComponent} from './pages/education-detailed/high-school/high-school.component';
import {HomeComponent} from "./pages/home/home.component";
import {UniversityComponent} from "./pages/education-detailed/university/university.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}, {
    path: 'education',
    component: EducationComponent,
    children: [
      { path: 'high-school', component: HighSchoolComponent },
      { path: 'university', component: UniversityComponent }
    ]
  },
  {path: '**', redirectTo: 'home'}
];
