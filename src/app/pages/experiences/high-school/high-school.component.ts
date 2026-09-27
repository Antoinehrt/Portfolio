import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ExperienceService} from "../../../core/services/experience/experience.service";
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: 'app-high-school',
    standalone: true,
    imports: [
        MatIcon
    ],
    templateUrl: './high-school.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './high-school.component.css'
})
export class HighSchoolComponent {

    constructor(private _experienceService: ExperienceService) {
    }

    navigateBack() {
        this._experienceService.currentComponent = "experience"
    }
}
