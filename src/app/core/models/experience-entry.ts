/**
 * Represents an experience timeline entry.
 */
export interface ExperienceEntry {
    type: 'education' | 'professional'; // Au lieu de string
    name: string;
    date: Date;
    description: string;
    component: 'high-school' | 'university' | 'university-college' | 'internship' | 'fastai' | 'forem-dutch';
}
