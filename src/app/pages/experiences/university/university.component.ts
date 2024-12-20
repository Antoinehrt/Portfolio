import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {ExperienceService} from "../../../core/services/experience/experience.service";

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
  constructor(private _educationService: ExperienceService) {
  }

  navigateBack() {
    this._educationService.currentComponent = "experience"
  }
}
