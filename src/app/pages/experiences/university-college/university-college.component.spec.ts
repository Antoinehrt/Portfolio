import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UniversityCollegeComponent} from './university-college.component';

describe('UniversityCollegeComponent', () => {
  let component: UniversityCollegeComponent;
  let fixture: ComponentFixture<UniversityCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniversityCollegeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UniversityCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
