import { Meteor } from 'meteor/meteor';

const facebookAvatar = ({ id }) => `https://graph.facebook.com/${id}/picture?type=large`;
const twitterAvatar = ({ profile_image_url_https }) => profile_image_url_https;
const googleAvatar = ({ picture }) => picture;
const sanitizeConnectedService = services => {0
  const serviceName = Object.keys(services)
                      .map(service => (service.name !== 'resume') ? service : null)
                      .filter(el => !!el)[0];
  const service = services[serviceName];
  const sanitizedService = {
    id: service.id,
    avatar: '',
  };

  switch (serviceName) {
    case 'facebook':
      sanitizedService.avatar = facebookAvatar(service);
      break;

    case 'twitter':
      sanitizedService.avatar = twitterAvatar(service);
      break;

    case 'google':
      sanitizedService.avatar = googleAvatar(service);
      break;
  }

  return sanitizedService;
};

Meteor.publish('hydrate.user.data', function(){
  const _id = Meteor.userId();
  if (!_id) {
    return null;
  }

  const { services, profile } = Meteor.users.findOne({ _id });
  Meteor.users.update({ _id }, { $set: {
    account: {
      ...sanitizeConnectedService(services),
      name: profile.name,
    },
  }});

  return Meteor.users.find({ _id }, { fields: {
    _id: 1,
    account: 1,
  }});
});
