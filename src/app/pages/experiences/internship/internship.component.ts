import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {ExperienceService} from "../../../core/services/experience/experience.service";

@Component({
  selector: 'app-internship',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './internship.component.html',
  styleUrl: './internship.component.css'
})
export class InternshipComponent {
  constructor(private _educationService: ExperienceService) {
  }

  navigateBack() {
    this._educationService.currentComponent = "experience"
  }
}
