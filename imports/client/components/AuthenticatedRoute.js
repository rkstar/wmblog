import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';
import { compose, withProps } from 'recompose';

const AuthenticatedRoute = ({
  exact = false,
  path,
  component: Component,
  loggingIn,
  loggingOut,
  user,
  ...props,
}) => (
  <Route
    exact={exact}
    path={path}
    render={(routeProps) => {
      if (loggingIn) {
        return <div>Loading...</div>;
      }
      if (loggingOut) {
        return <div>Bye...</div>;
      }

      return user && user._id ? (
        <Component user={user} {...routeProps} />
      ) : (
        <Redirect to="/login" />
      );
    }}
  />
);

export default compose(
  withProps(props => {
    delete props.computedMatch;
    return props;
  }),
  withTracker(() => ({
    loggingIn: Meteor.loggingIn(),
    loggingOut: Meteor.loggingOut(),
    user: { ...Meteor.user(), id: Meteor.userId() },
  })),
)(AuthenticatedRoute);
