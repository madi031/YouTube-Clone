import { Typography } from '@material-ui/core';
import React from 'react';

import styles from '../styles/VideoThumb.module.css';

const VideoThumb = props => {
  let {
    channelName,
    id,
    publishedAt,
    title,
    url,
  } = props;

  const calculateUploadTime = time => {
    let uploadTime = new Date(time).getTime();
    let currentTime = new Date().getTime();

    let duration = currentTime - uploadTime;

    // check if difference is in secs
    duration = Math.floor(duration / 1000);
    if (duration < 60) {
      return `${Math.floor(duration / 1000)} secs ago`;
    }

    // check if difference is in mins
    duration = Math.floor(duration / 60);
    if (duration < 60) {
      return `${duration} ${duration === 1 ? 'min' : 'mins'} ago`;
    }

    // check if difference is in hours
    duration = Math.floor(duration / 60);
    if (duration < 24) {
      return `${duration} ${duration === 1 ? 'hour' : 'hours'} ago`;
    }

    // check if difference is in days
    duration = Math.floor(duration / 24);
    if (duration < 30) {
      return `${duration} ${duration === 1 ? 'day' : 'days'} ago`;
    }

    // check if difference is in months
    if (duration < 365) {
      let time = Math.floor(duration / 30);

      return `${time} ${time === 1 ? 'month' : 'months'} ago`;
    }

    duration = Math.floor(duration / 365);

    return `${duration} ${duration === 1 ? 'year' : 'years'} ago`;
  };

  const play = id => {
    props.playSelectedVideo(id);
  }

  return (
    <div
      className={styles.container}
      onClick={() => play(id)}
    >
      <img
        alt={title}
        src={url}
      />
      <div
        className={styles.detailsContainer}
      >
        <Typography
          variant='subtitle2'
        >
          {title}
        </Typography>
        <Typography
          className={styles.secondaryText}
          variant='caption'
        >
          {channelName}
        </Typography>
        <Typography
          className={styles.secondaryText}
          variant='body2'
        >
          {calculateUploadTime(publishedAt)}
        </Typography>
      </div>
    </div>
  );
};

export default VideoThumb;
