import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/api';
import { Link, useLocation } from 'react-router-dom';

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
      <ul className="filmsList">
        {trending.map(({id, title}) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{from: location}} className="filmLink">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
