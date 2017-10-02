import React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { withReducer, compose } from 'recompose';
import { Icons } from '/imports/client/theme/icons';
import { inputStyle, textareaStyle, hintStyle } from './style';
import addPostMutation from '../../data/mutations/addPost';

const WritePost = ({ addPost, dispatch, state, history }) => (
  <main>
    <TextField
      hintText="An interesting title makes all the difference."
      fullWidth
      {...{ hintStyle, inputStyle }}
      defaultValue={state.title}
      onChange={(e, title) => dispatch({ title })}
    />
    <TextField
      hintText="The greatest stories start with a single word..."
      fullWidth
      {...{ hintStyle, textareaStyle }}
      multiLine
      rows={6}
      rowsMax={10}
      defaultValue={state.content}
      onChange={(e, content) => dispatch({ content })}
    />
    <RaisedButton
      primary
      label="Save"
      icon={Icons.drawFontIcon(Icons.save)}
      onClick={() => {
        addPost({
          variables: { post: { ...state } },
        });
        history.push('/profile');
      }}
    />
  </main>
);

const initialState = {
  title: '',
  content: '',
};

export default compose(
  withRouter,
  addPostMutation,
  withReducer('state', 'dispatch', (state, action) => ({
    ...state,
    ...action,
  }), initialState),
)(WritePost);
