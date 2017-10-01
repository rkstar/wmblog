import React from 'react';
import { withRouter } from 'react-router-dom';
import { withPropsOnChange, compose } from 'recompose';

const ScrollReset = ({ children }) => children;

export default compose(
  withRouter,
  withPropsOnChange(['location'], () => window.scrollTo(0, 0)),
)(ScrollReset);
