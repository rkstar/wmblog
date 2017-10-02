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
    const users = Meteor.users.find({
      likes: { $exists: true },
      likes: post._id,
    }).fetch();

    return users.map(user => mapUser(user));
  },

  async bookmarks(post, props, context) {
    const users = Meteor.users.find({
      bookmarks: { $exists: true },
      bookmarks: post._id,
    }).fetch();

    return users.map(user => mapUser(user));
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

  async posts(__, { userId, sort = 'DATE', order = 'DESC' }, context) {
    const fields = {
      DATE: 'datePosted',
      COMMENTS: 'comments.length',
      LIKES: 'likes.length',
    };
    const options = { sort: {
      [fields[sort]]: (order === 'DESC') ? -1 : 1,
    }};
    const query = userId ? { _id: userId } : {};
    return Posts.find(query, options).fetch();
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

  async editPost(__, { id, post: { title, content } }, context) {
    ensureLoggedIn(context);

    Posts.update({ _id: id }, { $set: {
      title,
      content,
      lastUpdated: new Date(),
    }});

    return Posts.findOne({ _id: id });
  },

  async deletePost(__, { id }, context) {
    ensureLoggedIn(context);

    Posts.remove({ _id: id });
    return id;
  },

  async likePost(__, props, context) {
    ensureLoggedIn(context);

    // update posts...
    // update user...
  },

  async unlikePost(__, props, context) {
    ensureLoggedIn(context);

        // update posts...
    // update user...
  },

  async bookmarkPost(__, props, context) {
    ensureLoggedIn(context);

    // update posts...
    // update user...
  },

  async unbookmarkPost(__, props, context) {
    ensureLoggedIn(context);

    // update posts..
    // update user
  },
};
