import styles from "./styles.module.scss";
export default function Main() {
  return (
    <div className={styles.main}>
        <div className={styles.header}>Header</div>
        <div className={styles.menu}>Menu</div>
        <div className={styles.swiper}>Swiper</div>
        <div className={styles.offer}>Offer</div>
        <div className={styles.user}>User</div>
    </div>
  );
}
