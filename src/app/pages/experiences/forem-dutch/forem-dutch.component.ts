import {Component, ChangeDetectionStrategy} from '@angular/core';
import {ExperienceService} from "../../../core/services/experience/experience.service";
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: 'app-forem-dutch',
    standalone: true,
    imports: [
        MatIcon
    ],
    templateUrl: './forem-dutch.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './forem-dutch.component.css'
})
export class ForemDutchComponent {

    constructor(private _experienceService: ExperienceService) {
    }

    navigateBack() {
        this._experienceService.currentComponent = "experience"
    }

}
