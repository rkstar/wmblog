import React from 'react';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import { compose, withState } from 'recompose';
import { withRouter } from 'react-router-dom';
import { Icons } from '../../theme/icons';

import classes from './style.css';

const BottomNav = ({ selectedNavItem, selectNavItem, history }) => (
  <Paper zDepth={1} className={classes.navbar}>
    <BottomNavigation selectedIndex={selectedNavItem}>
      <BottomNavigationItem
        label="Feed"
        icon={Icons.drawFontIcon(Icons.share)}
        onClick={() => {
          selectNavItem(1);
          history.push('/');
        }}
      />
      <BottomNavigationItem
        label="Bookmarks"
        icon={Icons.drawFontIcon(Icons.bookmark)}
        onClick={() => {
          selectNavItem(2);
          history.push('/bookmarks');
        }}
      />
      <BottomNavigationItem
        label="Likes"
        icon={Icons.drawFontIcon(Icons.heart)}
        onClick={() => {
          selectNavItem(3);
          history.push('/likes');
        }}
      />
      <BottomNavigationItem
        label="Profile"
        icon={Icons.drawFontIcon(Icons.profile)}
        onClick={() => {
          selectNavItem(4);
          history.push('/profile');
        }}
      />
    </BottomNavigation>
  </Paper>
);

export default compose(
  withRouter,
  withState('selectedNavItem', 'selectNavItem', 0),
)(BottomNav);
