import React from 'react';
import { Typography } from '@material-ui/core';
import { useConfirmMessageStyle } from './ConfirmMessage.style';

interface ConfirmMessageType {
  text?: String;
  icon: React.ReactElement<any>;
}

export const ConfirmMessage = ({ text, icon }: ConfirmMessageType) => {
  const classes = useConfirmMessageStyle();
  return (
    <div className={classes.info}>
      {icon}
      {text && <Typography variant="h3">{text}</Typography>}
    </div>
  );
};
