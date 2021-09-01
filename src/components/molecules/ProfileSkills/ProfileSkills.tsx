import React, { useEffect, useState } from 'react';
import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';

import { useProfileSkillsStyle } from './ProfileSkills.style';
import IProfileSkills from './types';
import { useProfileContext } from '@layouts/ProfileLayout';

const ProfileSkills = ({ skills }: IProfileSkills) => {
  const classes = useProfileSkillsStyle();

  const { isEdit } = useProfileContext();

  const [open, setOpen] = useState<boolean>(false);
  const [dialogTitle, setDialogTitle] = useState<String>('');

  const [openDelete, setOpenDelete] = useState<boolean>(false);

  useEffect(() => {
    if (dialogTitle != '') {
      setOpen(true);
    }
  }, [dialogTitle]);

  const handleClose = () => {
    setDialogTitle('');
    setOpen(false);
  };

  const handleDeleteClose = () => {
    setOpenDelete(false);
  };

  return (
    <div className={classes.root}>
      {isEdit && (
        <Chip
          icon={<AddIcon />}
          label="Add skill"
          onClick={() => {
            setDialogTitle('Add skill');
          }}
        />
      )}
      {skills.map((skill, index) =>
        isEdit ? (
          <Chip
            key={index}
            color="primary"
            label={skill.name}
            variant="outlined"
            onClick={() => {
              setDialogTitle('Edit skill');
            }}
            onDelete={() => {
              setOpenDelete(true);
            }}
          />
        ) : (
          <Chip key={index} className={classes.chip} label={skill.name} />
        )
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" label="Skill" fullWidth />
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
      <Dialog open={openDelete} onClose={handleDeleteClose}>
        <DialogTitle>Are you sure you want to delete this skill?</DialogTitle>
        <DialogActions>
          <Button onClick={handleDeleteClose} color="primary">
            Cancel
          </Button>
          <Button className={classes.deleteButton} onClick={handleDeleteClose}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfileSkills;
