import {Component} from '@angular/core';
import {TimelineItem} from "../../core/models/timeline-item";
import {CommonModule, NgFor, NgForOf} from "@angular/common";
import {Router} from "@angular/router";

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
    {
      name: 'High School',
      date: new Date('2013'),
      description: 'I obtained my <b> CESS </b> in general education at Collège Saint-Stanislas, where I pursued a track in advanced sciences with English immersion. ' +
        'My curriculum also included Latin and English immersion, which allowed me to develop strong language and analytical skills.',
      component: 'high-school'
    },
    {
      name: 'University',
      date: new Date('2019'),
      description: 'I began a <b> Bachelor\'s degree in Computer Science </b> at the UCLouvain polytechnic school, where I studied for two years. ' +
        'Although I successfully passed most of my courses, I did not pass the ones related to mathematics and electricity.',
      component: 'university'
    },
    {
      name: 'University college',
      date: new Date('2021'),
      description: 'I earned a <b> Bachelor\'s degree in Computer Science, specializing in application development </b>, at HELHa in Mons. ' +
        'This program allowed me to gain deep technical skills and develop my expertise in programming and project management.',
      component: 'university-college'
    },
    {
      name: 'Internship',
      date: new Date('2024'),
      description: 'I completed a <b> 3-month internship at ETNIC in the R&D department</b>, where I participated in the development of a <b> RAG </b>. ' +
        'This internship enabled me to apply my theoretical knowledge in a professional context while working as part of a team on a concrete project.',
      component: 'internship'
    }
  ];

  constructor(private router: Router) {
  }

  navigateToDetail(item: TimelineItem) {
    this.router.navigate([`/education/${item.component}`]);
  }

}
