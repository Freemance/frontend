import React from 'react';
import Typography from '@material-ui/core/Typography';
import IFAQ from './types';
import { useFAQStyles } from './FAQ.style';
export default function FAQ({ question, answer }: IFAQ) {
  const classes = useFAQStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h4" style={{ marginBottom: '10px' }}>
        {question}?
      </Typography>

      <Typography
        variant="body1"
        style={{ marginLeft: '4%', marginBottom: '30px' }}
      >
        •{answer}
      </Typography>
    </div>
  );
}
