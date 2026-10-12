import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideHttpClient} from '@angular/common/http';

import {ContactMeComponent} from './contact-me.component';

describe('ContactMeComponent', () => {
    let component: ContactMeComponent;
    let fixture: ComponentFixture<ContactMeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ContactMeComponent],
            providers: [provideHttpClient()]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ContactMeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
