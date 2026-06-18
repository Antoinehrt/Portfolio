export interface ExperienceEntry {
    type: 'education' | 'professional';
    name: string;
    date: Date;
    description: string;
    component:
        | 'high-school'
        | 'university'
        | 'university-college'
        | 'internship'
        | 'fastai'
        | 'forem-dutch'
        | 'project-engineer-technord';
}
