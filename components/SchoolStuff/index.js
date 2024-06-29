import Card from "../Card/Card";
import Topper from "./Toppers";
import styles from "./style.module.css";

export const SchoolStuff = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftSide}>
        <Topper />
      </div>
    </section>
  );
};
export default SchoolStuff;
