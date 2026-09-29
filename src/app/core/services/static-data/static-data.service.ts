import { inject, Injectable, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, Observable } from 'rxjs';
import { ExperienceEntry } from '../../models/experience-entry';

@Injectable({ providedIn: 'root' })
export class StaticDataService {
    private http = inject(HttpClient);
    private locale = inject(LOCALE_ID);

    getStaticData(): Observable<{ experienceEntries: ExperienceEntry[] }> {
        const localizedUrl = `assets/data/${this.locale}.json`;
        const fallbackUrl = `assets/data/en.json`;

        return this.http.get<{ experiences: Record<string, Omit<ExperienceEntry, 'component'>> }>(localizedUrl).pipe(
            catchError(() =>
                this.http.get<{ experiences: Record<string, Omit<ExperienceEntry, 'component'>> }>(fallbackUrl)
            ),
            map(data => {
                if (!data.experiences || typeof data.experiences !== 'object') {
                    throw new Error('Structure JSON invalide: propriete "experiences" manquante');
                }

                const experienceEntries: ExperienceEntry[] = Object.entries(data.experiences)
                    .filter(([key, value]) => {
                        if (!value || typeof value !== 'object') {
                            console.warn(`Entree invalide ignoree: ${key}`);
                            return false;
                        }
                        return true;
                    })
                    .map(([key, value]) => ({
                        ...value,
                        component: key as ExperienceEntry['component'],
                        date: new Date(value.date)
                    }))
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

                return { experienceEntries };
            })
        );
    }
}
