import {Component, OnInit} from '@angular/core';
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
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.isLoading = true;
    this.error = null;
    
    this.projectsService.getPinnedRepositories().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.isLoading = false;
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
}
