import { Meteor } from 'meteor/meteor';
import { ensureLoggedIn } from '../';
import { mapUser } from './';

export const User = {
  async posts(__, props, context) {

  },

  async comments(__, props, context) {

  },

  async bookmarks(__, props, context) {

  },
};

export const Query = {
  async users(__, props, context) {

  },

  async user(__, { id: _id }, context) {
    ensureLoggedIn(context);

    const user = Meteor.users.findOne({ _id });
    return mapUser(user);
  },

  async me(__, props, context) {
    return context.user;
  },
};

export const Mutation = {
  async editUser(__, { user: { name, avatar } }, context) {
    ensureLoggedIn(context);

    if (!name && !avatar) {
      return context.user;
    }

    const _id = context.userId;
    const $set = Object.assign(
      {},
      name ? {
        'profile.name': name,
        'account.name': name,
      } : {},
      avatar ? {
        'account.avatar': avatar,
      } : {},
    );

    Meteor.users.update({ _id }, { $set });
    return Meteor.users.findOne({ _id });
  },

  async deleteUser(__, props, context) {
    ensureLoggedIn(context);
  },
};
