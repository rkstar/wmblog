import React from 'react';
import { render } from 'react-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import { withStyles, MuiThemeProvider } from 'material-ui/styles';
import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';
import { lifecycle, compose } from 'recompose';

import App from './App';
import createContext from './styles.js';

const apolloClient = new ApolloClient(meteorClientConfig());
const context = createContext();
const styles = theme => ({
  "@global": {
    html: {
      background: theme.palette.background.default,
    },
  },
});

const RootComponent = () => (
  <ApolloClient client={apolloClient}>
    <MuiThemeProvider theme={context.theme} sheetsManager={context.sheetsManager}>
      <App />
    </MuiThemeProvider>
  </ApolloClient>
);

const WiredUpApp = compose(
  withStyles(styles),
  lifecycle({
    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    },
  }),
)(RootComponent);

render(<WiredUpApp />, document.getElementById('root'));
