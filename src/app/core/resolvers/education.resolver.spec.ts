import {TestBed} from '@angular/core/testing';
import {ResolveFn} from '@angular/router';

import {educationResolver} from './education.resolver';

describe('educationResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => educationResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
