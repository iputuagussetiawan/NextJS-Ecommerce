import styles from "./styles.module.scss";

import MainSwiper from "./swiper";
import Offers from "./Offers";
export default function Main() {
  return (
    <div className={styles.main}>
        <div className={styles.header}>Header</div>
        <div className={styles.menu}>Menu</div>
        <MainSwiper></MainSwiper>
        <Offers></Offers>
      
        <div className={styles.user}>User</div>
    </div>
  );
}
