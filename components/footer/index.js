import Copyright from './Copyright'
import Links from './Links'
import NewsLetter from './NewsLetter'
import Payment from './Payment'
import Social from './Social'
import styles from './styles.module.scss'

export default function Footer({country}) {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer__container}>
            <Links></Links>
            <Social></Social>
            <NewsLetter></NewsLetter>
            <Payment></Payment>
            <Copyright country={country}></Copyright>
        </div>
    </footer>
  )
}
