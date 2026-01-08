import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import { RiDiscordFill, RiInstagramFill, RiLinkedinBoxFill, RiTelegram2Fill } from "react-icons/ri"
import { SiGmail } from "react-icons/si"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <Link className={styles.link} to="https://www.instagram.com/tilingo_org?igsh=MTdlMDlicXU2dXJ6aw==">
          <RiInstagramFill/>
        </Link>
        <Link className={styles.link} to="https://www.linkedin.com/in/mirlan-rysbekov?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <RiLinkedinBoxFill/>
        </Link>
        <Link className={styles.link} to="https://mail.google.com/mail/u/1/#inbox?compose=CllgCJZZQbVgKLlWtKqsRZHwgwWNswgzckCMcWbrlpZrksgrDxdwdPdTwmCXTdZKfbmPhjVRfNV">
          <SiGmail/>
        </Link>
        <Link className={styles.link} to="https://t.me/mirlanrysbekov">
          <RiTelegram2Fill/>
        </Link>
        <Link className={styles.link} to="https://discordapp.com/users/1414746121326039050">
          <RiDiscordFill/>
        </Link>
      </div>
      <span className={styles.logo}>©2025 Tilingo</span>
    </footer>
  );
};

export default Footer;
