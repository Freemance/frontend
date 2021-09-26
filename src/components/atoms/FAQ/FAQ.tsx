import React from 'react';
import Typography from '@material-ui/core/Typography';
import IFAQ from './types';
export default function FAQ({ question, answer }: IFAQ) {
  return (
    <>
      <Typography variant="h3" style={{ marginBottom: '2%' }}>
        {question}?
      </Typography>

      <Typography
        variant="body1"
        style={{ marginLeft: '4%', marginBottom: '2%' }}
      >
        •{answer}
      </Typography>
    </>
  );
}
