import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./page.module.css";
import languages from "../../assets/languages/languages.json";

const LanguagesPage = () => {
  return (
    <div className={styles.languages}>
      <Swiper
        spaceBetween={20}
        navigation
        modules={[Navigation]}
        className={styles.swiper}
        slidesPerView={"auto"}
        slidesPerGroup={1}
      >
        {languages.map((el, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.language}>
              <div className={styles.levels}>
                {
                  el.levels.map((l, i) => (
                    <span key={i}>{l}</span>
                  ))
                }
              </div>
              <div className={styles.top}>
                {el["country-flag-icons"].map((flag, i) => (
                  <img
                    src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${flag}`}
                    alt={flag}
                    key={i}
                    className={styles.flag}
                  />
                ))}
              </div>
                <b className={styles.abbreviation}>{el.abbreviation}</b>
              <span className={styles.description}>{el.description}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LanguagesPage;