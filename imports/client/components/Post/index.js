import React from 'react';
import moment from 'moment';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import { compose } from 'recompose';
import likePostMutation from '../../data/mutations/likePost';
import unlikePostMutation from '../../data/mutations/unlikePost';
import bookmarkPostMutation from '../../data/mutations/bookmarkPost';
import unbookmarkPostMutation from '../../data/mutations/unbookmarkPost';
import IconButton from 'material-ui/IconButton';
import { Icons } from '../../theme/icons';
import { Colors } from '../../theme/colors';
import classes from './style.css';

const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
const getImage = () => randomItem([
  'http://fillmurray.com/1090/540',
  'http://fillmurray.com/600/240',
  'http://fillmurray.com/1024/400',
  'http://fillmurray.com/925/800',
  'http://fillmurray.com/625/200',
  'http://fillmurray.com/1000/700',
  'http://fillmurray.com/830/600',
  'http://fillmurray.com/400/700',
]);

const getBookmarkIcon = (userId, bookmarks) => {
  const ids = bookmarks.map(user => user._id);
  // console.log('bookmark:', ids);
  return ids.includes(userId) ? Icons.bookmark : Icons.bookmark_empty;
};

const getHeartIcon = (userId, likes) => {
  const ids = likes.map(user => user._id);
  // console.log('heart:', ids);
  return ids.includes(userId) ? Icons.heart : Icons.heart_empty;
}

const Post = ({
  user,
  _id,
  title,
  content,
  likes,
  bookmarks,
  author,
  datePosted,
  likePost,
  unlikePost,
  bookmarkPost,
  unbookmarkPost,
}) => (
  <article className={classes.post}>
    <Card zDepth={2} className={classes.card}>
      <CardMedia
        overlay={<CardTitle title={title} />}
      >
        <img src={getImage()} />
      </CardMedia>
      <CardText>
        <p>{content}</p>
        <p className={classes.date}>posted {moment(datePosted).format('dddd, MMMM Do YYYY')}</p>
        <p className={classes.byline}>by {author.name}</p>
      </CardText>
      <CardActions>
        <IconButton
          touch
          onClick={() => console.log('heart this post:', _id)}
        >
          {Icons.drawFontIcon(getHeartIcon(user._id, likes), Colors.app.seafoam)}
        </IconButton>
        <IconButton
          touch
          onClick={() => console.log('bookmark this post:', _id)}
        >
          {Icons.drawFontIcon(getBookmarkIcon(user._id, bookmarks), Colors.app.seafoam)}
        </IconButton>
      </CardActions>
    </Card>
  </article>
);

export default compose(
  likePostMutation,
  unlikePostMutation,
  bookmarkPostMutation,
  unbookmarkPostMutation,
)(Post);
