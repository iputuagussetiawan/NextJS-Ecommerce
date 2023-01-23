import styles from "./styles.module.scss";

import MainSwiper from "./swiper";
import Offers from "./Offers";
import Menu from "./Menu"
export default function Main() {
  return (
    <div className={styles.main}>
        <div className={styles.header}>Header</div>
        <Menu></Menu>
        <MainSwiper></MainSwiper>
        <Offers></Offers>
      
        <div className={styles.user}>User</div>
    </div>
  );
}
