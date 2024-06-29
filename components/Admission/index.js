import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button";

const Admission = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftImage}></div>
      <div className={styles.rightContent}>
        <div className={styles.right_textContent}>
          <h1>Air Force School</h1>
          {/* <h3>Air Force School Hindan</h3> */}
          <p>
            Air Force School Hindan was started by the Indian Air Force Educational and Cultural Society with the aim of meeting the educational aspirations of children of Air Force Personnel posted to the National Capital Region. The school made a humble beginning, as a Station Children school, in July 1969
          </p>
          <p>Today, Air Force School Hindan functions under the aegis of Indian Air Force Educational and Cultural Society as a recognized, unaided private school. The school is affiliated to Central Board of Secondary Education, New Delhi and offers educational facilities under 10+2 scheme of education. Air Force School Hindan achieved major milestone in 2011 when it received ISO 9001-2008 certification, confirming its commitment to excellence</p>
          
          <Button
            href=""
            border={"rounded-none"}
            text={"READ MORE "}
            bgcolor={"bg-[#3a3a7c]"}
          />
        </div>
      </div>
    </section>
  );
};
export default Admission;
