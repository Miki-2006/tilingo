import styles from "./main.module.css";
import Hero from "../../components/Hero/Hero";
import PageCards from "./PageCards/PageCards";
import { useEffect } from "react";
import supabase from "../../services/supabase";
import SwiperContainer from "./Swiper/Swiper";

const Main = () => {

  // useEffect(() => {
  //   const sendTokenToServer = async () => {
  //     const { data, error } = await supabase.auth.getSession();
  //     const token = data?.session?.access_token;

  //     if (token) {
  //       console.log(token );
        
  //       await fetch('https://tilingo-server.vercel.app/auth/verify', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //     }

  //     if (error) {
  //       console.error('Ошибка при получении токена:', error.message);
  //     }
  //   };

  //   sendTokenToServer();
  // }, []);

  return (
    <div className={styles.main}>
      {/* <Hero/> */}
      <SwiperContainer/>
      <PageCards/>
    </div>
  );
};

export default Main;
