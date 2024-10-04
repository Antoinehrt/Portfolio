import {Component, OnInit} from '@angular/core';
import {ElementRef, HostListener, Renderer2, ViewChildren, QueryList, AfterViewInit} from '@angular/core';

import {MatIcon} from '@angular/material/icon';
import {NgOptimizedImage} from "@angular/common";
import {EducationComponent} from "../education/education.component";
import {ServicesComponent} from "../services/services.component";
import {ProjectsComponent} from "../projects/projects.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIcon,
    NgOptimizedImage,
    EducationComponent,
    ServicesComponent,
    ProjectsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit, OnInit {
  pictureFilePath: string = '../../../assets/images/profile.jpg';

  birthDate: Date = new Date(2001, 7, 4);

  today: Date = new Date();

   myAge: number = 0;

  @ViewChildren('menuIcon') menuIcon!: QueryList<ElementRef>;
  @ViewChildren('navbar') navbar!: QueryList<ElementRef>;
  @ViewChildren('sections') sections!: QueryList<ElementRef>;
  @ViewChildren('navLinks') navLinks!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {
    this.calculateAge();
  }

  ngOnInit(): void {
        this.calculateAge();
    }

  ngAfterViewInit() {
  }

  toggleMenu() {
    const menuIcon = this.menuIcon.first.nativeElement;
    const navbar = this.navbar.first.nativeElement;

    if (menuIcon.classList.contains('bx-x')) {
      this.renderer.removeClass(menuIcon, 'bx-x');
    } else {
      this.renderer.addClass(menuIcon, 'bx-x');
    }

    if (navbar.classList.contains('active')) {
      this.renderer.removeClass(navbar, 'active');
    } else {
      this.renderer.addClass(navbar, 'active');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const top = window.scrollY;

    this.sections.forEach((sec: ElementRef) => {
      const section = sec.nativeElement;
      const offset = section.offsetTop - 150;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (top >= offset && top < offset + height) {
        this.navLinks.forEach((link: ElementRef) => {
          this.renderer.removeClass(link.nativeElement, 'active');
          if (link.nativeElement.getAttribute('href') === `#${id}`) {
            this.renderer.addClass(link.nativeElement, 'active');
          }
        });
      }
    });
  }

  calculateAge() {
    this.myAge = this.today.getFullYear() - this.birthDate.getFullYear();
    if (this.today.getMonth() < this.birthDate.getMonth() && this.today.getDate() < this.birthDate.getDate()) {
      this.myAge--;
    }
  }
}
