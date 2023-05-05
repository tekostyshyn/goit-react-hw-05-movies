import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/api';

const Home = () => {
  const [trending, setTrending] = useState([]);

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
      <h1 className='mainTitle'>Trending today</h1>
      <ul className='filmsList'>
        {trending.map(film => <li key={film.id}><a href="#" className='filmLink'>{film['original_title']}</a></li>)}
      </ul>
    </>
  );
};

export default Home;
