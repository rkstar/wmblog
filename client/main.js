import { Meteor } from 'meteor/meteor';
import '/imports/client';

Meteor.startup(() => Meteor.subscribe('hydrate.user.data'));
