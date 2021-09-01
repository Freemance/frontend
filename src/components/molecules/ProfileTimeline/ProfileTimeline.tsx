import React from 'react';
import {
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@material-ui/lab';
import { Add as AddIcon, Edit as EditIcon } from '@material-ui/icons';

import { useProfileTimelineStyle } from './ProfileTimeline.style';
import { IProfileTimeline } from './types';
import { useProfileContext } from '@layouts/ProfileLayout';

const ProfileTimeline = ({ icon, items }: IProfileTimeline) => {
  const classes = useProfileTimelineStyle();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const { isEdit } = useProfileContext();

  return (
    <Timeline align={isSm ? 'right' : 'alternate'}>
      {isEdit && (
        <TimelineItem>
          <TimelineOppositeContent></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot style={{ padding: 0 }}>
              <IconButton size="small">
                <AddIcon />
              </IconButton>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent></TimelineContent>
        </TimelineItem>
      )}
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
            {isEdit ? (
              <TimelineDot color="primary" style={{ padding: 0 }}>
                <IconButton size="small" style={{ color: 'white' }}>
                  <EditIcon />
                </IconButton>
              </TimelineDot>
            ) : (
              <TimelineDot color="primary">{icon}</TimelineDot>
            )}
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
