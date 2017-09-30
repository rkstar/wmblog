import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.settings.oauthServices.forEach(config => {
  const { service, client } = config;

  ServiceConfiguration.configurations.upsert({
    service: service,
  }, {
    $set: { ...client },
  });
});
