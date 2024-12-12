import {Component, ElementRef, HostListener, QueryList, Renderer2, ViewChildren, AfterViewInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'Portfolio';

  @ViewChildren('menuIcon') menuIcon!: QueryList<ElementRef>;
  @ViewChildren('navbar') navbar!: QueryList<ElementRef>;
  @ViewChildren('sections') sections!: QueryList<ElementRef>;
  @ViewChildren('navLinks') navLinks!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2, private router: Router) {
  }

  ngAfterViewInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateSections();
    });
  }

  updateSections() {
    this.sections = new QueryList<ElementRef>();
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      this.sections.reset([...this.sections.toArray(), new ElementRef(section)]);
    });
    this.sections.notifyOnChanges();
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
}
