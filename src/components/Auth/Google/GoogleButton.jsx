import styles from "./button.module.css";
import supabase from "../../../services/supabase";
import { useEffect } from "react";

const GoogleButton = () => {
  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3001/",
      },
    });
console.log(data);

    if (error) {
      console.error("Error signing in with Google:", error.message);
    } else {
      console.log("Redirecting for Google sign-in...");
    }

  };

  // useEffect(() => {
  //   const { data: listener } = supabase.auth.onAuthStateChange(
  //     async (event, session) => {
  //       if (event === "SIGNED_IN" && session) {
  //         const token = session.access_token;

  //         await fetch("http://localhost:3000/auth/verify", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         });
  //       }
  //     }
  //   );

  //   return () => {
  //     listener?.subscription.unsubscribe();
  //   };
  // }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.divider}>
        <div className={styles.line}></div>
        <span className={styles.orText}>or</span>
        <div className={styles.line}></div>
      </div>

      <button className={styles.button} onClick={handleGoogleLogin}>
        Google
      </button>
    </div>
  );
};

export default GoogleButton;
