import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/signin.module.scss'
import {BiLeftArrowAlt} from "react-icons/bi"
import Link from 'next/dist/client/link'

export default function signin({country}) {
  return (
    <>
      <Header country={country}></Header>
      <div className={styles.login}>
        <div className={styles.login__container}>
          <div className={styles.login__header}>
            <div className={styles.back__svg}>
              <BiLeftArrowAlt></BiLeftArrowAlt>
            </div>
            <span> We'd happy to join us ! <Link href="/">Go Store</Link></span>
          </div>
        </div>
      </div>
      <Footer country={country}></Footer>
    </>
  )
}

export async function getServerSideProps() {
  return{
    props:{
      country: { name: "Indonesia", flag: "./images/indonesia.png",},
    }
  }
}
