import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Project} from "../../../core/models/project";
import {NgForOf, NgIf, DatePipe} from "@angular/common";
import {LanguageChartComponent} from "./language-chart/language-chart.component";
import {FormatSizePipe} from "../../../core/pipes/size/format-size.pipe";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    DatePipe,
    LanguageChartComponent,
    FormatSizePipe
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input()
  project!: Project;

}
