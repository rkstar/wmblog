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

export default ({ _id, title, content, author, datePosted }) => (
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
          {Icons.drawFontIcon(Icons.heart_empty, Colors.app.seafoam)}
        </IconButton>
        <IconButton
          touch
          onClick={() => console.log('bookmark this post:', _id)}
        >
          {Icons.drawFontIcon(Icons.bookmark_empty, Colors.app.seafoam)}
        </IconButton>
      </CardActions>
    </Card>
  </article>
);
