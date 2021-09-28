import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { CloudUpload as UploadIcon } from '@material-ui/icons';
import { useMutation } from '@apollo/client';
import Image from 'next/image';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useProjectCardStyle } from './ProjectCard.style';
import IProjectCard from './types';
import {
  IProfileDeletePortfolioInput,
  IProfileDeletePortfolioRes,
  IProfileUpdatePortfolioInput,
  IProfileUpdatePortfolioRes,
  PROFILE_DELETE_PORTFOLIO,
  PROFILE_UPDATE_PORTFOLIO,
} from 'src/lib/apollo/portfolio';
import { ActionType, useGlobalContext } from 'src/context';
import { PortfolioItemType } from 'src/context/state';
import { useProfileContext } from '@layouts/ProfileLayout';

const ProjectCard = ({ index, project }: IProjectCard) => {
  const classes = useProjectCardStyle();

  const { dispatch, state } = useGlobalContext();
  const { isEdit } = useProfileContext();

  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [uploadPreview, setUploadPreview] = useState<string>(null);
  const [uploadFiles, setUploadFiles] = useState<FileList>(null);

  const handleClose = () => {
    setOpen(false);
  };

  const [updateProject] = useMutation<
    IProfileUpdatePortfolioRes,
    IProfileUpdatePortfolioInput
  >(PROFILE_UPDATE_PORTFOLIO);

  const [deleteProject] = useMutation<
    IProfileDeletePortfolioRes,
    IProfileDeletePortfolioInput
  >(PROFILE_DELETE_PORTFOLIO);

  const handleUpdateProject = (editProject: PortfolioItemType) => {
    setIsLoading(true);
    updateProject(
      uploadFiles
        ? {
            variables: {
              files: uploadFiles,
              id: project.id,
              input: editProject,
            },
          }
        : {
            variables: {
              id: project.id,
              input: editProject,
            },
          }
    )
      .then((res) => {
        let upProjects = state.user.profile.portfolioItem
          .map((p) => p)
          .sort(
            (a, b) =>
              new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
          );
        upProjects = [
          ...upProjects.slice(0, index),
          res.data.profileUpdatePortfolio,
          ...upProjects.slice(index + 1),
        ].sort(
          (a, b) =>
            new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
        );
        dispatch({
          type: ActionType.UpdateProfilePortfolio,
          payload: upProjects,
        });
        setIsLoading(false);
        handleClose();
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleDeleteProject = () => {
    setIsLoading(true);
    deleteProject({
      variables: {
        id: project.id,
      },
    })
      .then((res) => {
        if (res.data.profileDeletePortfolio) {
          let upProjects = state.user.profile.portfolioItem
            .map((j) => j)
            .sort(
              (a, b) =>
                new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
            );
          upProjects = [
            ...upProjects.slice(0, index),
            ...upProjects.slice(index + 1),
          ].sort(
            (a, b) =>
              new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
          );
          setIsLoading(false);
          handleClose();
          dispatch({
            type: ActionType.UpdateProfilePortfolio,
            payload: upProjects,
          });
        } else {
          throw new Error('Failed to delete course');
        }
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const onUploadPicture = ({ target: { validity, files } }: any) => {
    if (files && validity.valid) {
      setUploadPreview(URL.createObjectURL(files[0]));
      setUploadFiles(files);
    }
  };

  return (
    <>
      <Grid item xs={12} sm={4} md={3}>
        <Grid container justifyContent="center">
          <Card className={classes.root}>
            <CardActionArea onClick={() => isEdit && setOpen(true)}>
              <CardMedia
                className={classes.media}
                image={
                  project.screenshts.length > 0
                    ? `${process.env.IMAGE_LINK}${
                        project.screenshts[project.screenshts.length - 1]
                      }`
                    : '/static/images/no-image.jpg'
                }
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.proyect}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <Formik
          initialValues={{
            name: project.proyect,
            description: project.description,
            startDate: new Date(project.startDate).toISOString().split('T')[0],
            endDate: new Date(project.endDate).toISOString().split('T')[0],
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
            startDate: Yup.date().required('Required'),
            endDate: Yup.date().required('Required'),
          })}
          onSubmit={(values) => {
            handleUpdateProject({
              proyect: values.name,
              description: values.description,
              startDate: values.startDate,
              endDate: values.endDate,
            });
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
              <DialogTitle>Edit project</DialogTitle>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={5}>
                    <Grid
                      container
                      spacing={2}
                      alignItems="center"
                      alignContent="center"
                      justifyContent="center"
                      direction="column"
                    >
                      <Grid item xs={12}>
                        <Card className={classes.dialogImageCard}>
                          {uploadPreview || project.screenshts.length > 0 ? (
                            <CardMedia
                              className={classes.mediaDialog}
                              image={
                                uploadPreview ||
                                `${process.env.IMAGE_LINK}${
                                  project.screenshts[
                                    project.screenshts.length - 1
                                  ]
                                }`
                              }
                            />
                          ) : (
                            <CardMedia className={classes.media}>
                              <Image
                                src="/static/images/no-image.jpg"
                                width={180}
                                height={180}
                                objectFit="contain"
                              />
                            </CardMedia>
                          )}
                        </Card>
                      </Grid>
                      <Grid item xs={12}>
                        <input
                          accept="image/*"
                          className={classes.imageInput}
                          id="upload-image-button"
                          multiple
                          type="file"
                          onChange={onUploadPicture}
                        />
                        <label htmlFor="upload-image-button">
                          <Button
                            variant="contained"
                            color="primary"
                            component="span"
                            startIcon={<UploadIcon />}
                          >
                            Upload
                          </Button>
                        </label>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={7}>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <TextField
                          autoFocus
                          margin="dense"
                          label="Name"
                          fullWidth
                          id="name"
                          name="name"
                          value={values.name}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          error={touched.name && Boolean(errors.name)}
                          onBlur={handleBlur}
                          helperText={touched.name && errors.name}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          margin="dense"
                          label="Description"
                          fullWidth
                          multiline
                          id="description"
                          name="description"
                          value={values.description}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          error={
                            touched.description && Boolean(errors.description)
                          }
                          onBlur={handleBlur}
                          helperText={touched.description && errors.description}
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          id="startDate"
                          name="startDate"
                          margin="dense"
                          label="Start date"
                          type="date"
                          fullWidth
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
                      <Grid item xs={12} md={6}>
                        <TextField
                          id="endDate"
                          name="endDate"
                          margin="dense"
                          label="End date"
                          type="date"
                          fullWidth
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
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button
                  className={classes.deleteButton}
                  onClick={handleDeleteProject}
                  color="primary"
                  disabled={isLoading}
                >
                  Delete
                </Button>
                <Button onClick={handleClose} color="primary">
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

export default ProjectCard;
