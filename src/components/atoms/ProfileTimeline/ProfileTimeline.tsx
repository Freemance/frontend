import React, { useEffect, useState } from 'react';
import {
  Button,
  CircularProgress,
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
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useProfileTimelineStyle } from './ProfileTimeline.style';
import { IProfileTimeline } from './types';
import { useProfileContext } from '@layouts/ProfileLayout';

const ProfileTimeline = ({
  nameLabel,
  institutionLabel,
  icon,
  items,
  onCreate,
  onEdit,
  isLoading,
  openDialog,
  setOpenDialog,
}: IProfileTimeline) => {
  const classes = useProfileTimelineStyle();

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const { isEdit } = useProfileContext();

  const [dialogUse, setDialogUse] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number>(-1);

  useEffect(() => {
    if (dialogUse != '') {
      setOpenDialog(true);
    }
  }, [dialogUse]);

  useEffect(() => {
    if (!openDialog) {
      setDialogUse('');
      setEditIndex(-1);
    }
  }, [openDialog]);

  useEffect(() => {
    if (editIndex >= 0) {
      setDialogUse('Edit');
    }
  }, [editIndex]);

  const handleCancel = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Timeline align={isSm ? 'right' : 'alternate'}>
        {isEdit && (
          <TimelineItem>
            <TimelineOppositeContent></TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style={{ padding: 0 }}>
                <IconButton size="small" onClick={() => setDialogUse('Add')}>
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
                <Typography variant="subtitle1">{item.institution}</Typography>
                {isSm && (
                  <Typography variant="subtitle2">{`${item.startDate.getFullYear()} - ${item.endDate.getFullYear()}`}</Typography>
                )}
              </Paper>
            </TimelineOppositeContent>
            <TimelineSeparator>
              {isEdit ? (
                <TimelineDot color="primary" style={{ padding: 0 }}>
                  <IconButton
                    size="small"
                    style={{ color: 'white' }}
                    onClick={() => setEditIndex(index)}
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
                <Typography>{`${item.startDate.getFullYear()} - ${item.endDate.getFullYear()}`}</Typography>
              </TimelineContent>
            )}
          </TimelineItem>
        ))}
      </Timeline>
      <Dialog open={openDialog} onClose={handleCancel}>
        <Formik
          initialValues={{
            name: editIndex >= 0 ? items[editIndex].name : '',
            institution: editIndex >= 0 ? items[editIndex].institution : '',
            startDate:
              editIndex >= 0
                ? items[editIndex].startDate.toISOString().split('T')[0]
                : '',
            endDate:
              editIndex >= 0
                ? items[editIndex].endDate.toISOString().split('T')[0]
                : '',
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Required'),
            institution: Yup.string().required('Required'),
            startDate: Yup.date().required('Required'),
            endDate: Yup.date().required('Required'),
          })}
          onSubmit={(values) => {
            if (dialogUse === 'Add') {
              onCreate({
                name: values.name,
                institution: values.institution,
                startDate: new Date(values.startDate),
                endDate: new Date(values.endDate),
              });
            }
            if (dialogUse === 'Edit') {
              onEdit(
                {
                  id: items[editIndex].id,
                  name: values.name,
                  institution: values.institution,
                  startDate: new Date(values.startDate),
                  endDate: new Date(values.endDate),
                },
                editIndex
              );
            }
          }}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            submitForm,
          }) => (
            <>
              <DialogTitle>{dialogUse}</DialogTitle>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      id="name"
                      name="name"
                      autoFocus
                      margin="dense"
                      label={nameLabel}
                      fullWidth
                      value={values.name}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      error={touched.name && Boolean(errors.name)}
                      onBlur={handleBlur}
                      helperText={touched.name && errors.name}
                    />
                    <TextField
                      id="institution"
                      name="institution"
                      margin="dense"
                      label={institutionLabel}
                      fullWidth
                      multiline
                      value={values.institution}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      error={touched.institution && Boolean(errors.institution)}
                      onBlur={handleBlur}
                      helperText={touched.institution && errors.institution}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="startDate"
                      name="startDate"
                      margin="dense"
                      label="Start date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={values.startDate}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      error={touched.startDate && Boolean(errors.startDate)}
                      onBlur={handleBlur}
                      helperText={touched.startDate && errors.startDate}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="endDate"
                      name="endDate"
                      margin="dense"
                      label="End date"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={values.endDate}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      error={touched.endDate && Boolean(errors.endDate)}
                      onBlur={handleBlur}
                      helperText={touched.endDate && errors.endDate}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                {dialogUse === 'Edit' && (
                  <Button
                    className={classes.deleteButton}
                    onClick={handleCancel}
                    color="primary"
                    disabled={isLoading}
                  >
                    Delete
                  </Button>
                )}
                <Button onClick={handleCancel} color="primary">
                  Cancel
                </Button>
                <Button
                  onClick={submitForm}
                  color="primary"
                  variant="outlined"
                  disabled={isLoading}
                >
                  Save
                  {isLoading && (
                    <CircularProgress className={classes.spinner} size={20} />
                  )}
                </Button>
              </DialogActions>
            </>
          )}
        </Formik>
      </Dialog>
    </>
  );
};

export default ProfileTimeline;
