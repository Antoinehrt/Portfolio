export interface Project {
  name: string,
  description: string,
  imageUrl: string;
  langages: { name: string, color: string }[],
  topics: string[],
  repoUrl: string
}
