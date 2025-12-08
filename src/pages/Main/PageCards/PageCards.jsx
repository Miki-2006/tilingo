import { MdQuiz } from "react-icons/md";
import styles from "./page.module.css";
import { SiDictionarydotcom } from "react-icons/si";
import { Link } from "react-router-dom";
import { IoBookSharp, IoLanguage } from "react-icons/io5";
import { PiGraphBold } from "react-icons/pi";
import { RiMovieFill } from "react-icons/ri";

const PageCards = () => {
  return (
    <div className={styles.container}>
      <Link to="/dictionary" className={styles.link}>
        <div className={styles.card1}>
          <SiDictionarydotcom className={styles.icon} />
          <b>Dictionary</b>
        </div>
      </Link>
      <Link to="/quizzes" className={styles.link}>
        <div className={styles.card2}>
          <MdQuiz className={styles.icon} />
          <b>Quizzes</b>
        </div>
      </Link>
      <Link to="/books" className={styles.link}>
        <div className={styles.card3}>
          <IoBookSharp className={styles.icon} />
          <b>Books</b>
        </div>
      </Link>
      <Link to="/graphs" className={styles.link}>
        <div className={styles.card4}>
          <PiGraphBold className={styles.icon} />
          <b>Graphs</b>
        </div>
      </Link>
      <Link to="/movies" className={styles.link}>
        <div className={styles.card4}>
          <RiMovieFill className={styles.icon} />
          <b>Movies</b>
        </div>
      </Link>
      <Link to="/languages" className={styles.link}>
        <div className={styles.card3}>
          <IoLanguage className={styles.icon} />
          <b>Languages</b>
        </div>
      </Link>
    </div>
  );
};

export default PageCards;
