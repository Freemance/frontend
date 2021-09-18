import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

import { useProjectCardStyle } from './ProjectCard.style';
import IProjectCard from './types';

const ProjectCard = ({ title, description, imageUrl }: IProjectCard) => {
  const classes = useProjectCardStyle();

  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid item xs={12} sm={4} md={3}>
        <Grid container justifyContent="center">
          <Card className={classes.root}>
            <CardActionArea onClick={() => setOpen(true)}>
              <CardMedia className={classes.media} image={imageUrl} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit project</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Card className={classes.dialogImageCard}>
                <CardActionArea>
                  <CardMedia className={classes.media} image={imageUrl} />
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={7}>
              <TextField autoFocus margin="dense" label="Name" fullWidth />
              <TextField
                margin="dense"
                label="Description"
                fullWidth
                multiline
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.deleteButton}
            onClick={handleClose}
            color="primary"
          >
            Delete
          </Button>
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

export default ProjectCard;
