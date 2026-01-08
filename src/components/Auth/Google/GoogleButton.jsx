import styles from "./button.module.css";
import supabase from "../../../services/supabase";

const GoogleButton = () => {
  const handleGoogleLogin = async () => {
    try {
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
    } catch (error) {
      console.error(`Sign in error: ${error}`);
    }
  };


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
