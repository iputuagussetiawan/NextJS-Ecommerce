import styles from "./styles.module.scss";

import MainSwiper from "./swiper";
export default function Main() {
  return (
    <div className={styles.main}>
        <div className={styles.header}>Header</div>
        <div className={styles.menu}>Menu</div>
        <MainSwiper></MainSwiper>
        <div className={styles.offer}>Offer</div>
        <div className={styles.user}>User</div>
    </div>
  );
}
