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
import { Autocomplete } from '@material-ui/lab';
import { Add as AddIcon } from '@material-ui/icons';

import { useProfileSkillsStyle } from './ProfileSkills.style';
import { useProfileContext } from '@layouts/ProfileLayout';
import { useMutation, useQuery } from '@apollo/client';
import {
  PROFILE_ADD_SKILL,
  PROFILE_REMOVE_SKILL,
} from 'src/lib/apollo/user/mutations';
import {
  IProfileDeleteSkillInput,
  IProfileDeleteSkillRes,
  IAvailableSkillsRes,
  IProfileAddSkillInput,
  IProfileAddSkillRes,
} from 'src/lib/apollo/user/types';
import { ActionType, useGlobalContext } from 'src/context';
import { SkillType } from 'src/context/state';
import { AVAILABLE_SKILLS } from 'src/lib/apollo/user/queries';

const ProfileSkills = () => {
  const classes = useProfileSkillsStyle();

  const { state, dispatch } = useGlobalContext();
  const { isEdit } = useProfileContext();

  const skills = [...state.user.profile.skills].sort((a, b) =>
    a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  );

  const [openAdd, setOpenAdd] = useState<boolean>(false);

  const [availableSkills, setAvailableSkills] = useState<SkillType[]>([]);
  const [toAddSkill, setToAddSkill] = useState<SkillType | null>(null);
  const [isAddLoading, setIsAddLoading] = useState<boolean>(false);

  const { data: availableSkillsData } =
    useQuery<IAvailableSkillsRes>(AVAILABLE_SKILLS);

  const [addSkill] = useMutation<IProfileAddSkillRes, IProfileAddSkillInput>(
    PROFILE_ADD_SKILL
  );

  useEffect(() => {
    if (availableSkillsData) {
      const tempSkills = availableSkillsData.filterSkills.edges
        .map((edge) => edge.node)
        .filter((s) => {
          return !skills.includes(s);
        });
      setAvailableSkills(tempSkills);
    }
  }, [availableSkillsData]);

  const handleAddClose = () => {
    setToAddSkill(null);
    setOpenAdd(false);
  };

  const handleAddSkill = () => {
    setIsAddLoading(true);
    addSkill({
      variables: {
        skillId: toAddSkill.id,
      },
    })
      .then((res) => {
        dispatch({
          type: ActionType.UpdateProfile,
          payload: res.data.profileAddSkill,
        });
        setAvailableSkills([
          ...availableSkills.slice(0, availableSkills.indexOf(toAddSkill)),
          ...availableSkills.slice(availableSkills.indexOf(toAddSkill) + 1),
        ]);
        setIsAddLoading(false);
        handleAddClose();
      })
      .catch((err) => {
        setIsAddLoading(false);
      });
  };

  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [toDeleteSkill, setToDeleteSkill] = useState<SkillType | null>(null);
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);

  const [deleteSkill] = useMutation<
    IProfileDeleteSkillRes,
    IProfileDeleteSkillInput
  >(PROFILE_REMOVE_SKILL);

  useEffect(() => {
    if (toDeleteSkill) {
      setOpenDelete(true);
    }
  }, [toDeleteSkill]);

  const handleDeleteClose = () => {
    setToDeleteSkill(null);
    setOpenDelete(false);
  };

  const handleDeleteSkill = () => {
    setIsDeleteLoading(true);
    deleteSkill({
      variables: {
        skillId: toDeleteSkill.id,
      },
    })
      .then((res) => {
        dispatch({
          type: ActionType.UpdateProfile,
          payload: res.data.profileRemoveSkill,
        });
        const tempASkills = availableSkills;
        tempASkills.push(toDeleteSkill);
        setAvailableSkills([
          ...tempASkills.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          ),
        ]);
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
            setOpenAdd(true);
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
            onDelete={() => {
              setToDeleteSkill(skill);
            }}
          />
        ) : (
          <Chip key={index} className={classes.chip} label={skill.name} />
        )
      )}
      <Dialog open={openAdd} onClose={handleAddClose}>
        <DialogTitle>Add Skill</DialogTitle>
        <DialogContent>
          <Autocomplete
            style={{ width: 200 }}
            options={availableSkills}
            getOptionLabel={(option) => option.name}
            value={toAddSkill}
            onChange={(e, newValue: SkillType | null) => {
              setToAddSkill(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} margin="dense" label="Skill" fullWidth />
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleAddSkill}
            color="primary"
            variant="outlined"
            disabled={toAddSkill === null || isAddLoading}
          >
            Save
            {isAddLoading && (
              <CircularProgress className={classes.spinner} size={20} />
            )}
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
