export interface ProjectLanguage {
  name: string;
  color: string;
  percentage?: number;
}

export interface Project {
  name: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
  createdAt: Date;
  updateAt: Date;
  size: number;
  languages: ProjectLanguage[];
  topics: string[];
  imageUrl: string;
  status?: 'active' | 'completed' | 'archived' | 'maintenance';
}
