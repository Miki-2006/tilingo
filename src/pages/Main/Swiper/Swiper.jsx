import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay"
import styles from "./swiper.module.css";

const SwiperContainer = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.slide}><img className={styles.img} src={require("../../../assets/images/kgz.jpg")}  alt="kgz" /></SwiperSlide>
        <SwiperSlide className={styles.slide}><img className={styles.img} src={require("../../../assets/images/rus.jpg")}  alt="rus" /></SwiperSlide>
        <SwiperSlide className={styles.slide}><img className={styles.img} src={require("../../../assets/images/kor.png")}  alt="kor" /></SwiperSlide>
        <SwiperSlide className={styles.slide}><img className={styles.img} src={require("../../../assets/images/usa.png")}  alt="usa" /></SwiperSlide>
        <SwiperSlide className={styles.slide}><img className={styles.img} src={require("../../../assets/images/uk.png")} alt="uk" /></SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
};

export default SwiperContainer;
