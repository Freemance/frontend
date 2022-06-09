import React from 'react';
import { Box, Typography } from '@material-ui/core';

export const PoweredBy = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h5"
        style={{
          marginLeft: '2%',
          fontWeight: 700,
          fontSize: 36,
        }}
      >
        Freemance DAO
      </Typography>
    </Box>
  );
};
