import { Component } from '@angular/core';
import {Technologies} from "../../core/models/technologies";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {
  technologies : Technologies[] = [
    {name: 'Backend', description: 'Languages & Frameworks: <i class="devicon-python-plain"></i>, Java, PHP, C#, C++, C, TypeScript <br> Frameworks: FastAPI, .NET Core, Flask, Node.js'},
    {name: 'Frontend', description: 'Core Technologies: HTML, CSS, JavaScript <br> Frameworks: Angular'},
    {name: 'DataBase', description: 'MySQL, MongoDB, SQL Server'},
    {name: 'Tools', description: 'Development & Collaboration: Docker, Git, GitHub, GitLab, Figma <br>' +
        'Methodologies: Agile (Scrum)<br>' +
        'System Design: UML, System Analysis'},
    {name: 'Cloud', description: 'AWS, Azure'},
    {name: 'Mobile', description: 'Android'},
  ];
}
