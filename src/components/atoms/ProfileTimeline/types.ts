import React, { ReactElement } from 'react';

export interface IProfileTimeline {
  nameLabel: string;
  institutionLabel: string;
  icon: ReactElement;
  items: IProfileTimelineItem[];
  onCreate: (newItem: IProfileTimelineItem) => void;
  onEdit: (editItem: IProfileTimelineItem, index: number) => void;
  isLoading: boolean;
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IProfileTimelineItem {
  id?: number;
  name: string;
  institution: string;
  startDate: Date;
  endDate: Date;
}
