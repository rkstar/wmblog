import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { compose } from 'recompose';

const AuthenticatedRoute = ({
  component: Component,
  loggingIn,
  loggedIn,
  loggingOut,
  ...rest
}) => (
  <Route
    render={(props) => {
      if (loggingIn) {
        return <div>Loading...</div>;
      }
      if (loggingOut) {
        return <div>Seeya...!</div>;
      }

      return loggedIn ? <Component {...props} {...rest} /> : <Redirect to="/" />;
    }}
  />
);

export default compose(
  connect(
    // mapStateToProps,
    ({ auth: { loggingIn, loggingOut, loggedIn } }) => ({ loggingIn, loggingOut, loggedIn }),
    // mapDispatchToProps,
    dispatch => ({ actions: bindActionCreators({ logout }, dispatch) }),
  ),
)(AuthenticatedRoute);
