import {Component} from '@angular/core';
import {DatePipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {ProtectedEmailComponent} from "../../core/shared/protected-email/protected-email.component";

@Component({
    selector: 'app-privacy',
    standalone: true,
    imports: [
        RouterLink,
        MatIcon,
        DatePipe,
        ProtectedEmailComponent
    ],
    templateUrl: './privacy.component.html',
    styleUrl: './privacy.component.css'
})
export class PrivacyComponent {
    readonly lastUpdated = new Date(2026, 9, 12);
}
