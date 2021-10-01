import * as React from 'react';
import clsx from 'clsx';
import { ChevronsUp } from 'react-feather';
import { Fab } from '@material-ui/core';

// Styles hook
import useStyles from './ScrollToTop.styles';

// Types
import { IProps } from './type';

const ScrollToTop: React.FC<IProps> = ({ showScrollToTop }: IProps) => {
  const classes = useStyles();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div
      className={clsx(
        classes.root,
        showScrollToTop ? classes.isVisible : classes.isHidde
      )}
    >
      <Fab onClick={scrollTop} size="small" className={classes.scrollToBtn}>
        <ChevronsUp className={classes.arrowIcon} />
      </Fab>
    </div>
  );
};

export default ScrollToTop;
