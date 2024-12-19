import {Component, OnInit} from '@angular/core';
import {ExperienceEntry} from "../../core/models/experience-entry";
import {CommonModule, NgFor, NgForOf} from "@angular/common";
import {EducationService} from "../../core/services/education/education.service";
import {YearOnlyPipe} from "../../core/pipes/year-only.pipe";
import {StaticDataService} from "../../core/services/static-data/static-data.service";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    NgForOf,
    NgFor,
    CommonModule,
    YearOnlyPipe
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  public experienceEntry: ExperienceEntry[] = []

  constructor(private _educationService: EducationService, private _staticDataService: StaticDataService) {
  }

  ngOnInit(): void {
    this._staticDataService.getStaticData().subscribe(
      (data: any) => {
        this.experienceEntry = data.experienceEntries;
      }
    );
  }

  navigateToDetail(item: ExperienceEntry) {
    if (item.component) {
      this._educationService.currentComponent = item.component;
      document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
