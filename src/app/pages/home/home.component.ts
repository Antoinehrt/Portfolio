import {AfterViewInit, Component, OnInit} from '@angular/core';
import {EducationComponent} from "../education/education.component";
import {TechnologiesComponent} from "../technologies/technologies.component";
import {ContactMeComponent} from "../contact-me/contact-me.component";
import {EducationService} from "../../core/services/education.service";
import {HighSchoolComponent} from "../education/high-school/high-school.component";
import {UniversityComponent} from "../education/university/university.component";
import {UniversityCollegeComponent} from "../education/university-college/university-college.component";
import {InternshipComponent} from "../education/internship/internship.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EducationComponent,
    TechnologiesComponent,
    ContactMeComponent,
    HighSchoolComponent,
    UniversityComponent,
    UniversityCollegeComponent,
    InternshipComponent,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnInit {
  birthDate: Date = new Date(2001, 7, 4);
  today: Date = new Date();
  myAge: number = 0;
  componentToDisplay: string = 'education';

  constructor(private _educationService: EducationService) {
    this.calculateAge();
  }

  ngOnInit(): void {
    this.calculateAge();
    this.componentToDisplay = this._educationService.componentToDisplay;
    this._educationService.componentToDisplay$.subscribe(component => {
      this.componentToDisplay = component;
    });
    console.log('init' + this.componentToDisplay)
  }

  ngAfterViewInit() {
  }

  calculateAge() {
    const diff = new Date().getTime() - this.birthDate.getTime();
    this.myAge = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }
}
