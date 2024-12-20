import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {ExperienceService} from "../../../core/services/experience/experience.service";

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

  constructor(private _educationService: ExperienceService) {
  }


  navigateBack() {
    this._educationService.currentComponent = "experience"
  }
}
