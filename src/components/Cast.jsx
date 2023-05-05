import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCast(movieId);
        setCast(response.cast);
        console.log(response.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      {cast.length > 0 && (
        <>
          {cast.map(actor => (
            <div key={actor.id}>
              <img className='actorPic'
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}
                  `}
                alt=""
              />
              <p className="text">
                {actor.name} <br />
                Character: {actor.character}
              </p>
            </div>
          ))}
        </>
      )}
    </>
  );
};
