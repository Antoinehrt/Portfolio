import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {EducationService} from "../../../core/services/education/education.service";

@Component({
  selector: 'app-university-college',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './university-college.component.html',
  styleUrl: './university-college.component.css'
})
export class UniversityCollegeComponent {

  constructor(private _educationService: EducationService) {
  }


  navigateBack() {
    this._educationService.currentComponent = "education"
  }
}
