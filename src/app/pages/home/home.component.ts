import {Component, OnInit} from '@angular/core';
import {Renderer2, AfterViewInit} from '@angular/core';

import {MatIcon} from '@angular/material/icon';
import {NgOptimizedImage} from "@angular/common";
import {EducationComponent} from "../education/education.component";
import {TechnologiesComponent} from "../technologies/technologies.component";
import {ProjectsComponent} from "../projects/projects.component";
import {ContactMeComponent} from "../contact-me/contact-me.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIcon,
    NgOptimizedImage,
    EducationComponent,
    TechnologiesComponent,
    ProjectsComponent,
    ContactMeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit, OnInit {
  pictureFilePath: string = '../../../assets/images/profile.jpg';

  birthDate: Date = new Date(2001, 7, 4);

  today: Date = new Date();

   myAge: number = 0;

  constructor(private renderer: Renderer2) {
    this.calculateAge();
  }

  ngOnInit(): void {
        this.calculateAge();
    }

  ngAfterViewInit() {
  }

  calculateAge() {
    this.myAge = this.today.getFullYear() - this.birthDate.getFullYear();
    if (this.today.getMonth() < this.birthDate.getMonth() && this.today.getDate() < this.birthDate.getDate()) {
      this.myAge--;
    }
  }
}
