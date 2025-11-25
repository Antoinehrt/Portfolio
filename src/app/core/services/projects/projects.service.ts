import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';
import { Project, ProjectLanguage } from '../../models/project';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private defaultImageUrl = '../../../assets/img/logos/Github_logo.png';

  constructor(private http: HttpClient) {}

  getPinnedRepositories(): Observable<Project[]> {
    const query = `
      query {
        user(login: "Antoinehrt") {
          pinnedItems(first: 6, types: [REPOSITORY]) {
            nodes {
               ... on Repository {
                name
                description
                url
                createdAt
                updatedAt
                diskUsage

                languages(first: 20) {
                  nodes {
                    name
                    color
                  }
                }

                repositoryTopics(first: 20) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    });

    return this.http.post('https://api.github.com/graphql', { query }, { headers })
      .pipe(
        map((response: any) => this.mapGitHubResponse(response)),
        catchError(this.handleError<Project[]>('getPinnedRepositories', []))
      );
  }

  private mapGitHubResponse(response: any): Project[] {
    const repos = response.data?.user?.pinnedItems?.nodes || [];

    return repos.map((repo: any) => {
      const languages: ProjectLanguage[] = repo.languages?.nodes?.map((lang: any) => ({
        name: lang.name,
        color: lang.color
      })) || [];

      const topics = repo.repositoryTopics?.nodes?.map((topicNode: any) =>
        topicNode.topic?.name
      ).filter(Boolean) || [];

      return {
        name: repo.name || 'Untitled Project',
        description: repo.description || 'No description available',
        repoUrl: repo.url || '',
        createdAt: new Date(repo.createdAt),
        updateAt: new Date(repo.updatedAt),
        size: repo.diskUsage || 0,
        languages,
        topics,
        imageUrl: this.defaultImageUrl,
        status: this.inferStatus(repo.updatedAt)
      } as Project;
    });
  }

  private inferStatus(updatedAt: string): Project['status'] {
    const lastUpdate = new Date(updatedAt);
    const now = new Date();
    const daysSinceUpdate = (now.getTime() - lastUpdate.getTime()) / (1000 * 3600 * 24);

    if (daysSinceUpdate <= 30) return 'active';
    if (daysSinceUpdate <= 180) return 'maintenance';
    if (daysSinceUpdate <= 365) return 'completed';
    return 'archived';
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      return of(result as T);
    };
  }
}
