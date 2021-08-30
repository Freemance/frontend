import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@material-ui/lab';
import { School as SchoolIcon } from '@material-ui/icons';

import { useProfileTimelineStyle } from './ProfileTimeline.style';
import { IProfileTimeline } from './types';

const ProfileTimeline = ({ items }: IProfileTimeline) => {
  const classes = useProfileTimelineStyle();

  return (
    <Timeline align="alternate">
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Paper className={classes.paper} elevation={3}>
              <Typography variant="h6" component="h1">
                {item.name}
              </Typography>
              <Typography>{item.description}</Typography>
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            {!(index == items.length - 1) && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography>{`${item.startDate} - ${item.endDate}`}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ProfileTimeline;
