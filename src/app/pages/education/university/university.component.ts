import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {EducationService} from "../../../core/services/education/education.service";

@Component({
  selector: 'app-university',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './university.component.html',
  styleUrl: './university.component.css'
})
export class UniversityComponent {
  constructor(private _educationService: EducationService) {
  }

  navigateBack() {
    this._educationService.currentComponent = "education"
  }
}
