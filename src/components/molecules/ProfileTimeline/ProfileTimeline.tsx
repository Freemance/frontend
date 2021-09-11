import React, { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  TextField,
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

  const [open, setOpen] = useState<boolean>(false);
  const [dialogTitle, setDialogTitle] = useState<String>('');

  useEffect(() => {
    if (dialogTitle != '') {
      setOpen(true);
    }
  }, [dialogTitle]);

  const handleClose = () => {
    setDialogTitle('');
    setOpen(false);
  };

  return (
    <>
      <Timeline align={isSm ? 'right' : 'alternate'}>
        {isEdit && (
          <TimelineItem>
            <TimelineOppositeContent></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style={{ padding: 0 }}>
                <IconButton size="small" onClick={() => setDialogTitle('Add')}>
                  <AddIcon />
                </IconButton>
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            {!isSm && <TimelineContent></TimelineContent>}
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
                  <IconButton
                    size="small"
                    style={{ color: 'white' }}
                    onClick={() => setDialogTitle('Edit')}
                  >
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
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField autoFocus margin="dense" label="Name" fullWidth />
              <TextField
                margin="dense"
                label="Description"
                fullWidth
                multiline
              />
            </Grid>
            <Grid item xs={6}>
              <TextField margin="dense" label="Start date" />
            </Grid>
            <Grid item xs={6}>
              <TextField margin="dense" label="End date" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          {dialogTitle === 'Edit' && (
            <Button
              className={classes.deleteButton}
              onClick={handleClose}
              color="primary"
            >
              Delete
            </Button>
          )}
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ProfileTimeline;
