import styles from "./styles.module.scss"
import Link from "next/link"
import {FiSearch} from 'react-icons/fi'
import {FaOpencart} from 'react-icons/fa'
import { useSelector } from "react-redux"

export default function Main() {
    const {cart}=useSelector((state)=>({...state}));
    console.log(cart.length);
  return (
    <div className={styles.main}>
        <div className={styles.main__container}>
            <Link href="/">
                <div className={styles.logo}>
                    <img src={"/images/shop-logo.png"}></img>
                </div>
                <span className={styles.logotext}>GL SHOP</span>
            </Link>
            <div className={styles.search}>
                <input type="text" placeholder="Search..."></input>
                <div className={styles.search__icon}>
                    <FiSearch></FiSearch>
                </div>
            </div>
           <Link href="/cart">
            <div className={styles.cart}>
                <FaOpencart></FaOpencart>
                <span>{cart.length}</span>
            </div>
           </Link>
        </div>
    </div>
  )
}
