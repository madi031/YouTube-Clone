import {
  Paper,
  Snackbar,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useState } from 'react';

import styles from '../styles/VideoPlayer.module.css';

const VideoPlayer = props => {
  const [open, setOpen] = useState(true);

  if (props.error) {
    return (
      <Snackbar
        autoHideDuration={5000}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Alert
          elevation={6}
          severity='error'
          variant='filled'
        >
          Some error occured. Try reloading the page.
        </Alert>
      </Snackbar>
    );
  }

  if (!props.video) {
    return <div></div>;
  }

  let { videoId } = props.video.id;
  let {
    channelTitle,
    description,
    publishedAt,
    title,
  } = props.video.snippet;

  let url = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`;

  return (
    <>
      <Paper
        className={styles.container}
        elevation={6}
      >
        <iframe
          allowFullScreen
          frameBorder='0'
          height='100%'
          src={url}
          title='Video Player'
          width='100%'
        >
        </iframe>
      </Paper>
      <div
        className={styles.detailsContainer}
      >
        <Typography
          variant='h6'
        >
          {title}
        </Typography>
        <Typography
          className={styles.secondaryText}
          variant='subtitle2'
        >
          {new Date(publishedAt).toDateString()}
        </Typography>
        <hr />
        <Typography
          variant='h6'
        >
          {channelTitle}
        </Typography>
        <Typography
          className={styles.secondaryText}
          variant='subtitle2'
        >
          {description}
        </Typography>
      </div>
    </>
  );
};

export default VideoPlayer;
