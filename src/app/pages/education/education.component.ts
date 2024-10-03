import {Component} from '@angular/core';
import {TimelineItem} from "../../core/models/timeline-item";
import {CommonModule, NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    NgForOf,
    NgFor,
    CommonModule
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  timelineItems: TimelineItem[] = [
    {name: 'High School', date: new Date('2013'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
        '      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n' +
        '      ex ea commodo consequat.'},
    {name: 'University', date: new Date('2019'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
        '      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n' +
        '      ex ea commodo consequat.'},
    {name: 'University college', date: new Date('2021'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
        '      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n' +
        '      ex ea commodo consequat.'},
    {name: 'Internship', date: new Date('2024'), description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n' +
        '      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n' +
        '      ex ea commodo consequat.'}
  ];

}
