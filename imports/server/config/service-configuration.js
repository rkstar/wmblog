import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.oauthServices.forEach(config => {
  const { service, client } = config;
  ServiceConfiguration.configurations.update(
    { service },
    { ...client },
    { upsert: true }
  );
});
