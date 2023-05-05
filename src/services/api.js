import axios from 'axios';

const KEY = '09964a9d83eee864836866e0c73a90b0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
    const response = await axios.get(
      `trending/movie/day?api_key=${KEY}`
    );
  
    return response.data
  };