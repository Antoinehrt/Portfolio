import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {EducationService} from "../../../core/services/education/education.service";

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
  constructor(private _educationService: EducationService) {
  }

  navigateBack() {
    this._educationService.currentComponent = "education"
  }
}
