import React, { useEffect, useState } from 'react';
import {
  Button,
  Chip,
  CircularProgress,
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
import { useMutation } from '@apollo/client';
import { PROFILE_REMOVE_SKILL } from 'src/lib/apollo/user/mutations';
import {
  IProfileDeleteSkillInput,
  IProfileDeleteSkillRes,
} from 'src/lib/apollo/user/types';
import { ActionType, useGlobalContext } from 'src/context';

const ProfileSkills = ({ skills }: IProfileSkills) => {
  const classes = useProfileSkillsStyle();

  const { dispatch } = useGlobalContext();
  const { isEdit } = useProfileContext();

  const [open, setOpen] = useState<boolean>(false);
  const [dialogTitle, setDialogTitle] = useState<String>('');

  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number>(-1);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);

  const [deleteSkill] = useMutation<
    IProfileDeleteSkillRes,
    IProfileDeleteSkillInput
  >(PROFILE_REMOVE_SKILL);

  useEffect(() => {
    if (dialogTitle != '') {
      setOpen(true);
    }
  }, [dialogTitle]);

  const handleClose = () => {
    setDialogTitle('');
    setOpen(false);
  };

  useEffect(() => {
    if (deleteId != -1) {
      setOpenDelete(true);
    }
  }, [deleteId]);

  const handleDeleteClose = () => {
    setDeleteId(-1);
    setOpenDelete(false);
  };

  const handleDeleteSkill = () => {
    setIsDeleteLoading(true);
    deleteSkill({
      variables: {
        skillId: deleteId,
      },
    })
      .then((res) => {
        dispatch({
          type: ActionType.UpdateProfile,
          payload: res.data.profileRemoveSkill,
        });
        setIsDeleteLoading(false);
        handleDeleteClose();
      })
      .catch((err) => {
        setIsDeleteLoading(false);
      });
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
              setDeleteId(skill.id);
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
          <Button
            className={classes.deleteButton}
            disabled={isDeleteLoading}
            onClick={handleDeleteSkill}
          >
            Delete
            {isDeleteLoading && (
              <CircularProgress className={classes.spinner} size={20} />
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProfileSkills;
