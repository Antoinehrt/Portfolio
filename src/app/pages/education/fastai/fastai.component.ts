import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {EducationService} from "../../../core/services/education/education.service";

@Component({
  selector: 'app-fastai',
  standalone: true,
    imports: [
        MatIcon
    ],
  templateUrl: './fastai.component.html',
  styleUrl: './fastai.component.css'
})
export class FastaiComponent {

  constructor(private _educationService: EducationService) {
  }


  navigateBack() {
    this._educationService.currentComponent = "education"
  }
}
