import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {Project} from "../../../core/models/project";
import { DatePipe } from "@angular/common";
import {LanguageChartComponent} from "./language-chart/language-chart.component";
import {FormatSizePipe} from "../../../core/pipes/size/format-size.pipe";

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [
    DatePipe,
    LanguageChartComponent,
    FormatSizePipe
],
    templateUrl: './project-card.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
    @Input()
    project!: Project;

}
