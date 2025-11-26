import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';
import {Project, ProjectLanguage} from '../../models/project';
import {environment} from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    private defaultImageUrl = '../../../assets/img/logos/default_project_icon.png';
    private imageUrlCache: Record<string, string> = {};

    constructor(private http: HttpClient) {
    }

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
                homepageUrl
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

                readme: object(expression: "HEAD:README.md") {
                  ... on Blob {
                    text
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

        return this.http.post('https://api.github.com/graphql', {query}, {headers})
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

            const imageUrl = this.extractImageFromReadme(repo.name, repo.readme?.text);

            return {
                name: repo.name || 'Untitled Project',
                description: repo.description || 'No description available',
                repoUrl: repo.url || '',
                liveUrl: repo.homepageUrl || '',
                createdAt: new Date(repo.createdAt),
                updateAt: new Date(repo.updatedAt),
                size: repo.diskUsage || 0,
                languages,
                topics,
                imageUrl: imageUrl,
                status: this.inferStatus(repo.updatedAt)
            } as Project;
        });
    }

    private extractImageFromReadme(repoName: string, readmeContent?: string): string {
        const cacheKey = `image_${repoName}`;

        // Vérifier le cache
        if (this.imageUrlCache[cacheKey]) {
            return this.imageUrlCache[cacheKey];
        }

        if (!readmeContent) {
            this.imageUrlCache[cacheKey] = this.defaultImageUrl;
            return this.defaultImageUrl;
        }
        const markdownImageRegex = new RegExp('!\\[.*?\\]\\(([^)]+)\\)');
        const htmlImageRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/i;

        let imageUrl: string | null = null;

        const markdownMatch = readmeContent.match(markdownImageRegex);
        if (markdownMatch && markdownMatch[1]) {
            imageUrl = markdownMatch[1];
        }

        if (!imageUrl) {
            const htmlMatch = readmeContent.match(htmlImageRegex);
            if (htmlMatch && htmlMatch[1]) {
                imageUrl = htmlMatch[1];
            }
        }

        if (imageUrl) {
            if (imageUrl.startsWith('./') || imageUrl.startsWith('../') || !imageUrl.startsWith('http')) {
                const cleanPath = imageUrl.replace(/^\.?\//, '');
                imageUrl = `https://raw.githubusercontent.com/Antoinehrt/${repoName}/HEAD/${cleanPath}`;
            }

            this.imageUrlCache[cacheKey] = imageUrl;
            return imageUrl;
        }

        this.imageUrlCache[cacheKey] = this.defaultImageUrl;
        return this.defaultImageUrl;
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
