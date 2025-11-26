import {Component, OnInit, OnDestroy} from '@angular/core';
import {ExperienceEntry} from "../../core/models/experience-entry";
import {CommonModule} from "@angular/common";
import {ExperienceService} from "../../core/services/experience/experience.service";
import {YearOnlyPipe} from "../../core/pipes/date/year-only.pipe";
import {StaticDataService} from "../../core/services/static-data/static-data.service";
import {Subject, takeUntil} from "rxjs";

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [
        CommonModule,
        YearOnlyPipe
    ],
    templateUrl: './experiences.component.html',
    styleUrl: './experiences.component.css'
})
export class ExperiencesComponent implements OnInit, OnDestroy {
    public experienceEntries: ExperienceEntry[] = []
    private destroy$ = new Subject<void>();

    constructor(private _experienceService: ExperienceService, private _staticDataService: StaticDataService) {
    }

    ngOnInit(): void {
        this._staticDataService.getStaticData().subscribe(
            (data: any) => {
                this.experienceEntry = data.experienceEntries;
            }
        );
    }

    navigateToDetail(item: ExperienceEntry, event?: KeyboardEvent | MouseEvent) {
        if (event && event instanceof KeyboardEvent) {
            if (event.key !== 'Enter' && event.key !== ' ') {
                return;
            }
            event.preventDefault();
        }

        if (item.component) {
            this._experienceService.currentComponent = item.component;
            document.getElementById('experience')?.scrollIntoView({behavior: 'smooth'});
        }
    }

}
