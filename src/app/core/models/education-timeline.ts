/**
 * Represents an education timeline entry.
 */
export interface educationTimeline {
  name: string;  // Name of the timeline entry
  date: Date;    // Date
  description: string; // Description
  component: string; // Name of the associate Angular component
}
