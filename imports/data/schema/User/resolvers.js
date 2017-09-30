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
  async editUser(__, props, context) {

  },

  async deleteUser(__, props, context) {

  },
};
