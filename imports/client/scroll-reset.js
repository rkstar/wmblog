import React from 'react';
import { withRouter } from 'react-router-dom';
import { withPropsOnChange, compose } from 'recompose';

export default () => Component => props => compose(
  withRouter,
  withPropsOnChange(['location'], () => window.scrollTo(0,0)),
)(<Component {...props} />);
