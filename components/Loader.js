import styles from "./components.module.css";
import Image from "next/image";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <Image
        alt="loader_image"
        className={styles.image}
        layout="fill"
        src="/loader.svg"
        priority
      />
    </div>
  );
}
