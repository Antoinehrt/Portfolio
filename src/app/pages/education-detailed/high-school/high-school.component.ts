import { Component } from '@angular/core';
import {EducationComponent} from "../../education/education.component";

@Component({
  selector: 'app-high-school',
  standalone: true,
    imports: [
        EducationComponent
    ],
  templateUrl: './high-school.component.html',
  styleUrl: './high-school.component.css'
})
export class HighSchoolComponent {

}
