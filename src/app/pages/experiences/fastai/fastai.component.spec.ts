import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FastaiComponent} from './fastai.component';

describe('FastaiComponent', () => {
  let component: FastaiComponent;
  let fixture: ComponentFixture<FastaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FastaiComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FastaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
