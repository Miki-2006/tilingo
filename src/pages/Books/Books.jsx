import { useEffect, useState } from "react";
import BookCard from "./components/BookCard";
import styles from "./page.module.css";

const BooksPage = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://tilingo-server.vercel.app/books/all");
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className={styles.page}>
      <h1 className={styles.heading}>Tilingo Book Collection</h1>
      <div className={styles.bookList}>
        {books &&
          books.map((book, index) => <BookCard key={index} book={book} />)}
      </div>
    </div>
  );
};

export default BooksPage;
