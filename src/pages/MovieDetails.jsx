import { fetchFilm } from 'services/api';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import dummyMoviePic from 'images/dummy-image-portrait.jpg';

const MovieDetails = () => {
  const [film, setFilm] = useState({
    original_title: '',
    vote_average: 0,
    overview: '',
    genres: [],
  });
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchFilm(movieId);
        setFilm(response);
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
      {film.title && (
        <div>
          <Link className="backLink" to={backLinkHref.current}>
            <HiArrowNarrowLeft /> Go back
          </Link>
          <div className="filmInfo">
            <div className="imgBox">
              <img
                src={
                  film.poster_path
                    ? `https://image.tmdb.org/t/p/original${film.poster_path}`
                    : dummyMoviePic
                }
                alt={film.title}
              />
            </div>
            <div className="textBox">
              <h2 className="title">{film.title}</h2>
              <p className="text">
                User score: {Math.floor(film.vote_average * 10)}%
              </p>
              <h3 className="subtitle">Overview</h3>
              <p className="text">{film.overview}</p>
              <h3 className="subtitle">Genres</h3>
              <p className="text">
                {film.genres.map(genre => (
                  <span className="textGenre" key={genre.id}>
                    {genre.name}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="addInfoBox">
            <p className="subtitle">Additional information</p>
            <ul className="filmsList">
              <Link className="filmLink" to="cast">
                Cast
              </Link>
              <Link className="filmLink" to="reviews">
                Reviews
              </Link>
            </ul>
          </div>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </div>
      )}
      {!film.title && isLoading === false && (
        <div className='text'>Sorry, there is no such film found.</div>
      )}
    </>
  );
};

export default MovieDetails;
