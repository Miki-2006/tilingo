import styles from "./main.module.css";
import PageCards from "./PageCards/PageCards";
import SwiperContainer from "./Swiper/Swiper";
import LanguagesPage from "../Languages/LanguagesPage";

const Main = () => {


  return (
    <div className={styles.main}>
      {/* <Hero/> */}
      <SwiperContainer/>
      <b className={styles.title}>Languages</b>
      <LanguagesPage/>
      <PageCards/>
    </div>
  );
};

export default Main;
