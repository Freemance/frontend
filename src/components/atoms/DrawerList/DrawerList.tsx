import * as React from 'react';
import { List, ListItem, Typography } from '@material-ui/core';
import Link from 'next/link';
// Style
import { useDrawerListStyle } from './DrawerList.style';
import IDrawerList from '@components/atoms/DrawerList/types';
const DrawerList = ({ text, link }: IDrawerList) => {
  const classes = useDrawerListStyle();
  return (
    <div>
      <List className={classes.drawerList}>
        <ListItem button className={classes.button}>
          <Link href={link}>
            <Typography variant="h2" className={classes.textstyle}>
              {text}
            </Typography>
          </Link>
        </ListItem>
      </List>
    </div>
  );
};

export default DrawerList;
