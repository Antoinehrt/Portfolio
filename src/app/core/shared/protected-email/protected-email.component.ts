import {Component} from '@angular/core';
import {getContactEmail} from "../../utils/contact-email";


@Component({
    selector: 'app-protected-email',
    standalone: true,
    template: `
        <span aria-live="polite">
            @if (address) {
                <a [href]="'mailto:' + address">{{ address }}</a>
            } @else {
                <button type="button" class="reveal" (click)="reveal($event)"
                        i18n="@@email.reveal">Show email address
                </button>
            }
        </span>
    `,
    styles: [`
        .reveal {
            background: none;
            border: 1px solid var(--main-color);
            color: var(--main-color);
            border-radius: 1rem;
            padding: 0.2rem 1rem;
            font-size: inherit;
            cursor: pointer;
            transition: 0.3s ease-in-out;
        }

        .reveal:hover, .reveal:focus-visible {
            background: var(--main-color);
            color: #000;
        }

        a {
            color: var(--main-color);
            text-decoration: underline;
        }
    `]
})
export class ProtectedEmailComponent {
    address = '';

    reveal(event: Event): void {
        if (!event.isTrusted) return;
        this.address = getContactEmail();
    }
}
