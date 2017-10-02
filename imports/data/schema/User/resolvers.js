import { Meteor } from 'meteor/meteor';

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

  async user(__, props, context) {

  },

  async me(__, props, context) {
    return context.user;
  },
};

export const Mutation = {
  async editUser(__, { user: { name, avatar } }, context) {
    if (!context.user || !context.user._id) {
      throw new Error('Unknown user.');
    }

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
    if (!context.user || !context.userId) {
      throw new Error('sorry... you gotta be logged in.');
    }
  },
};
