import { Component } from '@angular/core';
import {ExperienceService} from "../../../core/services/experience/experience.service";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-forem-dutch',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './forem-dutch.component.html',
  styleUrl: './forem-dutch.component.css'
})
export class ForemDutchComponent {

  constructor(private _educationService: ExperienceService) {
  }

  navigateBack() {
    this._educationService.currentComponent = "experience"
  }

}
