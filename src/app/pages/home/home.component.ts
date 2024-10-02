import { Component } from '@angular/core';
import {ElementRef, HostListener, Renderer2, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

import {MatIcon} from '@angular/material/icon';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements AfterViewInit {
  @ViewChildren('menuIcon') menuIcon!: QueryList<ElementRef>;
  @ViewChildren('navbar') navbar!: QueryList<ElementRef>;
  @ViewChildren('sections') sections!: QueryList<ElementRef>;
  @ViewChildren('navLinks') navLinks!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Initialisation après le chargement des éléments du DOM
  }

  // Méthode pour gérer le clic sur l'icône du menu
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

  // Méthode pour gérer le scroll
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
}
