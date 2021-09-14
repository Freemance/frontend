import React, { useState } from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { AddCircleOutline as AddIcon } from '@material-ui/icons';
import { useAddProjectCardStyle } from './AddProjectCard.style';

const AddProjectCard = () => {
  const classes = useAddProjectCardStyle();

  const [open, setOpen] = useState<boolean>(false);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClose = () => {
    setOpen(false);
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
        <DialogTitle>Add project</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Card className={classes.dialogImageCard}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="/static/images/no-image.jpg"
                  />
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
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default AddProjectCard;
