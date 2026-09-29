import {Component, ChangeDetectionStrategy} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {ExperienceService} from "../../../core/services/experience/experience.service";

@Component({
    selector: 'app-university-college',
    standalone: true,
    imports: [
        MatIcon
    ],
    templateUrl: './university-college.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './university-college.component.css'
})
export class UniversityCollegeComponent {

    constructor(private _experienceService: ExperienceService) {
    }


    navigateBack() {
        this._experienceService.currentComponent = "experience"
    }
}
