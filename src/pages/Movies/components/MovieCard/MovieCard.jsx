import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";

const MovieCard = ({movie}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/movies/${movie.id}`)}>
      <img
        src={movie.cover}
        alt={`${movie.title} cover`}
        className={styles.cover}
      />
      <div className={styles.info}>
        <h2 className={styles.title}>{movie.title}</h2>
        <p className={styles.speaker}>by {movie.speaker}</p>
      </div>
    </div>
  );
};

export default MovieCard;
