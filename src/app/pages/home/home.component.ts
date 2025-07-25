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
  birthDate: Date = new Date(2001, 6, 4);
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
    const today = new Date();

    let age: number = today.getFullYear() - this.birthDate.getFullYear();

    const hasHadBirthdayThisYear =
      today.getMonth() > this.birthDate.getMonth() ||
      (today.getMonth() === this.birthDate.getMonth() && today.getDate() >= this.birthDate.getDate());

    if (!hasHadBirthdayThisYear) {
      age--;
    }

    this.myAge = age;
  }

}
