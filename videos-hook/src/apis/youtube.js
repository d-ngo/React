import axios from 'axios';

const KEY = 'AIzaSyCCyyUbxJAfIYslWy_jolK6Fy2K8imYsMM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
