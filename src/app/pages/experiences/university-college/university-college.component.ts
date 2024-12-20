import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {ExperienceService} from "../../../core/services/experience/experience.service";

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

  constructor(private _educationService: ExperienceService) {
  }


  navigateBack() {
    this._educationService.currentComponent = "experience"
  }
}
