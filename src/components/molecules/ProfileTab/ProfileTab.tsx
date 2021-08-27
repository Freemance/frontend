import React from 'react';
import { Box, Typography } from '@material-ui/core';

import IProfileTab from './types';

const ProfileTab = ({ children, value, index }: IProfileTab) => {
  return (
    <div role="tabpanel" hidden={value !== index} id={`${index}`}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default ProfileTab;
