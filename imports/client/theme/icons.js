import React from 'react';
import FontIcon from 'material-ui/FontIcon';

/* eslint-disable import/prefer-default-export */
export const Icons = {
  google: 'fa fa-google-plus',
  twitter: 'fa fa-twitter',
  facebook: 'fa fa-facebook',
  github: 'fa fa-github',
  back: 'keyboard_backspace',
  forward: 'keyboard_arrow_right',
  edit: 'mode_edit',
  save: 'save',
  close: 'close',
  close_circled: 'cancel',
  refresh: 'refresh',
  trash: 'delete',
  nuclear: 'report_problem',
  thumbs_down: 'thumb_down',
  thumbs_up: 'thumb_up',
  heart: 'favorite',
  bookmark: 'bookmark',
  checkmark: 'check',
  options: 'more_vert',
  search: 'search',
  settings: 'settings',
  locked: 'lock',
  profile: 'face',
  share: 'share',
  user: 'face',
  drawHtml(icon, style = {}) {
    return (<i className={icon} style={style} />);
  },
  drawFontIcon(icon, style = {}) {
    return icon.includes('fa fa') ? (
      <FontIcon className={icon} style={style} />
    ) : (
      <FontIcon className="material-icons" style={style}>{icon}</FontIcon>
    );
  },
};
