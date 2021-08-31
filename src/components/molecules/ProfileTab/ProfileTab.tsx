import React from 'react';
import { Grid } from '@material-ui/core';

import IProfileTab from './types';
import { useProfileTabStyle } from './ProfileTab.style';

const ProfileTab = ({ children, value, index }: IProfileTab) => {
  const classes = useProfileTabStyle();

  return (
    <div role="tabpanel" hidden={value !== index} id={`${index}`}>
      {value === index && (
        <Grid
          className={classes.container}
          alignItems="stretch"
          container
          spacing={3}
        >
          {children}
        </Grid>
      )}
    </div>
  );
};

export default ProfileTab;
