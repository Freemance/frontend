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
            onDelete={() => {}}
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
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfileSkills;
