import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import SavedWords from "../../components/SavedWords/SavedWords";
import NoUser from "../../components/Auth/NoUser/NoUser";
import { IoIosLogOut } from "react-icons/io";
import styles from "./profile.module.css";
import supabase from "../../services/supabase";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    try {
      const {data: {user}} = await supabase.auth.getUser();

      if (!user) {
        console.error("User not found!!!");
        return
      }

      setUserData(user)
    } catch (error) {
      console.error(`Error while getting user: ${error}`);
    }
  };
  getUser();

  if (!userData) {
    return <NoUser />;
  }

  const LogOut = async () => {
    try {
      const {error} = await supabase.auth.signOut();
      if (error) {
        console.log("Error in loging out!!!");
      }

      window.location.reload()
    } catch (error) {
      console.error(`Error while loging out: ${error}`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <FaUserCircle className={styles.userIcon} />
          <h1 className={styles.nick}>{userData?.email}</h1>
          <IoIosLogOut className={styles.logoutIcon} onClick={LogOut} />
        </div>
        <SavedWords user={userData} />
      </div>
    </div>
  );
};

export default Profile;
