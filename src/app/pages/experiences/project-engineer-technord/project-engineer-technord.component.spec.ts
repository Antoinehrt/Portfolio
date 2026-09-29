import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEngineerTechnordComponent } from './project-engineer-technord.component';

describe('ProjectEngineerTechnordComponent', () => {
  let component: ProjectEngineerTechnordComponent;
  let fixture: ComponentFixture<ProjectEngineerTechnordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectEngineerTechnordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectEngineerTechnordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
