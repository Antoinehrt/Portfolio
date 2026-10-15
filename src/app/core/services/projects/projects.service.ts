import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';
import {Project} from '../../models/project';

type RawProject = Omit<Project, 'createdAt' | 'updateAt' | 'status'> & {
    createdAt: string;
    updateAt: string;
};

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    // Fichier généré au build par scripts/fetch-projects.mjs (aucun secret côté navigateur)
    private readonly dataUrl = 'assets/data/projects.json';

    constructor(private http: HttpClient) {
    }

    getPinnedRepositories(): Observable<Project[]> {
        return this.http.get<RawProject[]>(this.dataUrl).pipe(
            map(list => list.map(p => ({
                ...p,
                createdAt: new Date(p.createdAt),
                updateAt: new Date(p.updateAt),
                status: this.inferStatus(p.updateAt)
            }))),
            catchError(err => {
                console.error('getPinnedRepositories failed:', err);
                return of([] as Project[]);
            })
        );
    }

    private inferStatus(updatedAt: string): Project['status'] {
        const days = (Date.now() - new Date(updatedAt).getTime()) / (1000 * 3600 * 24);
        if (days <= 30) return 'active';
        if (days <= 180) return 'maintenance';
        if (days <= 365) return 'completed';
        return 'archived';
    }
}
