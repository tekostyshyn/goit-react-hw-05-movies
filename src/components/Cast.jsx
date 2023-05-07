import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import dummyCastPic from 'images/dummy-profile-pic.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchCast(movieId);
        setCast(response.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
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
              <img
                className="actorPic"
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                    : dummyCastPic
                }
                width="200px"
                alt={actor.name}
              />
              <p className="text">
                {actor.name} <br />
                Character: {actor.character}
              </p>
            </div>
          ))}
        </>
      )}
      {cast.length <= 0 && isLoading === false && <div>No cast found</div>}
    </>
  );
};

export default Cast;
