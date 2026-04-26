import { Component } from '@angular/core';
import { ExperienceService } from '../../../core/services/experience/experience.service';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-project-engineer-technord',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './project-engineer-technord.component.html',
  styleUrl: './project-engineer-technord.component.css'
})
export class ProjectEngineerTechnordComponent {
  constructor(private _experienceService: ExperienceService){
  }

  navigateBack(){
    this._experienceService.currentComponent = 'experience';
  }

}
