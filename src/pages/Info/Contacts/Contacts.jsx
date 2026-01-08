import { Link } from "react-router-dom";
import {
  RiDiscordFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTelegram2Fill,
} from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import styles from "./contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.links}>
        <Link
          className={styles.link}
          to="https://www.instagram.com/tilingo_org?igsh=MTdlMDlicXU2dXJ6aw=="
        >
          <RiInstagramFill />
          <b>Instagram account of Tilingo</b>
        </Link>
        <Link
          className={styles.link}
          to="https://www.linkedin.com/in/mirlan-rysbekov?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        >
          <RiLinkedinBoxFill />
          <b>Founder's linkedin account</b>
        </Link>
        <Link
          className={styles.link}
          to="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJZZQbVgKLlWtKqsRZHwgwWNswgzckCMcWbrlpZrksgrDxdwdPdTwmCXTdZKfbmPhjVRfNV"
        >
          <SiGmail />
          <b>Founder's gmail account</b>
        </Link>
        <Link className={styles.link} to="https://t.me/mirlanrysbekov">
          <RiTelegram2Fill />
          <b>Founder's telegram account</b>
        </Link>
        <Link
          className={styles.link}
          to="https://discordapp.com/users/1414746121326039050"
        >
          <RiDiscordFill />
          <b>Founder's discord account</b>
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
