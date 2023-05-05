import { fetchFilm } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const [film, setFilm] = useState({
    original_title: '',
    vote_average: 0,
    overview: '',
    genres: [],
  });
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchFilm(movieId);
        setFilm(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      {film.title && (
        <div className='filmInfo'>
          <div className='imgBox'>
            <img
              src={`https://image.tmdb.org/t/p/original${film.poster_path}
          `}
              alt={film.title}
            />
          </div>
          <div className='textBox'>
            <h2 className='title'>{film.title}</h2>
            <p className='text'>User score: {Math.floor(film.vote_average * 10)}%</p>
            <h3 className='subtitle'>Overview</h3>
            <p className='text'>{film.overview}</p>
            <h3 className='subtitle'>Genres</h3>
            <p className='text'>
              {film.genres.map(genre => (
                <span className='textGenre' key={genre.id}>{genre.name}</span>
              ))}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
