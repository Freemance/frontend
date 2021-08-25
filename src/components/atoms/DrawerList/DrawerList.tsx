import React from 'react';
import { List, ListItem, Typography, Link } from '@material-ui/core';
// Style
import { useDrawerListStyle } from './DrawerList.style';
import IDrawerList from '@components/atoms/DrawerList/types';
const DrawerList = ({ text, link }: IDrawerList) => {
  const classes = useDrawerListStyle();
  return (
    <div>
      <List className={classes.drawerList}>
        <ListItem button className={classes.button}>
          <Typography variant="h2">
            <Link href={link} className={classes.textstyle} underline="none">
              {text}
            </Link>
          </Typography>
        </ListItem>
      </List>
    </div>
  );
};

export default DrawerList;
