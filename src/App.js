import {
  Grid,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { search } from './api/youtube';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import VideoThumb from './components/VideoThumb';

import './App.module.css';

import 'fontsource-roboto';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState();

  const [error, setError] = useState(false);

  useEffect(() => {
    searchQuery('YouTube');
  }, []);

  const searchQuery = async searchTerm => {
    let videoResponse = (await search(searchTerm));

    if (videoResponse.length === 0) {
      setError(true);
      return;
    }

    setVideos(videoResponse);
    setSelectedVideo(videoResponse[0]);
  };

  const playSelectedVideo = id => {
    let vid = videos.filter(video => video.id.videoId === id);

    setSelectedVideo(vid[0]);
  };

  return (
    <Grid
      container
      justify='center'
    >
      <Grid
        item
        xs={12}
      >
        <Header
          search={searchQuery}
        />
      </Grid>
      <Grid
        item
        xs={8}
        style={{ height: '80vh' }}
      >
        <VideoPlayer
          error={error}
          video={selectedVideo}
        />
      </Grid>
      <Grid
        item
        xs={4}
      >
        {
          videos.map((video, index) => {
            if (video === selectedVideo) {
              return (
                <React.Fragment key='FRAGMENT'>
                </React.Fragment>
              );
            }
            return (
              <VideoThumb
                channelName={video.snippet.channelTitle}
                id={video.id.videoId}
                key={index}
                playSelectedVideo={playSelectedVideo}
                publishedAt={video.snippet.publishedAt}
                title={video.snippet.title}
                url={video.snippet.thumbnails.default.url}
              />
            );
          })
        }
      </Grid>
    </Grid>
  );
};

export default App;
