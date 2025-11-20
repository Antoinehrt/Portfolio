import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForemDutchComponent } from './forem-dutch.component';

describe('ForemDutchComponent', () => {
  let component: ForemDutchComponent;
  let fixture: ComponentFixture<ForemDutchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForemDutchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForemDutchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
