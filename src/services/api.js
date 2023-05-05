import axios from 'axios';

const KEY = '09964a9d83eee864836866e0c73a90b0';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);

  return response.data;
};

export const fetchFilm = async id => {
  const response = await axios.get(`movie/${id}?api_key=${KEY}`);

  return response.data;
};

export const fetchCast = async id => {
  const response = await axios.get(`movie/${id}/credits?api_key=${KEY}`);

  return response.data;
};

export const fetchReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${KEY}`);

  return response.data;
};

export const fetchByQuery = async (query) => {
  const response = await axios.get(`search/movie?api_key=${KEY}&query=${query}`);

  return response.data;
};