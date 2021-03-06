import React from 'react';
import { withRouter } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { withReducer, withProps, withPropsOnChange, compose } from 'recompose';
import { Icons } from '/imports/client/theme/icons';
import { inputStyle, textareaStyle, hintStyle } from './style';
import postByIdQuery from '../../data/queries/postById';
import editPostMutation from '../../data/mutations/editPost';

const EditPost = ({
  postId,
  editPost,
  dispatch,
  state,
  data: {
    post,
    loading,
  },
  history,
}) => loading ? (
  <div>Loading...</div>
) : (
  <main>
    <TextField
      hintText="An interesting title makes all the difference."
      fullWidth
      {...{ hintStyle, inputStyle }}
      defaultValue={post.title}
      onChange={(e, title) => dispatch({ title })}
    />
    <TextField
      hintText="The greatest stories start with a single word..."
      fullWidth
      {...{ hintStyle, textareaStyle }}
      multiLine
      rows={6}
      rowsMax={10}
      defaultValue={post.content}
      onChange={(e, content) => dispatch({ content })}
    />
    <RaisedButton
      primary
      label="Save"
      icon={Icons.drawFontIcon(Icons.save)}
      onClick={() => {
        editPost({
          variables: {
            id: postId,
            post: { ...state },
          },
        });
        history.push('/profile');
      }}
    />
  </main>
);

const initialState = {
  title: null,
  content: null,
};

export default compose(
  withRouter,
  withProps(props => ({
    postId: props.match.params.id,
  })),
  withReducer('state', 'dispatch', (state, action) => ({
    ...state,
    ...action,
  }), initialState),
  postByIdQuery,
  editPostMutation,
  withPropsOnChange(['data'], ({ data: { post, loading }, dispatch, state }) => {
    if (!loading && !state.title && !state.content) {
      dispatch({
        title: post.title,
        content: post.content,
      });
    }
  }),
)(EditPost);
