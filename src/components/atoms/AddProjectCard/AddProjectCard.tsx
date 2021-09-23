import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import {
  AddCircleOutline as AddIcon,
  CloudUpload as UploadIcon,
} from '@material-ui/icons';
import Image from 'next/image';
import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { useAddProjectCardStyle } from './AddProjectCard.style';
import {
  IProfileCreatePortfolioInput,
  IProfileCreatePortfolioRes,
  PROFILE_CREATE_PORTFOLIO,
} from 'src/lib/apollo/portfolio';
import { PortfolioItemType } from 'src/context/state';
import { ActionType, useGlobalContext } from 'src/context';

const AddProjectCard = () => {
  const classes = useAddProjectCardStyle();

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));

  const { dispatch, state } = useGlobalContext();

  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [uploadPreview, setUploadPreview] = useState<string>(null);
  const [uploadFiles, setUploadFiles] = useState<FileList>(null);

  const onUploadPicture = ({ target: { validity, files } }: any) => {
    if (files && validity.valid) {
      setUploadPreview(URL.createObjectURL(files[0]));
      setUploadFiles(files);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [createProject] = useMutation<
    IProfileCreatePortfolioRes,
    IProfileCreatePortfolioInput
  >(PROFILE_CREATE_PORTFOLIO);

  const handleCreateProject = (newProject: PortfolioItemType) => {
    setIsLoading(true);
    createProject(
      uploadFiles
        ? {
            variables: {
              files: uploadFiles,
              input: newProject,
            },
          }
        : {
            variables: {
              input: newProject,
            },
          }
    )
      .then((res) => {
        const upProjects = [
          ...state.user.profile.portfolioItem,
          res.data.profileCreatePortfolio,
        ].sort(
          (a, b) =>
            new Date(b.endDate).getTime() - new Date(a.startDate).getTime()
        );
        dispatch({
          type: ActionType.UpdateProfilePortfolio,
          payload: upProjects,
        });
        setIsLoading(false);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <Grid item xs={12} sm={4} md={3}>
      {isXs ? (
        <Grid container justifyContent="center">
          <Card className={classes.addProjectCard}>
            <CardActionArea
              className={classes.addProjectCardAction}
              onClick={() => setOpen(true)}
            >
              <div className={classes.addProjectCardContent}>
                <AddIcon fontSize="large" />
              </div>
            </CardActionArea>
          </Card>
        </Grid>
      ) : (
        <Card className={classes.addProjectCard}>
          <CardActionArea
            className={classes.addProjectCardAction}
            onClick={() => setOpen(true)}
          >
            <div className={classes.addProjectCardContent}>
              <AddIcon fontSize="large" />
            </div>
          </CardActionArea>
        </Card>
      )}
      <Dialog open={open} onClose={handleClose}>
        <Formik
          initialValues={{
            name: '',
            description: '',
            startDate: '',
            endDate: '',
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Required'),
            description: Yup.string().required('Required'),
            startDate: Yup.date().required('Required'),
            endDate: Yup.date().required('Required'),
          })}
          onSubmit={(values) => {
            handleCreateProject({
              proyect: values.name,
              description: values.description,
              link: 'empty',
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
              <DialogTitle>Add project</DialogTitle>
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
                          {uploadPreview ? (
                            <CardMedia
                              className={classes.media}
                              image={uploadPreview}
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
    </Grid>
  );
};

export default AddProjectCard;
