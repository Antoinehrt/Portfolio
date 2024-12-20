/**
 * Represents an experience timeline entry.
 */
export interface ExperienceEntry {
  type: string; // Type of the event (experience or work)
  name: string;  // Name of the timeline entry
  date: Date;    // Date
  description: string; // Description
  component: string; // Name of the associate Angular component
}
