import styles from "./header.module.css";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.log} to="/">
        <h1 className={styles.logo}>Tilingo</h1>
      </Link>
      <div className={styles.links}>
        <Link className={styles.link} to="/about">
          <b>about</b>
        </Link>
        <Link className={styles.link} to="/contacts">
          <b>contacts</b>
        </Link>
        <Link to="/profile" style={{"border-left": "2px solid #B39FDA", "padding-left": "clamp(1rem, 2vw, 3rem"}}>
          <FaUserCircle className={styles.user} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
