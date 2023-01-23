import styles from "./styles.module.scss";

import MainSwiper from "./swiper";
import Offers from "./Offers";
import Menu from "./Menu"
import User from "./User"
import Header from "./Header";
export default function Main() {
  return (
    <div className={styles.main}>
        <Header></Header>
        <Menu></Menu>
        <MainSwiper></MainSwiper>
        <Offers></Offers>
        <User></User>
    </div>
  );
}
