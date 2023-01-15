import Link from "next/link"
import styles from "./styles.module.scss"
import { signOut, signIn } from "next-auth/react"

const UserMenu = ({session}) => {
  return (
    <div className={styles.menu}>
        <h4>Welcome Tp Shoppay</h4>
        {session?
        (
        <div className={styles.flex}>
            <img className={styles.menu__img} src={session.user.image}></img>
            <div className={styles.col}>
                <span>Welcome Back,</span>
                <h3>{session.user.name}</h3>
                <span onClick={()=>signOut()}>Sign out</span>
            </div>
        </div>
        ):(<div className={styles.flex}>
            <button className={styles.btn_primary}>Register</button>
            <button onClick={()=>signIn()} className={styles.btn_outlined}>Login</button>
        </div>)}
        <ul className={styles.menu__list}>
            <li className={styles.menu__item}>
                <Link href="/profile">Account</Link>
            </li>
            <li className={styles.menu__item}>
                <Link href="/profile/orders">My Orders</Link>
            </li>
            <li className={styles.menu__item}>
                <Link href="/profile/messages">Message Center</Link>
            </li>
            <li className={styles.menu__item}>
                <Link href="/profile/address">Address</Link>
            </li>
            <li className={styles.menu__item}>
                <Link href="/profile/whislist">Whislist</Link>
            </li>
          
        </ul>
    </div>
  )
}

export default UserMenu