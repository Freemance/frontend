import React from 'react';
import { Typography } from '@material-ui/core';

import IProfileInfoField from './types';

const ProfileInfoField = ({ title, value }: IProfileInfoField) => {
  return (
    <>
      <Typography variant="subtitle2">{title}</Typography>
      <Typography variant="h5">{value}</Typography>
    </>
  );
};

export default ProfileInfoField;
