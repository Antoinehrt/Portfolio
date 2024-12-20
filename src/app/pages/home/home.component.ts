import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ExperiencesComponent} from "../experiences/experiences.component";
import {SkillsComponent} from "../skills/skills.component";
import {ContactMeComponent} from "../contact-me/contact-me.component";
import {ExperienceService} from "../../core/services/experience/experience.service";
import {HighSchoolComponent} from "../experiences/high-school/high-school.component";
import {UniversityComponent} from "../experiences/university/university.component";
import {UniversityCollegeComponent} from "../experiences/university-college/university-college.component";
import {InternshipComponent} from "../experiences/internship/internship.component";
import {AsyncPipe, NgSwitch, NgSwitchCase} from "@angular/common";
import {Observable} from "rxjs";
import {FastaiComponent} from "../experiences/fastai/fastai.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ExperiencesComponent,
    SkillsComponent,
    ContactMeComponent,
    HighSchoolComponent,
    UniversityComponent,
    UniversityCollegeComponent,
    InternshipComponent,
    AsyncPipe,
    NgSwitch,
    NgSwitchCase,
    FastaiComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnInit {
  birthDate: Date = new Date(2001, 7, 4);
  today: Date = new Date();
  myAge: number = 0;
  currentComponent$?: Observable<string>

  constructor(private _educationService: ExperienceService) {
    this.calculateAge();
  }

  ngOnInit(): void {
    this.calculateAge();
    this.currentComponent$ = this._educationService.currentComponent$;

  }

  ngAfterViewInit() {
  }

  calculateAge() {
    const diff = new Date().getTime() - this.birthDate.getTime();
    this.myAge = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }
}
