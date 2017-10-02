import React from 'react';

export default ({ match }) => (
  <pre>
    {JSON.stringify(match, null, 2)}
  </pre>
);
