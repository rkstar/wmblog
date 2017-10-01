import React from 'react';
import { Meteor } from 'meteor/meteor';

export default () => Meteor.user() ? (
  <h1>Welcome back, {Meteor.user().profile.name}!</h1>
) : (
  <h1>feed goes here...</h1>
);
