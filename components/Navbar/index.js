// top nav bar
import styles from "./navbar.module.css";
import Image from "next/image";
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.topBarBg}>
        <div className={styles.barContainer}>
          <div className={styles.left}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faEnvelopeOpen}
              fontSize={"15px"}
              color="white"
            />
            <p>afshindanprincipal@yahoo.com</p>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faPhone}
              fontSize={"15px"}
              color="white"
            />
            <p className={styles.num}>
              <a>+91 000-151-9090</a>
            </p>
          </div>
          <div className={styles.right}>
            <Link href="" passHref target="_blank">
              <p>Addmission</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
