import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {Project} from "../../core/models/project";
import {NgForOf, NgIf} from "@angular/common";
import {ProjectCardComponent} from "./project-card/project-card.component";
import {ProjectsService} from "../../core/services/projects/projects.service";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  projects: Project[] = [];
  isLoading = true;
  error: string | null = null;

  @ViewChild('carouselContainer', { static: false }) carouselContainer!: ElementRef;
  currentIndex = 0;
  canScrollLeft = false;
  canScrollRight = true;

  readonly cardWidth = 450;
  readonly cardsPerView = {
    desktop: 3,
    tablet: 2,
    mobile: 1
  };

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.loadProjects();
  }

  ngAfterViewInit() {
    this.updateNavigationState();

    window.addEventListener('resize', () => this.updateNavigationState());
  }

  private loadProjects(): void {
    this.isLoading = true;
    this.error = null;

    this.projectsService.getPinnedRepositories().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.isLoading = false;
        setTimeout(() => this.updateNavigationState(), 100);
      },
      error: (err) => {
        console.error('Error loading projects:', err);
        this.error = 'Failed to load projects. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  retryLoading(): void {
    this.loadProjects();
  }


  scrollLeft(): void {
    if (!this.carouselContainer) return;

    const container = this.carouselContainer.nativeElement;
    const scrollAmount = this.getScrollAmount();

    container.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });

    setTimeout(() => this.updateNavigationState(), 300);
  }

  scrollRight(): void {
    if (!this.carouselContainer) return;

    const container = this.carouselContainer.nativeElement;
    const scrollAmount = this.getScrollAmount();

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });

    setTimeout(() => this.updateNavigationState(), 300);
  }

  private getScrollAmount(): number {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) return 350;
    if (screenWidth <= 1024) return 470;
    return 490;
  }

  private updateNavigationState(): void {
    if (!this.carouselContainer) return;

    const container = this.carouselContainer.nativeElement;
    this.canScrollLeft = container.scrollLeft > 0;
    this.canScrollRight = container.scrollLeft < (container.scrollWidth - container.clientWidth - 10);
  }

  onScroll(): void {
    this.updateNavigationState();
  }
}
