import axios from 'axios';

const KEY = 'AIzaSyBQ8Kux3Uj5if2ETHriusr5Kd1jGxC64vQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
