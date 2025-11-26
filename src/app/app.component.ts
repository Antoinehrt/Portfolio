import {AfterViewInit, Component, ElementRef, HostListener, QueryList, Renderer2, ViewChildren} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
    title = 'Portfolio';
    currentYear: number = new Date().getFullYear();

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

    @HostListener('window:scroll')
    onScroll() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 150;

        sections.forEach(section => {
            const element = section as HTMLElement;
            const navLink = document.querySelector(`a[href="#${element.id}"]`);

            if (scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
                document.querySelectorAll('.navbar a').forEach(link => link.classList.remove('active'));
                navLink?.classList.add('active');
            }
        });
    }
}
