import styles from "./page.module.css";
import languages from "../../assets/languages/languages.json";

const LanguagesPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {languages.map((el, index) => (
          <div className={styles.language} key={index}>
            <div className={styles.top}>
              {el["country-flag-icons"].map((el, index) => (
                <img
                  src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${el}`}
                  alt={el}
                  key={index}
                  className={styles.flag}
                />
              ))}
              <b className={styles.abbreviation}>{el.abbreviation}</b>
            </div>
            <span className={styles.description}>{el.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesPage;
