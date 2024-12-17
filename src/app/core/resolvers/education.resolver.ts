import {inject} from '@angular/core';
import {StaticDataService} from '../services/static-data/static-data.service';
import {ResolveFn} from '@angular/router';
import {ExperienceEntry} from '../models/experience-entry';
import {map} from 'rxjs';

export const educationResolver: ResolveFn<{ experienceEntry: ExperienceEntry[] }> = (route, state) => {
  const staticDataService = inject(StaticDataService);
  console.log('Resolver triggered');

  return staticDataService.getStaticData().pipe(
    map(data => {
      console.log('Fetched static data in resolver:', data);
      return {experienceEntry: data.experienceEntries};
    }));
};
