import React from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Route, Redirect } from 'react-router-dom';
import { compose } from 'recompose';

const AuthenticatedRoute = ({
  component: Component,
  loggingIn,
  loggingOut,
  user,
  ...props,
}) => (
  <Route
    render={(routeProps) => {
      if (loggingIn) {
        return <div>Loading...</div>;
      }
      if (loggingOut) {
        return <div>Bye...</div>;
      }

      return user ? (
        <Component user={user} {...props} {...routeProps} />
      ) : (
        <Redirect to="/login" />
      );
    }}
  />
);

export default compose(
  withTracker(props => ({
    ...props,
    loggingIn: Meteor.loggingIn(),
    loggingOut: Meteor.loggingOut(),
    user: { ...Meteor.user(), id: Meteor.userId() },
  })),
)(AuthenticatedRoute);
