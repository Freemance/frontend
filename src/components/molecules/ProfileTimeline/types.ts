import { ReactElement } from 'react';

export interface IProfileTimeline {
  icon: ReactElement;
  items: IProfileTimelineItem[];
}

export interface IProfileTimelineItem {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}
