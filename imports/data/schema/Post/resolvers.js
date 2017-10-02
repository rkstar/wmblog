import { Meteor } from 'meteor/meteor';
import { ensureLoggedIn } from '../';
import Posts from '../../../collections/Posts';
import { mapUser } from '../User';

export const Post = {
  async author(post, props, context) {
    const user = Meteor.users.findOne({ _id: post.userId });
    return mapUser(user);
  },

  async tags(post, props, context) {
    return [];
  },

  async likes(post, props, context) {
    return [];
  },

  async comments(post, props, context) {
    return [];
  },
};

export const Query = {
  async post(__, { id }, context) {
    ensureLoggedIn(context);

    return Posts.findOne({ _id: id });
  },

  async posts(__, { sort = 'DATE', order = 'DESC' }, context) {
    const fields = {
      DATE: 'datePosted',
      COMMENTS: 'comments.length',
      LIKES: 'likes.length',
    };
    const options = { sort: {
      [fields[sort]]: (order === 'DESC') ? -1 : 1,
    }};
    return Posts.find({}, options).fetch();
  },

  async comments(__, props, context) {

  },
};

export const Mutation = {
  async addPost(__, { post: { title, content } }, context) {
    ensureLoggedIn(context);

    // would do some error checking here normally...
    const id = Posts.insert({
      userId: context.user._id,
      title,
      content,
      datePosted: new Date(),
      lastUpdated: new Date(),
    });

    return Posts.findOne({ _id: id });
  },

  async editPost(__, props, context) {

  },

  async deletePost(__, props, context) {

  },

  async bookmarkPost(__, props, context) {

  },

  async unbookmarkPost(__, props, context) {

  },
};
