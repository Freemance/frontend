import React from 'react';
import { Paper, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@material-ui/lab';

import { useProfileTimelineStyle } from './ProfileTimeline.style';
import { IProfileTimeline } from './types';

const ProfileTimeline = ({ icon, items }: IProfileTimeline) => {
  const classes = useProfileTimelineStyle();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Timeline align={isSm ? 'right' : 'alternate'}>
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Paper className={classes.paper} elevation={1}>
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="subtitle1">{item.description}</Typography>
              {isSm && (
                <Typography variant="subtitle2">{`${item.startDate} - ${item.endDate}`}</Typography>
              )}
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">{icon}</TimelineDot>
            {!(index == items.length - 1) && <TimelineConnector />}
          </TimelineSeparator>
          {!isSm && (
            <TimelineContent>
              <Typography>{`${item.startDate} - ${item.endDate}`}</Typography>
            </TimelineContent>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ProfileTimeline;
