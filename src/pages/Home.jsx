import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/api';
import { useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchTrending();
        setTrending(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="mainTitle">Trending today</h1>
      <MovieList movies={trending} location={location} />
    </>
  );
};

export default Home;
