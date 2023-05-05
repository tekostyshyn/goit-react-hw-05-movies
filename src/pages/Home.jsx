import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/api';
import { Link } from 'react-router-dom';

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
      <h1 className="mainTitle">Trending today</h1>
      <ul className="filmsList">
        {trending.map(({id, title}) => (
          <li key={id}>
            <Link to={`/movies/${id}`} className="filmLink">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
