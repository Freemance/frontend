export interface IProfileTimeline {
  items: IProfileTimelineItem[];
}

export interface IProfileTimelineItem {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
}
