import { useParams } from "react-router-dom";
import styles from "./movie.module.css";
import { useEffect, useState } from "react";

const MovieWatch = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        await fetch(`http://localhost:3000/movies/${id}`)
          .then((res) => res.json())
          .then((data) => setMovie(data));
      } catch (e) {
        console.error(`Error fetching movie: ${e}`);
      }
    };
    fetchMovie();
  }, [id]);

  function convertToEmbedUrl(url) {
    const match = url.match(/(?:shorts\/|watch\?v=)([a-zA-Z0-9_-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  }

  return (
    <div className={styles.container}>
      <b className={styles.title}>{movie?.title}</b>
      <iframe
        src={movie ? convertToEmbedUrl(movie.sourceUrl) : ""}
        frameborder="0"
        className={styles.frame}
      ></iframe>
    </div>
  );
};

export default MovieWatch;
