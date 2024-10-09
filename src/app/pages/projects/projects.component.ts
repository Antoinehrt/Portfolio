import { Component } from '@angular/core';
import {Project} from "../../core/models/project";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Project 1',
      description: ' \'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\\n\' +\n' +
        '        \'      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\\n\' +\n' +
        '        \'      ex ea commodo consequat',
      imageUrl: '../../../assets/img/square_profile_pic.jpg'
    },
    {
      name: 'Project 2',
      description: ' \'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\\n\' +\n' +
        '        \'      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\\n\' +\n' +
        '        \'      ex ea commodo consequat',
      imageUrl: '../../../assets/img/square_profile_pic.jpg'
    },
    {
      name: 'Project 3',
      description: ' \'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\\n\' +\n' +
        '        \'      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\\n\' +\n' +
        '        \'      ex ea commodo consequat',
      imageUrl: '../../../assets/img/square_profile_pic.jpg'
    }
  ];

}
