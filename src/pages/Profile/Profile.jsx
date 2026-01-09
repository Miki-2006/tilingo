import { FaUserCircle } from "react-icons/fa";
import SavedWords from "../../components/SavedWords/SavedWords";
import NoUser from "../../components/Auth/NoUser/NoUser";
import { IoIosLogOut } from "react-icons/io";
import styles from "./profile.module.css";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const {user} = useAuth();

  if (!user) {
    return <NoUser />;
  }

  const LogOut = async () => {
    // try {
    //   const {error} = await supabase.auth.signOut();
    //   if (error) {
    //     console.log("Error in loging out!!!");
    //   }

    //   window.location.reload()
    // } catch (error) {
    //   console.error(`Error while loging out: ${error}`);
    // }
    console.log('LOG OUT');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <FaUserCircle className={styles.userIcon} />
          <h1 className={styles.nick}>{user.user_metadata?.email}</h1>
          <IoIosLogOut className={styles.logoutIcon} onClick={LogOut} />
        </div>
        <SavedWords user={user} />
      </div>
    </div>
  );
};

export default Profile;
