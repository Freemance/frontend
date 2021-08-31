import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IFAQ from './types';
export default function FAQ({ question, answer }: IFAQ) {
  return (
    <Accordion
      style={{
        borderRadius: '4px',
        marginBottom: '10px',
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">{question} ?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="subtitle2">• {answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
