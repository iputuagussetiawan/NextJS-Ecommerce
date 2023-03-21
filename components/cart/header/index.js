import styles from './style.module.scss';
import Link from "next/link"
import {MdPlayArrow} from "react-icons/md"

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.header__container}>
            <div className={styles.header__left}>
                <Link href="/">
                    <img src="../../../logo.png" alt=""></img>
                </Link>
            </div>
            <div className={styles.header__right}>
                <Link href="/browse">
                    Continue Shopping
                    <MdPlayArrow></MdPlayArrow>
                </Link>
            </div>
        </div>
    </div>
  );
}
