import axios from 'axios';

let youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: process.env.REACT_APP_YT,
    maxResults: 7,
    part: 'snippet',
    type: 'video',
  },
});

export async function search(term) {
  try {
    let response = await youtube.get('search', {
      params: {
        q: term,
      },
    });

    return response.data.items;
  } catch (error) {
    console.log('error: ', error);
    return [];
  }
}
