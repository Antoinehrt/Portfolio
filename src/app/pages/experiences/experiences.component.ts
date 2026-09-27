import {Component, OnInit, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import {ExperienceEntry} from "../../core/models/experience-entry";

import {ExperienceService} from "../../core/services/experience/experience.service";
import {YearOnlyPipe} from "../../core/pipes/date/year-only.pipe";
import {StaticDataService} from "../../core/services/static-data/static-data.service";
import {Subject, takeUntil} from "rxjs";

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [
    YearOnlyPipe
],
    templateUrl: './experiences.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './experiences.component.css'
})
export class ExperiencesComponent implements OnInit, OnDestroy {
    public experienceEntries: ExperienceEntry[] = [];
    public isLoading = true;
    public hasError = false;
    private destroy$ = new Subject<void>();

    constructor(private _experienceService: ExperienceService, private _staticDataService: StaticDataService) {}

    ngOnInit(): void {
        this._staticDataService.getStaticData()
            .pipe(takeUntil(this.destroy$))
            .subscribe({
                next: (data: { experienceEntries: ExperienceEntry[] }) => {
                    this.experienceEntries = data.experienceEntries;
                    this.isLoading = false;
                },
                error: (error) => {
                    console.error('Erreur lors du chargement des donnees d experience:', error);
                    this.hasError = true;
                    this.isLoading = false;
                }
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
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
