import {Component} from '@angular/core';
import {EducationService} from "../../../core/services/education/education.service";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-high-school',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './high-school.component.html',
  styleUrl: './high-school.component.css'
})
export class HighSchoolComponent {

  constructor(private _educationService: EducationService) {
  }

  navigateBack() {
    this._educationService.currentComponent = "education"
  }
}
