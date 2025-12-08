import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/books/${book.id}`)}>
      <img src={book.imageUrl} alt={`${book.title} cover`} className={styles.cover} />
      <div className={styles.info}>
        <h2 className={styles.title}>{book.title}</h2>
        <p className={styles.author}>by {book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
