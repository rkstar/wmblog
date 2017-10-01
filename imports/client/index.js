import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import theme from './theme';
import App from './App';

const apolloClient = new ApolloClient(meteorClientConfig());

const RootComponent = () => (
  <ApolloProvider client={apolloClient}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </ApolloProvider>
);

render(<RootComponent />, document.getElementById('root'));
