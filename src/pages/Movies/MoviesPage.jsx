import { useEffect, useState } from 'react';
import styles from './movies.module.css'
import MovieCard from './components/MovieCard/MovieCard';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://tilingo-server.vercel.app/movies/all");
        const data = await response.json();
        setMovies(data.movies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Tilingo Movie Collection</h1>
      <div className={styles.movieList}>
        {
          movies && movies.map((el, index) => (
            <MovieCard key={index} movie={el} />
          ))
        }
      </div>
    </div>
  );
};

export default MoviesPage;
